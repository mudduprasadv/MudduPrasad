#!/usr/bin/env lua

-- Copyright (c) Meta Platforms, Inc. and affiliates.
--
-- This source code is licensed under the MIT license found in the
-- LICENSE file in the root directory of this source tree.

local update_startup_vpp_conf = dofile("/usr/sbin/update_vpp_startup_conf")

local lu = require "luaunit"

TestMain = {}

--- Basic functionality checks.
function TestMain:testBasicFunctionality()
  lu.assertIsFunction(update_startup_vpp_conf.processTemplate)
  lu.assertIsFunction(update_startup_vpp_conf.buildDeviceConfigs)
  lu.assertIsFunction(update_startup_vpp_conf.buildVppStartupConfig)
end

local nodeConfig = {
  cpeConfig = {
    TenGigabitEthernet0 = {
      prefix = "2021::/64",
      wiredSecurityEnable = true
    }
  },
  envParams = {
    FW_TX_RING_DEPTH = "512",
    VPP_COREDUMP_ENABLED = "1",
    VPP_DPDK_LOG_STR = "pmd.net.dpaa2:8,pmd.wil.wmi:debug",
    VPP_FW_RECOVERY_ENABLED = "1",
    VPP_ULA_TEST_PREFIX = "fd00::/64",
    VPP_USE_EEPROM_MACS = "1"
  },
  radioParamsBase = {
    fwParams = {
      wsecEnable = 1
    }
  },
  timingParams = {
    ESMC_ENABLED = "1",
    PTP_VPP_INTERFACE = "TenGigabitEthernet0",
    PTP_VPP_OFFSET_NS = "175",
    PTP_VPP_NXP_PORT = "1,2,3",
    PTP_VSC_PORT = "1"
  }
}
local nodeInfo = {
  NUM_WLAN_MACS = "4",
  MAC_0 = "4a:57:dd:0a:00:02",
  BUS_0 = "0000:01",
  MAC_1 = "4a:57:dd:0a:00:03",
  BUS_1 = "0001:01",
  MAC_2 = "4a:57:dd:0a:00:04",
  BUS_2 = "0002:03",
  MAC_3 = "4a:57:dd:0a:00:05",
  BUS_3 = "0002:04"
}
local startupTemplate = [[
# useless header comment
# uwu
#

unix {
${coredump_config}
}

dpdk {
  ${dpdk_log_config}
  ${devices}
}

terragraph {
${interface_config}
  ${ula_test_prefix}
  ${wsec_enable}
}

${esmc_config}
${ptptc_config}
${tghqos_config}
]]

--- Test template file processing.
function TestMain:testProcessTemplate()
  -- Did the template header comment get replaced?
  local template = update_startup_vpp_conf.processTemplate(startupTemplate)
  lu.assertIsString(template)
  lu.assertStrContains(template, [[
# NOTE: This file is automatically generated. DO NOT EDIT MANUALLY!

unix {
]])
end

--- Test flag to turn off setting mac addresses from node info.
function TestMain:testDeviceConfigNoEeprom()
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs(nodeInfo, {})
  lu.assertIsTable(deviceConf)
  for _, devConf in ipairs(deviceConf) do
    lu.assertIsString(devConf)
    lu.assertNotStrContains(devConf, "mac-address=")
  end
end

--- Test execution with good node info using EEPROM MAC.
function TestMain:testGoodNodeInfo()
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs(
    nodeInfo, nodeConfig
  )
  lu.assertIsTable(deviceConf)
  lu.assertItemsEquals(#deviceConf, tonumber(nodeInfo.NUM_WLAN_MACS))
  for _, devConf in ipairs(deviceConf) do
    lu.assertIsString(devConf)
    lu.assertStrContains(devConf, "devargs")
  end

  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "0000:01")
  lu.assertStrContains(output, "mac-address=4a:57:dd:0a:00:02")
  lu.assertStrContains(output, "0001:01")
  lu.assertStrContains(output, "mac-address=4a:57:dd:0a:00:03")
  lu.assertStrContains(output, "0002:03")
  lu.assertStrContains(output, "mac-address=4a:57:dd:0a:00:04")
  lu.assertStrContains(output, "0002:04")
  lu.assertStrContains(output, "mac-address=4a:57:dd:0a:00:05")
  lu.assertStrContains(output, "ula-test-prefix fd00::/64")
end

--- Test execution with empty node info (that we get reasonable defaults).
function TestMain:testDefaultNodeInfo()
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  lu.assertIsTable(deviceConf)
  lu.assertEquals(#deviceConf, tonumber(nodeInfo.NUM_WLAN_MACS))
  for _, devConf in ipairs(deviceConf) do
    lu.assertIsString(devConf)
    lu.assertStrContains(devConf, "workers")
  end

  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "0000:01")
  lu.assertStrContains(output, "0001:01")
  lu.assertStrContains(output, "0002:03")
  lu.assertStrContains(output, "0002:04")
end

--- Test flag to enable core dumps from node config.
function TestMain:testCoredumpConfig()
  -- Try enabled
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "coredump-size unlimited")
  lu.assertStrContains(output, "full-coredump")

  -- Try disabled (default)
  output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, {}, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "coredump-size 1")
end

--- Test flag to enable firmware recovery from node config.
function TestMain:testFwRecoveryConfig()
  -- Try enabled
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs(
    nodeInfo, nodeConfig
  )
  lu.assertIsTable(deviceConf)
  for i, devConf in ipairs(deviceConf) do
    lu.assertIsString(devConf)
    lu.assertNotStrContains(devConf, "no-fw-recovery")
  end

  -- Try disabled (default)
  deviceConf = update_startup_vpp_conf.buildDeviceConfigs(nodeInfo, {})
  lu.assertIsTable(deviceConf)
  for i, devConf in ipairs(deviceConf) do
    lu.assertIsString(devConf)
    lu.assertStrContains(devConf, "no-fw-recovery=1")
  end
end

--- Test WiGig tx ring depth configuration for tghqos.
function TestMain:testFwTxRingDepthConfig()
  -- Try enabled
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "tghqos")
  lu.assertStrContains(output, "fw-tx-ring-depth 512")

  -- Try default config
  output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, {}, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "tghqos")
  lu.assertStrContains(output, "fw-tx-ring-depth 256")
end

--- Test flag to enable wsec configuration for tgcfg.
function TestMain:testWsecEnableConfig()
  -- Try enabled
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "wsec on")

  -- Try disabled
  output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, {}, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "wsec off")
end

--- Test flag to enable wired security configuration for tgcfg.
function TestMain:testWiredSecurityEnableConfig()
  -- Try enabled
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, [[
  interface TenGigabitEthernet0 {
    tap nic0
    ipv6 slowpath off
    wired security on
  }
]])

  -- Try disabled
  output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, {}, deviceConf
  )
  lu.assertIsString(output)
  lu.assertNotStrContains(output, "wired security on")
  lu.assertNotStrContains(output, "ipv6 slowpath off")
end

--- Test ESMC configuration for vpp-esmc.
function TestMain:testEsmcConfig()
  -- Try enabled
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, [[
esmc {
  on
  input TenGigabitEthernet0
  output TenGigabitEthernet0
  enable-tg-input
  enable-tg-output
}
]])

  -- Try disabled
  output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, {}, deviceConf
  )
  lu.assertIsString(output)
  lu.assertNotStrContains(output, "esmc {")
end

--- Test PTP-TC configuration for vpp-ptptc.
function TestMain:testPtptcConfig()
  -- Try enabled
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, [[
ptptc {
  interface TenGigabitEthernet0
  offset-ns 175
  port 1
  port 2
  port 3
  rx-checksum-offload
  rx-ptp-classify-offload
}
]])

  -- Try disabled
  output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, {}, deviceConf
  )
  lu.assertIsString(output)
  lu.assertNotStrContains(output, "ptptc {")
end

--- Test VPP DPDK log configuration.
function TestMain:TestVppDpdkLogConfig()
  -- Try with a log string
  local deviceConf = update_startup_vpp_conf.buildDeviceConfigs({}, nodeConfig)
  local output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, nodeConfig, deviceConf
  )
  lu.assertIsString(output)
  lu.assertStrContains(output, "log-level pmd.net.dpaa2:8")
  lu.assertStrContains(output, "log-level pmd.wil.wmi:debug")

  -- Try with no log string
  output = update_startup_vpp_conf.buildVppStartupConfig(
    startupTemplate, {}, deviceConf
  )
  lu.assertIsString(output)
  lu.assertNotStrContains(output, "log-level")
end

os.exit(lu.LuaUnit.run("-v"))
