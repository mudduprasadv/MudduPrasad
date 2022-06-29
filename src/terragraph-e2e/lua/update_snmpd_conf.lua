#!/usr/bin/env lua

-- Copyright (c) Meta Platforms, Inc. and affiliates.
--
-- This source code is licensed under the MIT license found in the
-- LICENSE file in the root directory of this source tree.

--- Writes a custom snmp config file using parameters from node configuration.
-- @script update_snmpd_conf

local tg_utils = require "tg.utils"
local logger = require "tg.logger"
local argparse = require "argparse"
local tablex = require "pl.tablex"
local Template = (require "pl.text").Template

local C = {}

-- File paths
local CONFIG_FILE = "/data/cfg/node_config.json"
local SNMPD_CONFIG_FILE = "/var/run/snmpd.conf"

-- Template strings
local CONFIG_BASE = [[
# NOTE: This file is automatically generated. DO NOT EDIT MANUALLY!

# listen on all interfaces
agentAddress udp6:161

# enable agentx socket
master agentx
]]

local SYSLOCATION_FORMAT = Template("syslocation ${location}\n")

local SYSCONTACT_FORMAT = Template("syscontact ${contact}\n")

local SNMP_V2C_FORMAT = Template([[
# snmp v2c config - ${name}
rocommunity6 ${community} ${source}
]])

local SNMP_V3_FORMAT = Template([[
# snmp v3 config - ${name}
rouser ${username}
createUser ${username} ${authType} "${authPassphrase}" ${privProtocol} ${privPassphrase}
]])

function C.quoteString(str)
  return '"' .. str .. '"'
end

function C.buildSnmpdConfig(config)
  local snmpConfig = CONFIG_BASE
  local snmpParams = tg_utils.get(config, "snmpConfig") or {
    location = "Undefined",
    contact = "Undefined"
  }
  snmpConfig = snmpConfig .. SYSLOCATION_FORMAT:substitute{
    location = snmpParams.location
  }
  snmpConfig = snmpConfig .. SYSCONTACT_FORMAT:substitute{
    contact = snmpParams.contact
  }

  if snmpParams.snmpV2C ~= nil then
    snmpConfig = snmpConfig .. C.generateSnmpV2Config(snmpParams.snmpV2C)
  end

  if snmpParams.snmpV3 ~= nil then
    snmpConfig = snmpConfig .. C.generateSnmpV3Config(snmpParams.snmpV3)
  end

  return snmpConfig
end

function C.generateSnmpV2Config(snmpV2cParams)
  local snmpConfig = ""
  local snmpKeys = tablex.keys(snmpV2cParams)
  for _, name in ipairs(snmpKeys) do
    local params = snmpV2cParams[name]
    snmpConfig = snmpConfig .. SNMP_V2C_FORMAT:substitute{
      name = name,
      community = params.community,
      source = params.source or ""
    }:rstrip() .. "\n"
  end
  return snmpConfig
end

function C.generateSnmpV3Config(snmpV3Params)
  local snmpConfig = ""
  local snmpKeys = tablex.keys(snmpV3Params)
  for _, name in ipairs(snmpKeys) do
    local params = snmpV3Params[name]
    -- if either privPassphrase or privProtocol is set then both must be set
    if (params.privPassphrase == nil and params.privProtocol) or
       (params.privPassphrase and params.privProtocol == nil) then
      logger.error(
        "Privacy protocol and passphrase must both be set for %s", name
      )
    else
      snmpConfig = snmpConfig .. SNMP_V3_FORMAT:substitute{
        name = name,
        username = params.username,
        authPassphrase = params.authPassphrase,
        authType = params.authType,
        privPassphrase = params.privPassphrase and
          C.quoteString(params.privPassphrase) or "",
        privProtocol = params.privProtocol or ""
      }:rstrip() .. "\n"
    end
  end
  return snmpConfig
end

function C.main()
  local parser = argparse(
    "update_snmpd_conf",
    "Writes a custom snmp config file using parameters from node configuration."
  )
  parser:option(
    "-i --node_config_file", "Path to the node config file", CONFIG_FILE
  )
  parser:option(
    "-c --snmp_config_file", "Path to the snmp config file", SNMPD_CONFIG_FILE
  )
  local args = parser:parse()
  local config = tg_utils.readJsonFile(args.node_config_file)
  if config ~= nil then
    local snmpConfig = C.buildSnmpdConfig(config)
    if not tg_utils.writeFile(args.snmp_config_file, snmpConfig) then
      os.exit(1)
    end
  end
end

if tg_utils.isMain() then
  C.main()
else
  return C
end