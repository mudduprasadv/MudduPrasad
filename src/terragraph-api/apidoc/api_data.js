define({ "api": [
  {
    "type": "get",
    "url": "/getAggregatorConfig",
    "title": "Get Aggregator Config",
    "version": "2.0.0",
    "name": "GetAggregatorConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "E2EConfiguration",
    "description": "<p>Retrieves the aggregator configuration.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getAggregatorConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"config\": \"{\\\"flags\\\":{\\\"v\\\":\\\"4\\\"}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The aggregator config (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "E2E Configuration"
  },
  {
    "type": "get",
    "url": "/getAggregatorConfigMetadata",
    "title": "Get Aggregator Config Metadata",
    "version": "2.0.0",
    "name": "GetAggregatorConfigMetadata",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "E2EConfiguration",
    "description": "<p>Retrieves the aggregator configuration metadata.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getAggregatorConfigMetadata",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"metadata\": \"... <json>\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata",
            "description": "<p>The aggregator config parameter metadata (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "E2E Configuration"
  },
  {
    "type": "get",
    "url": "/getControllerConfig",
    "title": "Get Controller Config",
    "version": "2.0.0",
    "name": "GetControllerConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "E2EConfiguration",
    "description": "<p>Retrieves the controller configuration.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getControllerConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"config\": \"{\\\"flags\\\":{\\\"v\\\":\\\"3\\\"}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The controller config (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "E2E Configuration"
  },
  {
    "type": "get",
    "url": "/getControllerConfigMetadata",
    "title": "Get Controller Config Metadata",
    "version": "2.0.0",
    "name": "GetControllerConfigMetadata",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "E2EConfiguration",
    "description": "<p>Retrieves the controller configuration metadata.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getControllerConfigMetadata",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"metadata\": \"... <json>\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata",
            "description": "<p>The controller config parameter metadata (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "E2E Configuration"
  },
  {
    "type": "post",
    "url": "/setAggregatorConfig",
    "title": "Set Aggregator Config",
    "version": "2.0.0",
    "name": "SetAggregatorConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "E2EConfiguration",
    "description": "<p>Sets the aggregator configuration.</p> <p>The aggregator configuration provided will completely replace the existing aggregator configuration.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"config\": \"{\\\"flags\\\":{\\\"v\\\":\\\"4\\\"}}\"}' http://localhost:443/api/v2/setAggregatorConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "E2E Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The aggregator config (JSON)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/setControllerConfig",
    "title": "Set Controller Config",
    "version": "2.0.0",
    "name": "SetControllerConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "E2EConfiguration",
    "description": "<p>Sets the controller configuration.</p> <p>The controller configuration provided will completely replace the existing controller configuration.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"config\": \"{\\\"flags\\\":{\\\"v\\\":\\\"3\\\"}}\"}' http://localhost:443/api/v2/setControllerConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "E2E Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The controller config (JSON)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/forceDissoc",
    "title": "Force Dissoc",
    "version": "2.0.0",
    "name": "ForceDissoc",
    "permission": [
      {
        "name": "IGNITION_WRITE"
      }
    ],
    "group": "Ignition",
    "description": "<p>Forcefully disassociate a link to a given responder MAC address (which does not need to exist in the current topology).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"initiatorMac\": \"11:22:33:44:55:66\", \"responderMac\": \"aa:bb:cc:dd:ee\"}' http://localhost:443/api/v2/forceDissoc",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Ignition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initiatorMac",
            "description": "<p>The initiator MAC address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "responderMac",
            "description": "<p>The responder MAC address (does not need to be in the topology)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getIgnitionState",
    "title": "Get Ignition State",
    "version": "2.0.0",
    "name": "GetIgnitionState",
    "permission": [
      {
        "name": "IGNITION_READ"
      }
    ],
    "group": "Ignition",
    "description": "<p>Retrieves the ignition state of the network.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getIgnitionState",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"igCandidates\": [],\n    \"igParams\": {\n        \"enable\": true,\n        \"linkUpDampenInterval\": 35,\n        \"linkUpInterval\": 5,\n        \"linkAutoIgnite\": {}\n    },\n    \"lastIgCandidates\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object(IgnitionCandidate)[]",
            "optional": false,
            "field": "igCandidates",
            "description": "<p>The ignition candidates</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(IgnitionCandidate)[]",
            "optional": false,
            "field": "lastIgCandidates",
            "description": "<p>The last ignition candidates</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(IgnitionParams)",
            "optional": false,
            "field": "igParams",
            "description": "<p>The ignition parameters</p>"
          }
        ],
        ":IgnitionCandidate": [
          {
            "group": ":IgnitionCandidate",
            "type": "String",
            "optional": false,
            "field": "initiatorNodeName",
            "description": "<p>The name of the initiator node</p>"
          },
          {
            "group": ":IgnitionCandidate",
            "type": "String",
            "optional": false,
            "field": "linkName",
            "description": "<p>The link name</p>"
          }
        ],
        ":IgnitionParams": [
          {
            "group": ":IgnitionParams",
            "type": "Boolean",
            "optional": true,
            "field": "enable",
            "description": "<p>The state of network-wide ignition</p>"
          },
          {
            "group": ":IgnitionParams",
            "type": "Int64",
            "optional": true,
            "field": "linkUpInterval",
            "description": "<p>The frequency of ignition</p>"
          },
          {
            "group": ":IgnitionParams",
            "type": "Int64",
            "optional": true,
            "field": "linkUpDampenInterval",
            "description": "<p>The interval of ignition on the same link</p>"
          },
          {
            "group": ":IgnitionParams",
            "type": "Map(String:Boolean)",
            "optional": true,
            "field": "linkAutoIgnite",
            "description": "<p>The per-link auto ignition (linkName:enable)</p>"
          },
          {
            "group": ":IgnitionParams",
            "type": "Int64",
            "optional": true,
            "field": "bfTimeoutSec",
            "description": "<p>The ignition timeout on each minion (also accounting for network delays), in seconds</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Ignition"
  },
  {
    "type": "post",
    "url": "/setIgnitionState",
    "title": "Set Ignition State",
    "version": "2.0.0",
    "name": "SetIgnitionState",
    "permission": [
      {
        "name": "IGNITION_WRITE"
      }
    ],
    "group": "Ignition",
    "description": "<p>Sets the ignition parameters for the network.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"enable\": true, \"linkAutoIgnite\": {\"link-terra121.f5.td.a404-if-terra222.f5.td.a404-if\": false}}' http://localhost:443/api/v2/setIgnitionState",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Ignition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "enable",
            "description": "<p>The state of network-wide ignition</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": true,
            "field": "linkUpInterval",
            "description": "<p>The frequency of ignition</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": true,
            "field": "linkUpDampenInterval",
            "description": "<p>The interval of ignition on the same link</p>"
          },
          {
            "group": "Parameter",
            "type": "Map(String:Boolean)",
            "optional": true,
            "field": "linkAutoIgnite",
            "description": "<p>The per-link auto ignition (linkName:enable)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": true,
            "field": "bfTimeoutSec",
            "description": "<p>The ignition timeout on each minion (also accounting for network delays), in seconds</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/setLinkStatus",
    "title": "Set Link Status",
    "version": "2.0.0",
    "name": "SetLinkStatus",
    "permission": [
      {
        "name": "IGNITION_WRITE"
      }
    ],
    "group": "Ignition",
    "description": "<p>Sets the status of a link.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"action\": 2, \"initiatorNodeName\": \"terra111.f5.td.a404-if\", \"responderNodeName\": \"terra212.f5.td.a404-if\"}' http://localhost:443/api/v2/setLinkStatus",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Ignition",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int(LinkActionType)",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "action",
            "description": "<p>The link update action (1=LINK_UP, 2=LINK_DOWN)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "initiatorNodeName",
            "description": "<p>The initiator node</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "responderNodeName",
            "description": "<p>The responder node</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getAggrStatusDump",
    "title": "Get Aggregator Status Dump",
    "version": "2.0.0",
    "name": "GetAggrStatusDump",
    "permission": [
      {
        "name": "MANAGEMENT_READ"
      }
    ],
    "group": "Management",
    "description": "<p>Retrieves the aggregator status dump.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getAggrStatusDump",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"version\": \"Facebook Terragraph Release RELEASE_M78_PRE-127-gb0e7b3870-jeffreyhan jeffreyhan@devvm1523 2021-12-20T22:25:33\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "version",
            "description": "<p>The aggregator version sourced from &quot;/etc/tgversion&quot;</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management"
  },
  {
    "type": "get",
    "url": "/getCtrlStatusDump",
    "title": "Get Controller Status Dump",
    "version": "2.0.0",
    "name": "GetCtrlStatusDump",
    "permission": [
      {
        "name": "MANAGEMENT_READ"
      }
    ],
    "group": "Management",
    "description": "<p>Retrieves the latest status reports to the controller from all nodes in the network.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getCtrlStatusDump",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"statusReports\": {\n        \"00:00:00:11:22:33\": {\n            \"configMd5\": \"60f72d8eb83ba1b99fbcf200a7294aae\",\n            \"firmwareVersion\": \"10.11.0.92\",\n            \"hardwareBoardId\": \"NXP_LS1048A_PUMA\",\n            \"hardwareModel\": \"NXP TG Board LS1048A (PUMA)\",\n            \"ipv6Address\": \"2001::1\",\n            \"lastAckGpsTimestamp\": 1.3242414705326e+15,\n            \"neighborConnectionStatus\": {},\n            \"networkInterfaceMacs\": {},\n            \"nodeReachability\": 1,\n            \"nodeType\": 2,\n            \"radioStatus\": {\n              \"aa:bb:cc:dd:ee:ff\": {\n                \"gpsSync\": true,\n                \"initialized\": true,\n                \"nodeParamsSet\": true\n              }\n            },\n            \"sentGpsTimestamp\": 1.3242414755734e+15,\n            \"status\": 3,\n            \"timeStamp\": 1640206257,\n            \"ubootVersion\": \"Terragraph Uboot Version: 1.0\",\n            \"upgradeStatus\": {\n                \"nextImage\": {\n                    \"hardwareBoardIds\": {},\n                    \"md5\": \"\",\n                    \"model\": \"\",\n                    \"version\": \"\"\n                },\n                \"reason\": \"\",\n                \"upgradeReqId\": \"\",\n                \"usType\": 10,\n                \"whenToCommit\": 0\n            },\n            \"version\": \"Facebook Terragraph Release RELEASE_M78_PRE-127-gb0e7b3870-jeffreyhan jeffreyhan@devvm1523 2021-12-20T22:25:33\"\n        },\n        ... <more nodes>\n    },\n    \"timeStamp\": 1640206257,\n    \"version\": \"Facebook Terragraph Release RELEASE_M78_PRE-127-gb0e7b3870-jeffreyhan jeffreyhan@devvm1523 2021-12-20T22:25:33\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int64",
            "optional": false,
            "field": "timeStamp",
            "description": "<p>The time at which this response was generated</p>"
          },
          {
            "group": "Success 200",
            "type": "Map(String:Object(StatusReport))",
            "optional": false,
            "field": "statusReports",
            "description": "<p>The per-node status reports</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": true,
            "field": "version",
            "description": "<p>The controller version sourced from &quot;/etc/tgversion&quot;</p>"
          }
        ],
        ":StatusReport": [
          {
            "group": ":StatusReport",
            "type": "Int64",
            "optional": false,
            "field": "timeStamp",
            "description": "<p>The time at which this response was received</p>"
          },
          {
            "group": ":StatusReport",
            "type": "String",
            "optional": false,
            "field": "ipv6Address",
            "description": "<p>The globally-reachable IPv6 address of the minion</p>"
          },
          {
            "group": ":StatusReport",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>The current minion version (from &quot;/etc/tgversion&quot;)</p>"
          },
          {
            "group": ":StatusReport",
            "type": "String",
            "optional": false,
            "field": "ubootVersion",
            "description": "<p>The uboot version string (obtained at startup)</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Int(NodeStatusType)",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The ignition state of the minion (1=OFFLINE, 2=ONLINE, 3=ONLINE_INITIATOR)</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Object(UpgradeStatus)",
            "optional": false,
            "field": "upgradeStatus",
            "description": "<p>The upgrade status</p>"
          },
          {
            "group": ":StatusReport",
            "type": "String",
            "optional": false,
            "field": "hardwareModel",
            "description": "<p>The hardware model</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Map(String:Object(BgpInfo))",
            "optional": false,
            "field": "bgpStatus",
            "description": "<p>If this is a POP node, this will contain a map of BGP neighbor IPs to summary and route information</p>"
          },
          {
            "group": ":StatusReport",
            "type": "String",
            "optional": false,
            "field": "hardwareBoardId",
            "description": "<p>The hardware board identity</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Int64",
            "optional": false,
            "field": "nodeReachability",
            "description": "<p>Percentage of ack success for status reports sent from node</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Map(String:Boolean",
            "optional": false,
            "field": "neighborConnectionStatus",
            "description": "<p>Map of remote mac addresses for this node's wired connections to status of those conenctions</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Map(String:String)",
            "optional": false,
            "field": "networkInterfaceMacs",
            "description": "<p>Map of network interfaces on node to MAC addresses of the interfaces</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Int64",
            "optional": false,
            "field": "lastAckGpsTimestamp",
            "description": "<p>The GPS timestamp when the node received the last status report ACK (microseconds since GPS epoch).</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Int64",
            "optional": false,
            "field": "sentGpsTimestamp",
            "description": "<p>The GPS timestamp when the node is sending this status report (microseconds since GPS epoch).</p>"
          },
          {
            "group": ":StatusReport",
            "type": "Map(String:Object(RadioStatus))",
            "optional": false,
            "field": "radioStatus",
            "description": "<p>Map of radio MAC addresses to status information</p>"
          },
          {
            "group": ":StatusReport",
            "type": "String",
            "optional": false,
            "field": "firmwareVersion",
            "description": "<p>The wireless firmware version</p>"
          }
        ],
        ":UpgradeStatus": [
          {
            "group": ":UpgradeStatus",
            "type": "Int(UpgradeStatusType)",
            "allowedValues": [
              "10",
              "20",
              "30",
              "40",
              "50",
              "60",
              "70"
            ],
            "optional": false,
            "field": "usType",
            "description": "<p>The upgrade status type (10=NONE, 20=DOWNLOADING_IMAGE, 30=DOWNLOAD_FAILED, 40=FLASHING_IMAGE, 50=FLASH_FAILED, 60=FLASHED, 70=COMMIT_FAILED)</p>"
          },
          {
            "group": ":UpgradeStatus",
            "type": "Object(ImageMeta)",
            "optional": false,
            "field": "nextImage",
            "description": "<p>The meta-info for the next image</p>"
          },
          {
            "group": ":UpgradeStatus",
            "type": "String",
            "optional": false,
            "field": "reason",
            "description": "<p>The reason for the current status (if any)</p>"
          },
          {
            "group": ":UpgradeStatus",
            "type": "String",
            "optional": false,
            "field": "upgradeReqId",
            "description": "<p>The upgrade request ID</p>"
          },
          {
            "group": ":UpgradeStatus",
            "type": "Int64",
            "optional": false,
            "field": "whenToCommit",
            "description": "<p>When to commit the upgrade (UNIX time)</p>"
          }
        ],
        ":ImageMeta": [
          {
            "group": ":ImageMeta",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>The image MD5 digest</p>"
          },
          {
            "group": ":ImageMeta",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>The image version string</p>"
          },
          {
            "group": ":ImageMeta",
            "type": "String",
            "optional": false,
            "field": "model",
            "description": "<p>The targeted hardware model</p>"
          },
          {
            "group": ":ImageMeta",
            "type": "String[]",
            "optional": false,
            "field": "hardwareBoardIds",
            "description": "<p>The supported hardware board IDs</p>"
          }
        ],
        ":BgpInfo": [
          {
            "group": ":BgpInfo",
            "type": "String",
            "optional": false,
            "field": "ipv6Address",
            "description": "<p>The BGP neighbor's IPv6 address</p>"
          },
          {
            "group": ":BgpInfo",
            "type": "Boolean",
            "optional": false,
            "field": "online",
            "description": "<p>Whether the neighbor is online or not</p>"
          },
          {
            "group": ":BgpInfo",
            "type": "Int32",
            "optional": false,
            "field": "asn",
            "description": "<p>Autonomous System Number</p>"
          },
          {
            "group": ":BgpInfo",
            "type": "String",
            "optional": false,
            "field": "upDownTime",
            "description": "<p>Connection up/down time in hh:mm:ss format</p>"
          },
          {
            "group": ":BgpInfo",
            "type": "String",
            "optional": false,
            "field": "stateOrPfxRcd",
            "description": "<p>If connected, the number of prefixes received, otherwise the current state of the neighbor</p>"
          },
          {
            "group": ":BgpInfo",
            "type": "Object(BgpRouteInfo)[]",
            "optional": false,
            "field": "advertisedRoutes",
            "description": "<p>List of advertised routes</p>"
          },
          {
            "group": ":BgpInfo",
            "type": "Object(BgpRouteInfo)[]",
            "optional": false,
            "field": "receivedRoutes",
            "description": "<p>List of received routes</p>"
          }
        ],
        ":BgpRouteInfo": [
          {
            "group": ":BgpRouteInfo",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>The network's IPv6 address</p>"
          },
          {
            "group": ":BgpRouteInfo",
            "type": "String",
            "optional": false,
            "field": "nextHop",
            "description": "<p>The next hop network's IPv6 address</p>"
          }
        ],
        ":RadioStatus": [
          {
            "group": ":RadioStatus",
            "type": "Boolean",
            "optional": false,
            "field": "initialized",
            "description": "<p>Whether the radio is initialized</p>"
          },
          {
            "group": ":RadioStatus",
            "type": "Boolean",
            "optional": false,
            "field": "gpsSync",
            "description": "<p>Whether the GPS is in sync</p>"
          },
          {
            "group": ":RadioStatus",
            "type": "Boolean",
            "optional": false,
            "field": "nodeParamsSet",
            "description": "<p>Whether any NodeParams message has been sent and acknowledged</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management"
  },
  {
    "type": "post",
    "url": "/getDefaultRoutes",
    "title": "Get Default Routes",
    "version": "2.0.0",
    "name": "GetDefaultRoutes",
    "permission": [
      {
        "name": "MANAGEMENT_READ"
      }
    ],
    "group": "Management",
    "description": "<p>Returns a map of node names to list of default routes.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodes\": [\"terra221.f3.tg.a404-if\", \"terra524.f5.tg.a404-if\"]}' http://localhost:443/api/v2/getDefaultRoutes",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"defaultRoutes\": {\n        \"terra221.f3.tg.a404-if\": [\n            [\n                \"terra221.f3.tg.a404-if\",\n                \"terra223.f3.tg.a404-if\",\n                \"terra324.f1.tg.a404-if\",\n                \"terra322.f1.tg.a404-if\",\n                \"terra221.f1.tg.a404-if\",\n                \"terra222.f1.tg.a404-if\",\n                \"terra121.f1.tg.a404-if\"\n            ]\n        ],\n        \"terra524.f5.tg.a404-if\": [\n            [\n                \"terra524.f5.tg.a404-if\",\n                \"terra513.f7.tg.a404-if\",\n                \"terra514.f7.tg.a404-if\",\n                \"terra523.f7.tg.a404-if\",\n                \"terra522.f7.tg.a404-if\",\n                \"terra421.f7.tg.a404-if\",\n                \"terra423.f7.tg.a404-if\",\n                \"terra414.f7.tg.a404-if\",\n                \"terra411.f7.tg.a404-if\"\n            ],\n            [\n                \"terra524.f5.tg.a404-if\",\n                \"terra513.f7.tg.a404-if\",\n                \"terra514.f7.tg.a404-if\",\n                \"terra523.f7.tg.a404-if\",\n                \"terra522.f7.tg.a404-if\",\n                \"terra421.f7.tg.a404-if\",\n                \"terra423.f7.tg.a404-if\",\n                \"terra414.f7.tg.a404-if\",\n                \"terra121.f1.tg.a404-if\"\n            ]\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(String:String[][])",
            "optional": false,
            "field": "defaultRoutes",
            "description": "<p>Map of node names to list of default routes</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of source node names</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getHighAvailabilityState",
    "title": "Get High Availability State",
    "version": "2.0.0",
    "name": "GetHighAvailabilityState",
    "permission": [
      {
        "name": "MANAGEMENT_READ"
      }
    ],
    "group": "Management",
    "description": "<p>Returns the controller's state in the High Availability state machine.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getHighAvailabilityState",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"peerExpiry\": 1517860326320,\n    \"state\": 3\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Int(BinaryStarFsmState)",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3",
              "4"
            ],
            "optional": false,
            "field": "state",
            "description": "<p>The current state in the finite state machine (1=STATE_PRIMARY, 2=STATE_BACKUP, 3=STATE_ACTIVE, 4=STATE_PASSIVE). If High Availability mode is not enabled, this will be 0.</p>"
          },
          {
            "group": "Success 200",
            "type": "Int64",
            "optional": false,
            "field": "peerExpiry",
            "description": "<p>The millisecond timestamp for a peer timeout</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management"
  },
  {
    "type": "post",
    "url": "/getRoutes",
    "title": "Get Routes",
    "version": "2.0.0",
    "name": "GetRoutes",
    "permission": [
      {
        "name": "MANAGEMENT_READ"
      }
    ],
    "group": "Management",
    "description": "<p>Returns the list of routes between a source and destination node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"srcNode\": \"terra114.f5.tb.a404-if\", \"dstNode\": \"terra223.f5.tb.a404-if\"}' http://localhost:443/api/v2/getRoutes",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"routes\": [\n        [\n            \"terra114.f5.tb.a404-if\",\n            \"terra111.f5.tb.a404-if\",\n            \"terra212.f5.tb.a404-if\",\n            \"terra214.f5.tb.a404-if\",\n            \"terra223.f5.tb.a404-if\"\n        ],\n        [\n            \"terra114.f5.tb.a404-if\",\n            \"terra123.f5.tb.a404-if\",\n            \"terra121.f5.tb.a404-if\",\n            \"terra222.f5.tb.a404-if\",\n            \"terra223.f5.tb.a404-if\"\n        ]\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[][]",
            "optional": false,
            "field": "routes",
            "description": "<p>The list of routes between the source and destination nodes</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "srcNode",
            "description": "<p>The source node name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dstNode",
            "description": "<p>The destination node name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getRoutingAdjacencies",
    "title": "Get Routing Adjacencies",
    "version": "2.0.0",
    "name": "GetRoutingAdjacencies",
    "permission": [
      {
        "name": "MANAGEMENT_READ"
      }
    ],
    "group": "Management",
    "description": "<p>Retrieves a dump of adjacencies and prefixes for the entire network.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getRoutingAdjacencies",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"adjacencyMap\": {\n         \"node-00.00.00.10.0b.40\": {\n             \"adjacencies\": [\n                 {\n                     \"adjLabel\": 0,\n                     \"ifName\": \"terra0\",\n                     \"isOverloaded\": false,\n                     \"metric\": 1,\n                     \"nextHopV4\": {\n                         \"addr\": \"AAAAAA\"\n                     },\n                     \"nextHopV6\": {\n                         \"addr\": \"/oAAAAAAAAACAAD//hALRQ\"\n                     },\n                     \"otherIfName\": \"terra0\",\n                     \"otherNodeName\": \"node-00.00.00.10.0b.45\",\n                     \"rtt\": 19857,\n                     \"timestamp\": 1528413412,\n                     \"weight\": 1\n                 },\n                 ... <more adjacencies>\n             ],\n             \"isOverloaded\": false,\n             \"nodeLabel\": 12844,\n             \"thisNodeName\": \"node-00.00.00.10.0b.40\"\n         },\n         ... <more nodes>\n     },\n     \"prefixMap\": {\n         \"node-00.00.00.10.0b.40\": {\n             \"prefixEntries\": [\n                 {\n                     \"data\": \"\",\n                     \"prefix\": {\n                         \"prefixAddress\": {\n                             \"addr\": \"AAAAAAAAAAAAAAAAAAAAAA\"\n                         },\n                         \"prefixLength\": 0\n                     },\n                     \"type\": 5\n                 },\n                 {\n                     \"data\": \"\",\n                     \"prefix\": {\n                         \"prefixAddress\": {\n                             \"addr\": \"JiABDcCJIWQAAAAAAAAAAA\"\n                         },\n                         \"prefixLength\": 64\n                     },\n                     \"type\": 4\n                 }\n             ],\n             \"thisNodeName\": \"node-00.00.00.10.0b.40\"\n         },\n         ... <more nodes>\n     },\n     \"network\": \"2620:10d:c089:af00::/56\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(String:Object(AdjacencyDatabase))",
            "optional": false,
            "field": "adjacencyMap",
            "description": "<p>The adjacency map (nodeId:adjacencyDb)</p>"
          },
          {
            "group": "Success 200",
            "type": "Map(String:Object(PrefixDatabase))",
            "optional": false,
            "field": "prefixMap",
            "description": "<p>The prefix map (nodeId:prefixDb)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "network",
            "description": "<p>The E2E network prefix</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management"
  },
  {
    "type": "post",
    "url": "/getSysdump",
    "title": "Get Sysdump",
    "version": "2.0.0",
    "name": "GetSysdump",
    "permission": [
      {
        "name": "MANAGEMENT_WRITE"
      }
    ],
    "group": "Management",
    "description": "<p>Fetch a sysdump from the given node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"node\": \"terra114.f5.td.a404-if\"} http://localhost:442/api/v2/getSysdump",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"filename\": \"sysdump-38:3a:21:b0:11:67-1596474697.tgz\",\n    \"error\": \"\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "bool",
            "optional": false,
            "field": "success",
            "description": "<p>Successfully started sysdump</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "filename",
            "description": "<p>The filename of the sysdump tarball</p>"
          },
          {
            "group": "Success 200",
            "type": "string",
            "optional": false,
            "field": "error",
            "description": "<p>Error message</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node",
            "description": "<p>The node to fetch a sysdump from</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/isAggrAlive",
    "title": "Is Aggregator Alive",
    "version": "2.0.0",
    "name": "IsAggrAlive",
    "group": "Management",
    "description": "<p>NMS aggregator aliveness check.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/isAggrAlive",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\":true,\"message\":\"Up\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management"
  },
  {
    "type": "get",
    "url": "/isCtrlAlive",
    "title": "Is Controller Alive",
    "version": "2.0.0",
    "name": "IsCtrlAlive",
    "group": "Management",
    "description": "<p>E2E controller aliveness check.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/isCtrlAlive",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\":true,\"message\":\"Up\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management"
  },
  {
    "type": "post",
    "url": "/rebootNode",
    "title": "Reboot Node",
    "version": "2.0.0",
    "name": "RebootNode",
    "permission": [
      {
        "name": "MANAGEMENT_WRITE"
      }
    ],
    "group": "Management",
    "description": "<p>Sends a reboot request to the given node(s), which can either reboot immediately or schedule the reboot at a later time.</p> <p>Unless the &quot;force&quot; flag is set, the reboot request can be silently rejected by a node under certain circumstances (e.g. if currently undergoing an upgrade).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodes\": [\"terra114.f5.td.a404-if\"], \"force\": true, \"secondsToReboot\": 60}' http://localhost:443/api/v2/rebootNode",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of nodes</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>Force reboot</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "secondsToReboot",
            "description": "<p>The number of seconds until reboot</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/restartMinion",
    "title": "Restart Minion",
    "version": "2.0.0",
    "name": "RestartMinion",
    "permission": [
      {
        "name": "MANAGEMENT_WRITE"
      }
    ],
    "group": "Management",
    "description": "<p>Restart the E2E minion process on the given node(s). This restart can occur immediately or be scheduled for a later time.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodes\": [\"terra114.f5.td.a404-if\"], \"secondsToRestart\": 60}' http://localhost:443/api/v2/restartMinion",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Management",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of nodes to restart minion on</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "secondsToRestart",
            "description": "<p>The number of seconds until minion restart</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/clearAutoNodeOverridesConfig",
    "title": "Clear Auto Node Overrides Config",
    "version": "2.0.0",
    "name": "ClearAutoNodeOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Removes the automated node-specific override configuration data at the provided config paths.</p> <p>User provides list of nodes and list of configPaths to be cleared. configPaths are textual traversals of the JSON tree with dot delimiters and '*' wildcards. Response indicates whether request was successfully received by controller.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeNames\": [\"node1\"], \"configPaths\": [\"radioParamsOverride.*.fwParams.polarity\"]}' http://localhost:443/api/v2/clearAutoNodeOverridesConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of nodes, or all nodes if empty</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "configPaths",
            "description": "<p>List of node config paths to return Each config path is a text traversal of the JSON tree with dot delimiters and '<em>' wildcards (e.g. radioParamsOverride.</em>.fwParams.wsecEnable)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getAutoNodeOverridesConfig",
    "title": "Get Automated Node(s) Overrides Config",
    "version": "2.0.0",
    "name": "GetAutoNodeOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the automated node-specific override configuration for the given nodes.</p> <p>The automated node overrides are applied on top of the base configuration objects for each node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodes\": [\"terra111.f5.tb.a404-if\", \"terra114.f5.tb.a404-if\"]}' http://localhost:443/api/v2/getAutoNodeOverridesConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"overrides\": \"{\\\"terra111.f5.tb.a404-if\\\":{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\"}},\\\"terra114.f5.tb.a404-if\\\":{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\"}}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The automated node config overrides (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of nodes, or all nodes if empty</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getBaseConfig",
    "title": "Get Base Config",
    "version": "2.0.0",
    "name": "GetBaseConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the base configuration objects for the given software versions.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"swVersions\": [\"Facebook Terragraph Release RELEASE_M15_1-michaelcallahan (michaelcallahan@devbig730 Mon Oct 9 16:50:07 PDT 2017)\"]}' http://localhost:443/api/v2/getBaseConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"config\": \"\\\"Facebook Terragraph Release RELEASE_M15_1-michaelcallahan (michaelcallahan@devbig730 Mon Oct 9 16:50:07 PDT 2017)\\\":{\\\"sysParams\\\":{<...>},\\\"envParams\\\":{<...>},\\\"fwParams\\\":{<...>},\\\"logTailParams\\\":{<...>},\\\"statsAgentParams\\\":{<...>}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The base configs (JSON), mapping software version names to their base configs</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "swVersions",
            "description": "<p>The software versions, or all versions if empty</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getConfigActionsResults",
    "title": "Get Config Actions Results",
    "version": "2.0.0",
    "name": "GetConfigActionsResults",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the per-node results for the given config actions request ID.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"id\": \"10876931660539482246\"}' http://localhost:443/api/v2/getConfigActionsResults",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"results\": {\n    \"terra111.f5.tb.a404-if\": {\n      \"actions\": [\n        0,\n        10\n      ]\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(String:Object(NodeConfigActionsResult))",
            "optional": false,
            "field": "results",
            "description": "<p>Per-node config actions reports</p>"
          }
        ],
        ":NodeConfigActionsResult": [
          {
            "group": ":NodeConfigActionsResult",
            "type": "Set(Int(CfgAction))",
            "optional": false,
            "field": "actions",
            "description": "<p>The actions this node will take (0=NO_ACTION, 10=REBOOT, 20=RESTART_MINION, 21=RESTART_STATS_AGENT, 22=RESTART_LOGTAIL, 23=RESTART_ROUTING, 24=RESTART_SQUIRE, 25=REDO_POP_CONFIG, 27=RESTART_KEA, 28=UPDATE_FIREWALL, 30=SYNC_LINK_MONITOR, 31=INJECT_KVSTORE_KEYS, 32=UPDATE_LINK_METRICS)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ID to query results for</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getConfigMetadata",
    "title": "Get Config Metadata",
    "version": "2.0.0",
    "name": "GetConfigMetadata",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the configuration metadata.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getConfigMetadata",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"metadata\": \"... <json>\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "metadata",
            "description": "<p>The config parameter metadata (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration"
  },
  {
    "type": "post",
    "url": "/getFirmwareBaseConfig",
    "title": "Get Firmware Base Config",
    "version": "2.0.0",
    "name": "GetFirmwareBaseConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the firmware base configuration objects for the given firmware versions.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"fwVersions\": []}' http://localhost:443/api/v2/getFirmwareBaseConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"config\": \"{\\\"10.6.0\\\":{<...>}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The firmware base configs (JSON), mapping firmware version names to their base configs</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "fwVersions",
            "description": "<p>The firmware versions, or all if empty</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getHardwareBaseConfig",
    "title": "Get Hardware Base Config",
    "version": "2.0.0",
    "name": "GetHardwareBaseConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the hardware base configuration objects for the given hardware board IDs and software versions.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"hwBoardIds\": [], \"swVersions\": []}' http://localhost:443/api/v2/getHardwareBaseConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"config\": \"{\\\"NXP\\\":{\\\"RELEASE_M78\\\":{<...>}}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The hardware base configs (JSON), mapping hardware board IDs to software version names to their base configs</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "hwBoardIds",
            "description": "<p>The hardware board IDs, or all if empty</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "swVersions",
            "description": "<p>The software versions, or all if empty</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getNetworkOverridesConfig",
    "title": "Get Network Overrides Config",
    "version": "2.0.0",
    "name": "GetNetworkOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the network-wide override configuration.</p> <p>The network overrides are applied on top of the base configuration objects for each node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getNetworkOverridesConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"overrides\": \"{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\",\\\"OOB_NETNS\\\":\\\"1\\\"}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The network config overrides (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration"
  },
  {
    "type": "post",
    "url": "/getNetworkOverridesConfigActions",
    "title": "Get Network Overrides Config Actions",
    "version": "2.0.0",
    "name": "GetNetworkOverridesConfigActions",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Gets the node actions for the network-wide override configuration. Each node will report what action it would take upon this config change, but the config overrides will not actually be applied.</p> <p>The returned ID should be used to poll for results, which will expire after the returned time.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"overrides\": \"{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\",\\\"OOB_NETNS\\\":\\\"1\\\"}}\"}' http://localhost:443/api/v2/getNetworkOverridesConfigActions",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"availableUntil\": 1516670306,\n    \"id\": \"12582986238321455010\",\n    \"overrides\": \"{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\",\\\"OOB_NETNS\\\":\\\"1\\\"}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>A copy of the input config overrides (JSON)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier that will be attached to all associated node reports</p>"
          },
          {
            "group": "Success 200",
            "type": "Int64",
            "optional": false,
            "field": "availableUntil",
            "description": "<p>The time (UNIX time) at which the controller will discard results for this ID</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The network config overrides (JSON)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getNodeConfig",
    "title": "Get Node Config",
    "version": "2.0.0",
    "name": "GetNodeConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the full configuration for the given node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"node\": \"terra111.f5.tb.a404-if\", \"swVersion\": \"RELEASE_M78\"}' http://localhost:443/api/v2/getNodeConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"config\": \"{\\\"sysParams\\\":{<...>},\\\"envParams\\\":{<...>},\\\"fwParams\\\":{<...>},\\\"logTailParams\\\":{<...>},\\\"statsAgentParams\\\":{<...>}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "config",
            "description": "<p>The full node config (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "node",
            "description": "<p>The node name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "swVersion",
            "description": "<p>The software version to use as the base config. If this is omitted, the controller will use the last version that the node reported; if no version is known to the controller, an error will be returned.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "hwBoardId",
            "description": "<p>The hardware board ID to use for the hardware base config. See above for actions taken when this is omitted.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "fwVersion",
            "description": "<p>The firmware version to use as the firmware base config. See above for actions taken when this is omitted; however, omission of this field will not result in an error.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getNodeConfigPaths",
    "title": "Get Node Config Paths",
    "version": "2.0.0",
    "name": "GetNodeConfigPaths",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves specific node configuration data at the provided config paths.</p> <p>User provides list of nodes and list of requested configPaths. configPaths are textual traversals of the JSON tree with dot delimiters and '*' wildcards. Response is a map of node names to expanded config JSON string.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeNames\": [\"node1\"], \"configPaths\": [\"radioParamsOverride.*.fwParams.polarity\"]}' http://localhost:443/api/v2/getNodeConfigPaths",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"config\": {\n    \"node1\": \"{\\\"radioParamsOverride\\\":{\\\"01:01:01:01:01:01\\\":{\\\"fwParams\\\":{\\\"polarity\\\":1}},\\\"02:02:02:02:02:02\\\":{\\\"fwParams\\\":{\\\"polarity\\\":2}}}}\"\n  }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(String:String)",
            "optional": false,
            "field": "config",
            "description": "<p>Maps node name to expanded config JSON string</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodeNames",
            "description": "<p>List of node names to get config for. Get for all nodes when empty.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "configPaths",
            "description": "<p>List of node config paths to return Each config path is a text traversal of the JSON tree with dot delimiters and '<em>' wildcards (e.g. radioParamsOverride.</em>.fwParams.wsecEnable)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getNodeOverridesConfig",
    "title": "Get Node(s) Overrides Config",
    "version": "2.0.0",
    "name": "GetNodeOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Retrieves the node-specific override configuration for the given nodes.</p> <p>The node overrides are applied on top of both the base configuration objects and network overrides for each node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodes\": [\"terra111.f5.tb.a404-if\", \"terra114.f5.tb.a404-if\"]}' http://localhost:443/api/v2/getNodeOverridesConfig",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"overrides\": \"{\\\"terra111.f5.tb.a404-if\\\":{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\"}},\\\"terra114.f5.tb.a404-if\\\":{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\"}}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The node config overrides (JSON)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of nodes, or all nodes if empty</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getNodeOverridesConfigActions",
    "title": "Get Node(s) Overrides Config Actions",
    "version": "2.0.0",
    "name": "GetNodeOverridesConfigActions",
    "permission": [
      {
        "name": "CONFIG_READ"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Gets the node actions for the node-specific override configuration for the given nodes. Each node will report what action it would take upon this config change, but the config overrides will not actually be applied.</p> <p>The returned ID should be used to poll for results, which will expire after the returned time.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"overrides\": \"{\\\"terra111.f5.tb.a404-if\\\":{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\"}}}\"}' http://localhost:443/api/v2/getNodeOverridesConfigActions",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"availableUntil\": 1516670773,\n    \"id\": \"10876931660539482246\",\n    \"overrides\": \"{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\",\\\"OOB_NETNS\\\":\\\"1\\\"}}\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>A copy of the input config overrides (JSON)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique identifier that will be attached to all associated node reports</p>"
          },
          {
            "group": "Success 200",
            "type": "Int64",
            "optional": false,
            "field": "availableUntil",
            "description": "<p>The time (UNIX time) at which the controller will discard results for this ID</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The node config overrides (JSON), mapping node names to their config overrides</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/modifyNetworkOverridesConfig",
    "title": "Modify Network Overrides Config",
    "version": "2.0.0",
    "name": "ModifyNetworkOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Modifies the network-wide override configuration. This is applied on top of the base configuration objects for each node.</p> <p>Existing keys not included in the provided network configuration request will be not changed.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"overrides\": \"{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\",\\\"OOB_NETNS\\\":\\\"1\\\"}}\"}' http://localhost:443/api/v2/modifyNetworkOverridesConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The network config overrides (JSON)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/modifyNodeOverridesConfig",
    "title": "Modify Node(s) Overrides Config",
    "version": "2.0.0",
    "name": "ModifyNodeOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Modifies the node-specific override configuration for the given nodes. This is applied on top of both the base configuration objects and network overrides for each node.</p> <p>This operation will only affect the given nodes. Overrides cannot be erased using this operation.</p> <p>Existing keys not included in the provided node configuration request will be not changed.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"overrides\": \"{\\\"terra111.f5.tb.a404-if\\\":{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\"}}}\"}' http://localhost:443/api/v2/modifyNodeOverridesConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The node config overrides (JSON), mapping node names to their config overrides</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/setFwLogConfig",
    "title": "Set Firmware Log Config",
    "version": "2.0.0",
    "name": "SetFwLogConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Temporarily changes the per-module firmware logging levels.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodes\": [], \"level\": 0}' http://localhost:443/api/v2/setFwLogConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of nodes, or all nodes if empty</p>"
          },
          {
            "group": "Parameter",
            "type": "Map(Int(LogModule):Int(LogLevel))",
            "optional": true,
            "field": "configs",
            "description": "<p>The per-module log configuration (will override &quot;level&quot; if given)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int(LogLevel)",
            "allowedValues": [
              "0",
              "1",
              "2",
              "3"
            ],
            "optional": true,
            "field": "level",
            "description": "<p>The log level to use for all modules (0=DEBUG, 1=INFO, 2=ERROR, 3=FATAL)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/setNetworkOverridesConfig",
    "title": "Set Network Overrides Config",
    "version": "2.0.0",
    "name": "SetNetworkOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Sets the network-wide override configuration. This is applied on top of the base configuration objects for each node.</p> <p>The network configuration provided will completely replace the existing network configuration.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"overrides\": \"{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\",\\\"OOB_NETNS\\\":\\\"1\\\"}}\"}' http://localhost:443/api/v2/setNetworkOverridesConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The network config overrides (JSON)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/setNodeOverridesConfig",
    "title": "Set Node(s) Overrides Config",
    "version": "2.0.0",
    "name": "SetNodeOverridesConfig",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Sets the node-specific override configuration for the given nodes. This is applied on top of both the base configuration objects and network overrides for each node.</p> <p>This operation will only affect the given nodes. To erase overrides for a node, its configuration must be explicitly set to an empty object.</p> <p>Each node configuration provided will completely replace the existing node configuration.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"overrides\": \"{\\\"terra111.f5.tb.a404-if\\\":{\\\"envParams\\\":{\\\"FW_IF2IF\\\":\\\"1\\\"}}}\"}' http://localhost:443/api/v2/setNodeOverridesConfig",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "overrides",
            "description": "<p>The node config overrides (JSON), mapping node names to their config overrides</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/triggerChannelOptimization",
    "title": "Trigger Channel Optimization",
    "version": "2.0.0",
    "name": "TriggerChannelOptimization",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Trigger channel optimization across topology. Currently assigns channels to link groups (groups that must have the same channel) at random. When the &quot;clearUserChannelConfig&quot; flag is set, the controller will reset user-configured channels before computing a new channel assignment.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"clearUserChannelConfig\": true}' http://localhost:443/api/v2/triggerChannelOptimization",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clearUserChannelConfig",
            "description": "<p>Clear user-configured channels</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/triggerControlSuperframeOptimization",
    "title": "Trigger Control Superframe Optimization",
    "version": "2.0.0",
    "name": "TriggerControlSuperframeOptimization",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Trigger control superframe optimization.</p> <p>When the &quot;clearUserConfig&quot; flag is set, the controller will reset user-configured control superframes before computing a new assignment.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"clearUserConfig\": true}' http://localhost:443/api/v2/triggerControlSuperframeOptimization",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clearUserConfig",
            "description": "<p>Clear user-configured control superframe</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/triggerGolayOptimization",
    "title": "Trigger Golay Optimization",
    "version": "2.0.0",
    "name": "TriggerGolayOptimization",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Trigger network-wide Golay optimization.</p> <p>When the &quot;clearUserConfig&quot; flag is set, the controller will reset user-configured Golay codes before computing a new assignment.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"clearUserConfig\": true}' http://localhost:443/api/v2/triggerGolayOptimization",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clearUserConfig",
            "description": "<p>Clear user-configured golays</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/triggerPolarityOptimization",
    "title": "Trigger Polarity Optimization",
    "version": "2.0.0",
    "name": "TriggerPolarityOptimization",
    "permission": [
      {
        "name": "CONFIG_WRITE"
      }
    ],
    "group": "NodeConfiguration",
    "description": "<p>Trigger polarity optimization using the Odd Cycle Cover (OCC) algorithm.</p> <p>When the &quot;clearUserPolarityConfig&quot; flag is set, the controller will reset user-configured polarities before computing a new polarity assignment.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"clearUserPolarityConfig\": true}' http://localhost:443/api/v2/triggerPolarityOptimization",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Node Configuration",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "clearUserPolarityConfig",
            "description": "<p>Clear user-configured polarities</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/startPing",
    "title": "Start Ping",
    "version": "2.0.0",
    "name": "StartPing",
    "permission": [
      {
        "name": "PERFORMANCE_WRITE"
      }
    ],
    "group": "Performance",
    "description": "<p>Starts a ping measurement between two nodes.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"srcNodeId\": \"00:00:00:10:0d:40\", \"dstNodeId\": \"00:00:00:10:0d:42\", \"options\": {\"count\": 10}}' http://localhost:443/api/v2/startPing",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": \"5223465126179148667\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID for this ping session</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Performance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "srcNodeId",
            "description": "<p>The source node MAC address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dstNodeId",
            "description": "<p>The destination node MAC address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dstNodeIpv6",
            "description": "<p>The destination node IPv6 address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(PingOptions)",
            "optional": true,
            "field": "options",
            "description": "<p>The ping options</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "useLinkLocal",
            "description": "<p>Whether to use the link-local IP address and interface</p>"
          }
        ],
        ":PingOptions": [
          {
            "group": ":PingOptions",
            "type": "Boolean",
            "optional": true,
            "field": "adaptive",
            "description": "<p>Adaptive ping</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "count",
            "description": "<p>Stop after sending count ECHO_REQUEST packets</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Boolean",
            "optional": true,
            "field": "timestamp",
            "description": "<p>Print timestamp before each line</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Boolean",
            "optional": true,
            "field": "flood",
            "description": "<p>Flood ping</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "interval",
            "description": "<p>Wait interval seconds between sending each packet</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "preload",
            "description": "<p>Sends this many packets not waiting for a reply</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Boolean",
            "optional": true,
            "field": "numeric",
            "description": "<p>Numeric output only</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Boolean",
            "optional": true,
            "field": "outstanding",
            "description": "<p>Report outstanding ICMP ECHO reply before sending next packet</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Boolean",
            "optional": true,
            "field": "quiet",
            "description": "<p>Quiet output</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "packetSize",
            "description": "<p>Specifies the number of data bytes to be sent</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "sndbuf",
            "description": "<p>Set socket sndbuf</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "ttl",
            "description": "<p>Set the IP time-to-live</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Boolean",
            "optional": true,
            "field": "verbose",
            "description": "<p>Verbose output</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "deadline",
            "description": "<p>Seconds before exit regardless of how many packets sent or received</p>"
          },
          {
            "group": ":PingOptions",
            "type": "Int32",
            "optional": true,
            "field": "timeout",
            "description": "<p>Time to wait for a response, in seconds</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/startTraffic",
    "title": "Start Iperf Traffic",
    "version": "2.0.0",
    "name": "StartTraffic",
    "permission": [
      {
        "name": "PERFORMANCE_WRITE"
      }
    ],
    "group": "Performance",
    "description": "<p>Starts an iperf traffic measurement between two nodes.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"srcNodeId\": \"00:00:00:10:0d:40\", \"dstNodeId\": \"00:00:00:10:0d:42\", \"options\": {\"timeSec\": 100}}' http://localhost:443/api/v2/startTraffic",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"id\": \"14367480570677722902\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The unique ID for this iperf session</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Performance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "srcNodeId",
            "description": "<p>The source node MAC address (Optional, supply empty string to start server only)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "dstNodeId",
            "description": "<p>The destination node MAC address</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "dstNodeIpv6",
            "description": "<p>The destination node IPv6 address</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(IperfOptions)",
            "optional": true,
            "field": "options",
            "description": "<p>The iperf options</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "useLinkLocal",
            "description": "<p>Whether to use the link-local IP address and interface</p>"
          }
        ],
        ":IperfOptions": [
          {
            "group": ":IperfOptions",
            "type": "Int64",
            "optional": true,
            "field": "bitrate",
            "description": "<p>The target traffic bitrate (bps)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int32",
            "optional": true,
            "field": "timeSec",
            "description": "<p>The measurement duration (in seconds)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int(IperfTransportProtocol)",
            "allowedValues": [
              "6",
              "17"
            ],
            "optional": true,
            "field": "protocol",
            "description": "<p>The transport protocol (6=TCP, 17=UDP)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int32",
            "optional": true,
            "field": "intervalSec",
            "description": "<p>The interval between periodic bandwidth reports (in seconds)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int64",
            "optional": true,
            "field": "windowSize",
            "description": "<p>The window size (in bytes)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int32",
            "optional": true,
            "field": "mss",
            "description": "<p>The TCP maximum segment size (MTU - 40 bytes)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Boolean",
            "optional": true,
            "field": "noDelay",
            "description": "<p>Disable Nagle's Algorithm</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int32",
            "optional": true,
            "field": "omitSec",
            "description": "<p>Omit the first n seconds of the measurement</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Boolean",
            "optional": true,
            "field": "verbose",
            "description": "<p>Show more detailed output</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Boolean",
            "optional": true,
            "field": "json",
            "description": "<p>Output in JSON format</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int64",
            "optional": true,
            "field": "bufferLength",
            "description": "<p>The buffer length (in bytes)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int(IperfFormat)",
            "allowedValues": [
              "1",
              "2",
              "3",
              "4",
              "5",
              "6"
            ],
            "optional": true,
            "field": "format",
            "description": "<p>The format to report (1=KILOBITS, 2=MEGABITS, 3=GIGABITS, 4=KILOBYTES, 5=MEGABYTES, 6=GIGABYTES)</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int32",
            "optional": true,
            "field": "parallelStreams",
            "description": "<p>The number of parallel client streams to run</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Boolean",
            "optional": true,
            "field": "useVppDataPath",
            "description": "<p>Bind iperf directly to VPP TCP stack instead of the kernel.  This option requires using IPv6 addresses inside the configured VPP_ULA_TEST_PREFIX</p>"
          },
          {
            "group": ":IperfOptions",
            "type": "Int32",
            "optional": true,
            "field": "clientDelayMs",
            "description": "<p>Server-client delay (in milliseconds). This option requires JSON output mode to be enabled.</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/statusPing",
    "title": "Ping Session Status",
    "version": "2.0.0",
    "name": "StatusPing",
    "permission": [
      {
        "name": "PERFORMANCE_READ"
      }
    ],
    "group": "Performance",
    "description": "<p>Retrieves information about all running ping measurements.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/statusPing",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"sessions\": {\n        \"5223465126179148667\": {\n            \"id\": \"5223465126179148667\",\n            \"pingConfig\": {\n                \"dstNodeId\": \"00:00:00:10:0d:42\",\n                \"dstNodeIpv6\": \"2001::1\",\n                \"options\": {\n                    \"count\": 10\n                },\n                \"srcNodeId\": \"00:00:00:10:0d:40\",\n            },\n            \"senderApp\": \"api-service-14942789954493701194\"\n        }\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(String:Object(StartMinionPing))",
            "optional": false,
            "field": "sessions",
            "description": "<p>The ping sessions in progress, keyed by session ID</p>"
          }
        ],
        ":StartMinionPing": [
          {
            "group": ":StartMinionPing",
            "type": "Object(StartPing)",
            "optional": false,
            "field": "pingConfig",
            "description": "<p>The ping config</p>"
          },
          {
            "group": ":StartMinionPing",
            "type": "Int32",
            "optional": false,
            "field": "serverPort",
            "description": "<p>The server port</p>"
          },
          {
            "group": ":StartMinionPing",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ping session ID</p>"
          },
          {
            "group": ":StartMinionPing",
            "type": "String",
            "optional": false,
            "field": "senderApp",
            "description": "<p>The ZMQ identity of the original sender (empty in response to sender)</p>"
          },
          {
            "group": ":StartMinionPing",
            "type": "String",
            "optional": true,
            "field": "iface",
            "description": "<p>The interface to use</p>"
          }
        ],
        ":StartPing": [
          {
            "group": ":StartPing",
            "type": "String",
            "optional": false,
            "field": "srcNodeId",
            "description": "<p>The source node MAC address</p>"
          },
          {
            "group": ":StartPing",
            "type": "String",
            "optional": true,
            "field": "dstNodeId",
            "description": "<p>The destination node MAC address</p>"
          },
          {
            "group": ":StartPing",
            "type": "String",
            "optional": true,
            "field": "dstNodeIpv6",
            "description": "<p>The destination node IPv6 address</p>"
          },
          {
            "group": ":StartPing",
            "type": "Object(PingOptions)",
            "optional": true,
            "field": "options",
            "description": "<p>The ping options</p>"
          },
          {
            "group": ":StartPing",
            "optional": true,
            "field": "useLinkLocal",
            "description": "<p>Whether to use the link-local IP address and interface</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Performance"
  },
  {
    "type": "get",
    "url": "/statusTraffic",
    "title": "Iperf Session Status",
    "version": "2.0.0",
    "name": "StatusTraffic",
    "permission": [
      {
        "name": "PERFORMANCE_READ"
      }
    ],
    "group": "Performance",
    "description": "<p>Retrieves information about all running iperf measurements.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/statusTraffic",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"sessions\": {\n        \"14367480570677722902\": {\n            \"id\": \"14367480570677722902\",\n            \"iperfConfig\": {\n                \"dstNodeId\": \"00:00:00:10:0d:42\",\n                \"dstNodeIpv6\": \"2001::1\",\n                \"options\": {\n                    \"timeSec\": 100\n                },\n                \"srcNodeId\": \"00:00:00:10:0d:40\",\n            },\n            \"senderApp\": \"api-service-6777026746000997038\",\n            \"serverPort\": 70050\n        }\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(String:Object(StartMinionIperf))",
            "optional": false,
            "field": "sessions",
            "description": "<p>The iperf sessions in progress, keyed by session ID</p>"
          }
        ],
        ":StartMinionIperf": [
          {
            "group": ":StartMinionIperf",
            "type": "Object(StartIperf)",
            "optional": false,
            "field": "iperfConfig",
            "description": "<p>The iperf config</p>"
          },
          {
            "group": ":StartMinionIperf",
            "type": "Int32",
            "optional": false,
            "field": "serverPort",
            "description": "<p>The server port</p>"
          },
          {
            "group": ":StartMinionIperf",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The iperf session ID</p>"
          },
          {
            "group": ":StartMinionIperf",
            "type": "String",
            "optional": false,
            "field": "senderApp",
            "description": "<p>The ZMQ identity of the original sender (empty in response to sender)</p>"
          },
          {
            "group": ":StartMinionIperf",
            "type": "String",
            "optional": true,
            "field": "iface",
            "description": "<p>The interface to use</p>"
          }
        ],
        ":StartIperf": [
          {
            "group": ":StartIperf",
            "type": "String",
            "optional": false,
            "field": "srcNodeId",
            "description": "<p>The source node MAC address</p>"
          },
          {
            "group": ":StartIperf",
            "type": "String",
            "optional": false,
            "field": "dstNodeId",
            "description": "<p>The destination node MAC address</p>"
          },
          {
            "group": ":StartIperf",
            "type": "String",
            "optional": true,
            "field": "dstNodeIpv6",
            "description": "<p>The destination node IPv6 address</p>"
          },
          {
            "group": ":StartIperf",
            "type": "Object(IperfOptions)",
            "optional": true,
            "field": "options",
            "description": "<p>The iperf options</p>"
          },
          {
            "group": ":StartIperf",
            "type": "Boolean",
            "optional": true,
            "field": "useLinkLocal",
            "description": "<p>Whether to use the link-local IP address and interface</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Performance"
  },
  {
    "type": "post",
    "url": "/stopPing",
    "title": "Stop Ping",
    "version": "2.0.0",
    "name": "StopPing",
    "permission": [
      {
        "name": "PERFORMANCE_WRITE"
      }
    ],
    "group": "Performance",
    "description": "<p>Stops a ping measurement session.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"id\": \"5223465126179148667\"}' http://localhost:443/api/v2/stopPing",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Performance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The ping session ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/stopTraffic",
    "title": "Stop Iperf Traffic",
    "version": "2.0.0",
    "name": "StopTraffic",
    "permission": [
      {
        "name": "PERFORMANCE_WRITE"
      }
    ],
    "group": "Performance",
    "description": "<p>Stops an iperf traffic measurement session.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"id\": \"14367480570677722902\"}' http://localhost:443/api/v2/stopTraffic",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Performance",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>The iperf session ID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getScanSchedule",
    "title": "Get Scan Schedule",
    "version": "2.0.0",
    "name": "GetScanSchedule",
    "permission": [
      {
        "name": "SCAN_READ"
      }
    ],
    "group": "Scan",
    "description": "<p>Retrieves the scan schedule.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getScanSchedule",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"nextBwgdIdx\": 0,\n    \"scanSchedule\": {\n        \"cbfEnable\": true,\n        \"combinedScanTimeoutSec\": 3600,\n        \"imEnable\": true,\n        \"imScanTimeoutSec\": 2700,\n        \"pbfEnable\": true,\n        \"rtcalEnable\": true\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object(ScanSchedule)",
            "optional": false,
            "field": "scanSchedule",
            "description": "<p>The scan schedule</p>"
          },
          {
            "group": "Success 200",
            "type": "Int64",
            "optional": false,
            "field": "nextBwgdIdx",
            "description": "<p>The BWGD at which combined scans that are already scheduled will finish</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Scan"
  },
  {
    "type": "post",
    "url": "/getScanStatus",
    "title": "Get Scan Status",
    "version": "2.0.0",
    "name": "GetScanStatus",
    "permission": [
      {
        "name": "SCAN_READ"
      }
    ],
    "group": "Scan",
    "description": "<p>Retrieves the scan status.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"isConcise\": true}' http://localhost:443/api/v2/getScanStatus",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"scans\": {\n        \"1\": {\n            \"responses\": {\n                \"terra114.f5.tb.a404-if\": {\n                    \"curSuperframeNum\": 747415639887,\n                    \"routeInfoList\": [],\n                    \"token\": 1\n                },\n                ... <more responses>\n            },\n            \"startBwgdIdx\": 46713477424,\n            \"txNode\": \"terra111.f5.tb.a404-if\"\n        },\n        \"10\": {\n            \"responses\": {},\n            \"startBwgdIdx\": 46713478144,\n            \"txNode\": \"terra223.f5.tb.a404-if\"\n        },\n        ... <more tokens>\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(Int32:Object(ScanData))",
            "optional": false,
            "field": "scans",
            "description": "<p>The scan data (token:data)</p>"
          }
        ],
        ":ScanData": [
          {
            "group": ":ScanData",
            "type": "Map(String:Object(ScanResp))",
            "optional": false,
            "field": "responses",
            "description": "<p>The scan responses (node:response)</p>"
          },
          {
            "group": ":ScanData",
            "type": "String",
            "optional": false,
            "field": "txNode",
            "description": "<p>The transmitter node</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int64",
            "optional": false,
            "field": "startBwgdIdx",
            "description": "<p>The starting bandwidth grant duration (BWGD) index</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int(ScanType)",
            "optional": false,
            "field": "type",
            "description": "<p>The scan type (1=PBF, 2=IM, 3=RTCAL, 4=CBF_TX, 5=CBF_RX, 6=TOPO, 7=TEST_UPD_AWV)</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int(ScanSubType)",
            "optional": true,
            "field": "subType",
            "description": "<p>The scan subtype (used in CBF/RTCAL)</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int(ScanMode)",
            "optional": false,
            "field": "mode",
            "description": "<p>The scan mode (1=COARSE, 2=FINE, 3=SELECTIVE, 4=RELATIVE)</p>"
          },
          {
            "group": ":ScanData",
            "type": "Boolean",
            "optional": true,
            "field": "apply",
            "description": "<p>Whether to apply the new beams after the procedure (true) or ignore them (false)</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int16",
            "optional": true,
            "field": "nResponsesWaiting",
            "description": "<p>The number of node responses still outstanding</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int32",
            "optional": false,
            "field": "respId",
            "description": "<p>The response ID - increments when all responses are received</p>"
          },
          {
            "group": ":ScanData",
            "type": "String",
            "optional": true,
            "field": "mainTxNode",
            "description": "<p>The main transmitter node (victim for CBF_RX, aggressor for CBF_TX)</p>"
          },
          {
            "group": ":ScanData",
            "type": "String",
            "optional": true,
            "field": "mainRxNode",
            "description": "<p>The main receiver node (victim for CBF_RX, aggressor for CBF_TX)</p>"
          },
          {
            "group": ":ScanData",
            "type": "String[]",
            "optional": true,
            "field": "auxTxNodes",
            "description": "<p>The auxiliary transmitter nodes (for CBF) - should be of the same length as auxRxNodes</p>"
          },
          {
            "group": ":ScanData",
            "type": "String[]",
            "optional": true,
            "field": "auxRxNodes",
            "description": "<p>The auxiliary receiver nodes (for CBF) - should be of the same length as auxTxNodes</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int16",
            "optional": true,
            "field": "nullAngle",
            "description": "<p>The nulling angle (for CBF)</p>"
          },
          {
            "group": ":ScanData",
            "type": "Int16",
            "optional": true,
            "field": "cbfBeamIdx",
            "description": "<p>The beam index (for CBF)</p>"
          },
          {
            "group": ":ScanData",
            "type": "Boolean",
            "optional": true,
            "field": "convertMacToName",
            "description": "<p>Internal to the controller, do not set. Used for backward compatibility when using node names rather than MACs to denote nodes to scan. When set, controller will convert results from using MACs back to node names.</p>"
          }
        ],
        ":ScanResp": [
          {
            "group": ":ScanResp",
            "type": "String",
            "optional": false,
            "field": "radioMac",
            "description": "<p>The MAC address of the radio that performed the scan</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int32",
            "optional": false,
            "field": "token",
            "description": "<p>The token used to match the request to the response</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int64",
            "optional": false,
            "field": "curSuperframeNum",
            "description": "<p>The superframe number, as a timestamp of the measurement</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Object(RouteInfo)[]",
            "optional": false,
            "field": "routeInfoList",
            "description": "<p>The list of routes</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int16",
            "optional": true,
            "field": "txPwrIndex",
            "description": "<p>The transmit power index used for the scan (0-31)</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int(ScanFwStatus)",
            "optional": false,
            "field": "status",
            "description": "<p>The scan status (0: complete, &gt;=1: failure)</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int16",
            "optional": true,
            "field": "numSweeps",
            "description": "<p>The number of times that beams were scanned</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int64",
            "optional": true,
            "field": "startSuperframeNum",
            "description": "<p>The start of the BF slot allocation</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int64",
            "optional": true,
            "field": "endSuperframeNum",
            "description": "<p>The end of the BF slot allocation</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int16",
            "optional": true,
            "field": "azimuthBeam",
            "description": "<p>The beam selected from the golden codebook during initial BF or PBF</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int16",
            "optional": true,
            "field": "oldBeam",
            "description": "<p>The old beam (used by RTCAL, VBS, and CBF)</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int16",
            "optional": true,
            "field": "newBeam",
            "description": "<p>The resultant beam</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int16",
            "optional": true,
            "field": "sweepStartBeam",
            "description": "<p>The sweep start beam</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Int16",
            "optional": true,
            "field": "sweepEndBeam",
            "description": "<p>The sweep end beam</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Map(Int16:Object(TopoResponderInfo))",
            "optional": true,
            "field": "topoResps",
            "description": "<p>The map of responders to topology scan results (responderIndex:info)</p>"
          },
          {
            "group": ":ScanResp",
            "type": "Object(BeamInfo)[]",
            "optional": false,
            "field": "beamInfoList",
            "description": "<p>The list of beam info</p>"
          }
        ],
        ":RouteInfo": [
          {
            "group": ":RouteInfo",
            "type": "Object(MicroRoute)",
            "optional": false,
            "field": "route",
            "description": "<p>The beamforming indices of the micro-route</p>"
          },
          {
            "group": ":RouteInfo",
            "type": "Double",
            "optional": false,
            "field": "rssi",
            "description": "<p>The received signal strength indicator (RSSI), in dBm</p>"
          },
          {
            "group": ":RouteInfo",
            "type": "Double",
            "optional": false,
            "field": "snrEst",
            "description": "<p>The signal-to-noise ratio (SNR) measured during the short training field, in dB</p>"
          },
          {
            "group": ":RouteInfo",
            "type": "Double",
            "optional": false,
            "field": "postSnr",
            "description": "<p>The signal-to-noise ratio (SNR) measured after the equalizer, in dB</p>"
          },
          {
            "group": ":RouteInfo",
            "type": "Int32",
            "optional": false,
            "field": "rxStart",
            "description": "<p>The relative arrival time of the packet, in microseconds</p>"
          },
          {
            "group": ":RouteInfo",
            "type": "Byte",
            "optional": false,
            "field": "packetIdx",
            "description": "<p>The repeat count of this packet (0-based)</p>"
          },
          {
            "group": ":RouteInfo",
            "type": "Int16",
            "optional": false,
            "field": "sweepIdx",
            "description": "<p>The sweep index of the packet (0-based)</p>"
          }
        ],
        ":MicroRoute": [
          {
            "group": ":MicroRoute",
            "type": "Int16",
            "optional": false,
            "field": "tx",
            "description": "<p>The transmit beamforming index of the micro-route</p>"
          },
          {
            "group": ":MicroRoute",
            "type": "Int16",
            "optional": false,
            "field": "rx",
            "description": "<p>The receive beamforming index of the micro-route</p>"
          }
        ],
        ":TopoResponderInfo": [
          {
            "group": ":TopoResponderInfo",
            "type": "String",
            "optional": false,
            "field": "addr",
            "description": "<p>The MAC address of the responder</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Object(Location)",
            "optional": true,
            "field": "pos",
            "description": "<p>The GPS position of the responder</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Map(Int16:Map(Int16:Int16))",
            "optional": true,
            "field": "itorLqmMat",
            "description": "<p>The initiator-to-responder micro-route link quality metric (LQM) matrix</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Map(Int16:Map(Int16:Int16))",
            "optional": true,
            "field": "rtoiLqmMat",
            "description": "<p>The responder-to-initiator micro-route link quality metric (LQM) matrix</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Set(String)",
            "optional": true,
            "field": "adjs",
            "description": "<p>The set of local adjacencies at the responder</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Scan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "isConcise",
            "description": "<p>If true, only metadata will be returned (without RSSI and SNR measurements)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": true,
            "field": "tokenFrom",
            "description": "<p>The start of the token range; if omitted, returns the full scan results. if tokenTo is not specified, returns only token == tokenFrom</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": true,
            "field": "tokenTo",
            "description": "<p>The end of the token range, inclusive (must also specify tokenFrom); if omitted, takes the value of tokenFrom</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": true,
            "field": "respIdFrom",
            "description": "<p>The start of the respId range (must also specify respIdTo) (if specified, ignore tokenFrom); if respIdTo is not specified, returns only respId == respIdFrom</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": true,
            "field": "respIdTo",
            "description": "<p>The end of the respId range inclusive (must also specify respIdFrom); if oldest respId &gt; respIdTo; will return the oldest scan result corresponding to the oldest respId (if specified, ignore tokenTo)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/resetScanStatus",
    "title": "Reset Scan Status",
    "version": "2.0.0",
    "name": "ResetScanStatus",
    "permission": [
      {
        "name": "SCAN_WRITE"
      }
    ],
    "group": "Scan",
    "description": "<p>Resets the scan status.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{}' http://localhost:443/api/v2/resetScanStatus",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Scan",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/setScanSchedule",
    "title": "Set Scan Schedule",
    "version": "2.0.0",
    "name": "SetScanSchedule",
    "permission": [
      {
        "name": "SCAN_WRITE"
      }
    ],
    "group": "Scan",
    "description": "<p>Sets the scan schedule.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"imScanTimeoutSec\": 2700, \"combinedScanTimeoutSec\": 3600, \"pbfEnable\": true, \"rtcalEnable\": true, \"cbfEnable\": true, \"imEnable\": true}' http://localhost:443/api/v2/setScanSchedule",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Scan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": true,
            "field": "imScanTimeoutSec",
            "description": "<p>The interval between periodic IM scans (in seconds)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": true,
            "field": "combinedScanTimeoutSec",
            "description": "<p>The interval between periodic combined scans (in seconds)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "pbfEnable",
            "description": "<p>Whether PBF is enabled for combined scans</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "rtcalEnable",
            "description": "<p>Whether RTCAL is enabled for combined scans</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "cbfEnable",
            "description": "<p>Whether CBF is enabled for combined scans</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "imEnable",
            "description": "<p>Whether fast IM is enabled for combined scans</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/startScan",
    "title": "Start Scan",
    "version": "2.0.0",
    "name": "StartScan",
    "permission": [
      {
        "name": "SCAN_WRITE"
      }
    ],
    "group": "Scan",
    "description": "<p>Starts a one-time scan.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"scanType\": 1, \"scanMode\": 2, \"startTime\": 1535403177, \"txNode\": \"terra111.f5.td.a404-if\", \"rxNodes\": [\"terra212.f5.td.a404-if\"], \"txPwrIndex\": 255}' http://localhost:443/api/v2/startScan",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"message\": \"Scheduled topology scan 1\",\n    \"success\": true,\n    \"token\": 1\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          },
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": true,
            "field": "token",
            "description": "<p>The token (used for retrieving scan data)</p>"
          },
          {
            "group": "Success 200",
            "type": "Int32",
            "optional": true,
            "field": "lastToken",
            "description": "<p>The token at the end of the token range, if multiple scans were scheduled</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Scan",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int(ScanType)",
            "optional": false,
            "field": "scanType",
            "description": "<p>The scan type (1=PBF, 2=IM, 3=RTCAL, 4=CBF_TX, 5=CBF_RX, 6=TOPO, 7=TEST_UPD_AWV)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int(ScanMode)",
            "optional": false,
            "field": "scanMode",
            "description": "<p>The scan mode (1=COARSE, 2=FINE, 3=SELECTIVE, 4=RELATIVE)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "startTime",
            "description": "<p>The scan start time (UNIX time), or 0 for TOPO scans to run immediately</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "txNode",
            "description": "<p>The transmitter node. If present, run the scan on transmitter-to-receiver links. Otherwise, run an IM scan on the whole network.</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "rxNodes",
            "description": "<p>The receiver nodes. This should be present if and only if txNode is given. For PBF/RTCAL, this list should contain a single node.</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(BeamIndices)[]",
            "optional": true,
            "field": "beams",
            "description": "<p>The beam indices for every node (the transmitter and all receivers, in that order). If unset, use the default indices.</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "apply",
            "description": "<p>Whether to apply the new beams after the procedure (true) or ignore them (false)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int(ScanSubType)",
            "optional": true,
            "field": "subType",
            "description": "<p>The scan subtype (used in CBF/RTCAL)</p>"
          },
          {
            "group": "Parameter",
            "type": "Byte",
            "optional": true,
            "field": "bwgdLen",
            "description": "<p>The calibration length in BWGDs (2-64)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int16",
            "optional": true,
            "field": "txPwrIndex",
            "description": "<p>The transmit power index (0-31, 255=current average power).</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mainTxNode",
            "description": "<p>The main transmitter node (victim for CBF_RX, aggressor for CBF_TX)</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": true,
            "field": "mainRxNode",
            "description": "<p>The main receiver node (victim for CBF_RX, aggressor for CBF_TX)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "auxTxNodes",
            "description": "<p>The auxiliary transmitter nodes (for CBF) - should be of the same length as auxRxNodes</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": true,
            "field": "auxRxNodes",
            "description": "<p>The auxiliary receiver nodes (for CBF) - should be of the same length as auxTxNodes</p>"
          },
          {
            "group": "Parameter",
            "type": "Int16[]",
            "optional": true,
            "field": "auxTxPwrIndex",
            "description": "<p>The transmit power indicies of auxTxNodes (for CBF)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int16",
            "optional": true,
            "field": "nullAngle",
            "description": "<p>The nulling angle (for CBF)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int16",
            "optional": true,
            "field": "cbfBeamIdx",
            "description": "<p>The beam index (for CBF)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": true,
            "field": "setConfig",
            "description": "<p>If true, set CBF config for a link instead of actually executing a one-time scan</p>"
          }
        ],
        ":BeamIndices": [
          {
            "group": ":BeamIndices",
            "type": "Int32",
            "optional": false,
            "field": "low",
            "description": "<p>The low beam index</p>"
          },
          {
            "group": ":BeamIndices",
            "type": "Int32",
            "optional": false,
            "field": "high",
            "description": "<p>The high beam index</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/stream/statusChanges",
    "title": "Get Status Change Events",
    "name": "StatusChangeStream",
    "group": "Streams",
    "description": "<p>Creates a stream of status change events.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/stream/state",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nevent: EVENT_NODE_STATUS\ndata: {\"name\":\"terra322.f5.tb.a404-if\",\"node_type\":2,\"mac_addr\":\"00:00:00:10:0b:4c\",\"pop_node\":false,\"status\":3,\"wlan_mac_addrs\":[],\"site_name\":\"D\",\"ant_azimuth\":0,\"ant_elevation\":0}\n\nevent: EVENT_LINK_STATUS\ndata: {\"name\":\"link-terra314.f5.tb.a404-if-terra323.f5.tb.a404-if\",\"a_node_name\":\"terra314.f5.tb.a404-if\",\"z_node_name\":\"terra323.f5.tb.a404-if\",\"link_type\":1,\"is_alive\":true,\"linkup_attempts\":9,\"a_node_mac\":\"00:00:00:10:0b:4b\",\"z_node_mac\":\"00:00:00:10:0b:4d\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/terragraph-api/src/service/StreamApiClient.cpp",
    "groupTitle": "Streams",
    "parameter": {
      "fields": {
        "": [
          {
            "group": "StatusChangeEvents",
            "type": "Object(Node)",
            "optional": false,
            "field": "EVENT_NODE_STATUS",
            "description": "<p>Node status change event</p>"
          },
          {
            "group": "StatusChangeEvents",
            "type": "Object(Link)",
            "optional": false,
            "field": "EVENT_LINK_STATUS",
            "description": "<p>Link status change event</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/stream/topology",
    "title": "Get Topology Events",
    "name": "TopologyStream",
    "group": "Streams",
    "description": "<p>Creates a stream of Topology events.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/stream/topology",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\nevent: EVENT_ADD_NODE\ndata: {\"name\":\"terra322.f5.tb.a404-if\",\"node_type\":2,\"mac_addr\":\"00:00:00:10:0b:4c\",\"pop_node\":false,\"status\":3,\"wlan_mac_addrs\":[],\"site_name\":\"D\",\"ant_azimuth\":0,\"ant_elevation\":0}\n\nevent: EVENT_ADD_LINK\ndata: {\"name\":\"link-terra314.f5.tb.a404-if-terra323.f5.tb.a404-if\",\"a_node_name\":\"terra314.f5.tb.a404-if\",\"z_node_name\":\"terra323.f5.tb.a404-if\",\"link_type\":1,\"is_alive\":true,\"linkup_attempts\":9,\"a_node_mac\":\"00:00:00:10:0b:4b\",\"z_node_mac\":\"00:00:00:10:0b:4d\"}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "src/terragraph-api/src/service/StreamApiClient.cpp",
    "groupTitle": "Streams",
    "parameter": {
      "fields": {
        "": [
          {
            "group": "TopologyEvents",
            "type": "Object(Node)",
            "optional": false,
            "field": "EVENT_ADD_NODE",
            "description": "<p>Node added event</p>"
          },
          {
            "group": "TopologyEvents",
            "type": "Object(Node)",
            "optional": false,
            "field": "EVENT_DEL_NODE",
            "description": "<p>Node deleted event</p>"
          },
          {
            "group": "TopologyEvents",
            "type": "Object(Node)",
            "optional": false,
            "field": "EVENT_EDIT_NODE",
            "description": "<p>Node edited event</p>"
          },
          {
            "group": "TopologyEvents",
            "type": "Object(Link)",
            "optional": false,
            "field": "EVENT_ADD_LINK",
            "description": "<p>Link added event</p>"
          },
          {
            "group": "TopologyEvents",
            "type": "Object(Link)",
            "optional": false,
            "field": "EVENT_DEL_LINK",
            "description": "<p>Link deleted event</p>"
          },
          {
            "group": "TopologyEvents",
            "type": "Object(Site)",
            "optional": false,
            "field": "EVENT_ADD_SITE",
            "description": "<p>Site added event</p>"
          },
          {
            "group": "TopologyEvents",
            "type": "Object(Site)",
            "optional": false,
            "field": "EVENT_DEL_SITE",
            "description": "<p>Site deleted event</p>"
          },
          {
            "group": "TopologyEvents",
            "type": "Object(Site)",
            "optional": false,
            "field": "EVENT_EDIT_SITE",
            "description": "<p>Site edited event</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/addLink",
    "title": "Add Link",
    "version": "2.0.0",
    "name": "AddLink",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Adds a link between two nodes to the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"link\": {\"a_node_name\": \"terra212.f5.td.a404-if\", \"a_node_mac\": \"00:00:00:10:0b:45\", \"z_node_name\": \"terra214.f5.td.a404-if\", \"z_node_mac\": \"00:00:00:10:0b:46\", \"link_type\": 2, \"is_alive\": false, \"linkup_attempts\": 0}}' http://localhost:443/api/v2/addLink",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object(Link)",
            "optional": false,
            "field": "link",
            "description": "<p>The link</p>"
          }
        ],
        ":Link": [
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The link name</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "a_node_name",
            "description": "<p>The A-node name</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "a_node_mac",
            "description": "<p>The A-node MAC address (if empty, uses the node's MAC address)</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "z_node_name",
            "description": "<p>The Z-node name</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "z_node_mac",
            "description": "<p>The Z-node MAC address (if empty, uses the node's MAC address)</p>"
          },
          {
            "group": ":Link",
            "type": "Int(LinkType)",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "link_type",
            "description": "<p>The link type (1=WIRELESS, 2=ETHERNET)</p>"
          },
          {
            "group": ":Link",
            "type": "Boolean",
            "optional": false,
            "field": "is_alive",
            "description": "<p>The alive state (initialize to false)</p>"
          },
          {
            "group": ":Link",
            "type": "Int64",
            "optional": false,
            "field": "linkup_attempts",
            "description": "<p>The link-up attempts (initialize to 0)</p>"
          },
          {
            "group": ":Link",
            "type": "Boolean",
            "optional": true,
            "field": "is_backup_cn_link",
            "description": "<p>Whether this is a backup DN-to-CN link</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/addNode",
    "title": "Add Node",
    "version": "2.0.0",
    "name": "AddNode",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Adds a node at the given site to the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"node\": {\"name\": \"terra999.f5.td.a404-if\", \"node_type\": 2, \"mac_addr\": \"\", \"wlan_mac_addrs\": [], \"pop_node\" : false, \"status\": 1, \"site_name\": \"Test Site\", \"ant_azimuth\": 100.0, \"ant_elevation\": 999.99}}' http://localhost:443/api/v2/addNode",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object(Node)",
            "optional": false,
            "field": "node",
            "description": "<p>The node</p>"
          }
        ],
        ":Node": [
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The node name</p>"
          },
          {
            "group": ":Node",
            "type": "Int(NodeType)",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "node_type",
            "description": "<p>The type of node (1=CN, 2=DN)</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "mac_addr",
            "description": "<p>The node's MAC address (can be left blank)</p>"
          },
          {
            "group": ":Node",
            "type": "String[]",
            "optional": false,
            "field": "wlan_mac_addrs",
            "description": "<p>MAC addresses of wlan interfaces (can be empty)</p>"
          },
          {
            "group": ":Node",
            "type": "Boolean",
            "optional": false,
            "field": "pop_node",
            "description": "<p>Whether the node is connected to a POP</p>"
          },
          {
            "group": ":Node",
            "type": "Int(NodeStatusType)",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The node status (1=OFFLINE, 2=ONLINE, 3=ONLINE_INITIATOR)</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "site_name",
            "description": "<p>The site name</p>"
          },
          {
            "group": ":Node",
            "type": "Double",
            "optional": false,
            "field": "ant_azimuth",
            "description": "<p>The antenna azimuth</p>"
          },
          {
            "group": ":Node",
            "type": "Double",
            "optional": false,
            "field": "ant_elevation",
            "description": "<p>The antenna elevation</p>"
          },
          {
            "group": ":Node",
            "type": "Boolean",
            "optional": true,
            "field": "has_cpe",
            "description": "<p>Whether the node is attached to a customer</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": true,
            "field": "prefix",
            "description": "<p>Network prefix allocated to this node if available</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/addNodeWlanMacAddresses",
    "title": "Add Node Wlan Mac Addresses",
    "version": "2.0.0",
    "name": "AddNodeWlanMacAddresses",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Adds wlan MAC addresses to the given node</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeName\": \"terra111.f5.td.a404-if\", \"wlanMacs\": [\"99:00:00:10:0d:40\"]}' http://localhost:443/api/v2/addNodeWlanMacAddresses",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodeName",
            "description": "<p>The node name</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "wlanMacs",
            "description": "<p>Wlan MAC addresses to add</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/addSite",
    "title": "Add Site",
    "version": "2.0.0",
    "name": "AddSite",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Adds a site to the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"site\": {\"name\": \"Test Site\", \"location\": {\"latitude\": 37.4848, \"longitude\": -122.1472, \"altitude\": 30.5, \"accuracy\": 40000000}}}' http://localhost:443/api/v2/addSite",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object(Site)",
            "optional": false,
            "field": "site",
            "description": "<p>The site</p>"
          }
        ],
        ":Site": [
          {
            "group": ":Site",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The site name</p>"
          },
          {
            "group": ":Site",
            "type": "Object(Location)",
            "optional": false,
            "field": "location",
            "description": "<p>The site location</p>"
          }
        ],
        ":Location": [
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "altitude",
            "description": "<p>The altitude (in meters above WGS84 ellipsoid)</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "accuracy",
            "defaultValue": "40000000\n",
            "description": "<p>The location accuracy (in meters)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/allocatePrefixes",
    "title": "Allocate Prefixes",
    "version": "2.0.0",
    "name": "AllocatePrefixes",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Reallocates prefixes for all nodes in the network.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{}' http://localhost:443/api/v2/allocatePrefixes",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getLinkDiscoveryScanStatus",
    "title": "Get Link Discovery Scan Status",
    "version": "2.0.0",
    "name": "GetLinkDiscoveryScanStatus",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "TopologyBuilder",
    "description": "<p>Get the status of the link discovery scan.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost::443/api/v2/getLinkDiscoveryScanStatus",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"active\": false,\n    \"lastUpdateTime\": 1540594973,\n    \"responders\": {\n        \"15-46.p1\": [\n            {\n                \"bestRxAngle\": 11.25,\n                \"bestSnr\": 14,\n                \"bestTxAngle\": 5.625,\n                \"nearestSite\": \"18-9\",\n                \"nearestSiteDistance\": \"0.0717740869\",\n                \"responderInfo\": {\n                    \"addr\": \"38:3a:21:b0:0e:89\",\n                    \"adjs\": [\n                        \"74:6f:f7:ca:1a:f8\",\n                        \"38:3a:21:b0:11:e2\",\n                        \"2c:dc:ad:2f:e8:36\"\n                    ],\n                    \"itorLqmMat\": {\n                        \"0\": {\n                            \"0\": 250,\n                            \"16\": 267\n                        }\n                    },\n                    ... <more beams>\n                },\n                \"pos\": {\n                    \"accuracy\": 7.23619955501505,\n                    \"altitude\": -24.779,\n                    \"latitude\": 37.4846565,\n                    \"longitude\": -122.1457912\n                },\n                \"rtoiLqmMat\": {\n                    \"12\": {\n                        \"19\": 252,\n                        \"20\": 264,\n                        \"21\": 261,\n                        \"23\": 244\n                    },\n                    ... <more beams>\n                },\n            },\n        ],\n        ... <more responders>\n    }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology Builder"
  },
  {
    "type": "get",
    "url": "/getNetworkTopologyScanStatus",
    "title": "Get Network Topology Scan Status",
    "version": "2.0.0",
    "name": "GetNetworkTopologyScanStatus",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "TopologyBuilder",
    "description": "<p>Retrieves the status of the network-wide topology scan.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getNetworkTopologyScanStatus",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"active\": false,\n    \"lastUpdateTime\": 1540594973,\n    \"currentScanNode\": \"\",\n    \"queuedSites\": [],\n    \"emptySites\": [],\n    \"visitedSites\": [\n        \"B\",\n        \"E\",\n        \"A\",\n        \"C\",\n        \"F\",\n        \"D\"\n    ],\n    \"newNodes\": [\n        {\n            \"name\": \"E.1\",\n            \"node_type\": 2,\n            \"mac_addr\": \"38:3a:21:b0:04:9d\",\n            \"pop_node\": false,\n            \"status\": 0,\n            \"wlan_mac_addrs\": [],\n            \"site_name\": \"E\",\n            \"ant_azimuth\": 0,\n            \"ant_elevation\": 0\n        },\n        ... <more nodes>\n    ],\n    \"newLinks\": [\n        {\n            \"name\": \"link-E.1-MPK.11-02.S2\",\n            \"a_node_name\": \"E.1\",\n            \"z_node_name\": \"MPK.11-02.S2\",\n            \"link_type\": 1,\n            \"is_alive\": false,\n            \"linkup_attempts\": 0,\n            \"a_node_mac\": \"\",\n            \"z_node_mac\": \"\"\n        },\n        ... <more links>\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "active",
            "description": "<p>Whether a network-wide topology scan is running</p>"
          },
          {
            "group": "Success 200",
            "type": "Int64",
            "optional": false,
            "field": "lastUpdateTime",
            "description": "<p>The UNIX timestamp when the last update occurred (e.g. started a scan, received results, finished all scans)</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "currentScanRadio",
            "description": "<p>The current scan initiator MAC</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "queuedSites",
            "description": "<p>The list of sites left to scan</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "emptySites",
            "description": "<p>The list of sites not yet discovered</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "visitedSites",
            "description": "<p>The list of sites already scanned</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Node)[]",
            "optional": false,
            "field": "newNodes",
            "description": "<p>The list of newly-added nodes</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Link)[]",
            "optional": false,
            "field": "newLinks",
            "description": "<p>The list of newly-added links</p>"
          },
          {
            "group": "Success 200",
            "type": "Map(String:Map(String:Object(TopologyScanInfo)))",
            "optional": false,
            "field": "responses",
            "description": "<p>All scan responses, given as a two-level map first keyed on &quot;txNode&quot; (initiator) and then on &quot;addr&quot; (responder). Only the latest response is recorded for each txNode-addr pair. This is only present if &quot;storeResults&quot; was set in the original request.</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology Builder"
  },
  {
    "type": "post",
    "url": "/startContinuousTopologyScan",
    "title": "Start Continuous Topology Scan",
    "version": "2.0.0",
    "name": "StartContinuousTopologyScan",
    "permission": [
      {
        "name": "SCAN_WRITE"
      }
    ],
    "group": "TopologyBuilder",
    "description": "<p>Run a continuous topology scan for a given duration on a single node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"radioMac\": \"11:22:33:44:55:66\", \"durationSec\": 60}' http://localhost:443/api/v2/startContinuousTopologyScan",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology Builder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "radioMac",
            "description": "<p>The radio MAC address</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "durationSec",
            "description": "<p>The scan duration (in seconds), or zero to stop any running scans</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/startLinkDiscoveryScan",
    "title": "Start Link Discovery Scan",
    "version": "2.0.0",
    "name": "StartLinkDiscoveryScan",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "TopologyBuilder",
    "description": "<p>Use topology scans to find the best link for a node.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"targetMac\": \"2c:dc:ad:28:e7:2b\", \"scanRadius\": 200}' http://localhost:443/api/v2/startLinkDiscoveryScan",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology Builder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "targetMac",
            "description": "<p>The MAC address of the node to find</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "scanRadius",
            "description": "<p>The max distance from the target node in meters</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/startNetworkTopologyScan",
    "title": "Start Network Topology Scan",
    "version": "2.0.0",
    "name": "StartNetworkTopologyScan",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "TopologyBuilder",
    "description": "<p>Initiates a network-wide topology scan.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"siteLinks\": [{\"aSite\": \"A\", \"zSite\": \"B\"}, {\"aSite\": \"B\", \"zSite\": \"C\"}, {\"aSite\": \"C\", \"zSite\": \"D\"}, {\"aSite\": \"D\", \"zSite\": \"A\"}], \"macAddrs\": [], \"cnSites\": [], \"yStreetSites\": []}' http://localhost:443/api/v2/startNetworkTopologyScan",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology Builder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object(SiteLink)[]",
            "optional": false,
            "field": "siteLinks",
            "description": "<p>All links between sites that should be formed</p>"
          },
          {
            "group": "Parameter",
            "type": "Set(String)",
            "optional": false,
            "field": "macAddrs",
            "description": "<p>The node MAC addresses to accept (or any MAC if empty)</p>"
          },
          {
            "group": "Parameter",
            "type": "Set(String)",
            "optional": false,
            "field": "cnSites",
            "description": "<p>The sites comprised of CN nodes (if any)</p>"
          },
          {
            "group": "Parameter",
            "type": "Set(String)",
            "optional": false,
            "field": "yStreetSites",
            "description": "<p>The sites to allow creating Y-street topologies on (if any)</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "beamAnglePenalty",
            "defaultValue": "0.1\n",
            "description": "<p>The penalty for high tx/rx beam angles when selecting the &quot;best&quot; quality link to form, except on P2MP sites: link quality := SNR - (penalty * combined beam angle)</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "distanceThreshold",
            "defaultValue": "50\n",
            "description": "<p>The maximum distance, in meters, to allow between a responder's reported position and the nearest site</p>"
          },
          {
            "group": "Parameter",
            "type": "Double",
            "optional": false,
            "field": "snrThreshold",
            "defaultValue": "6.1\n",
            "description": "<p>The minimum signal-to-noise ratio (SNR), in dB, to allow on new links (default of 6.1dB is needed to support MCS2 at a PER of 1e-3)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int32",
            "optional": false,
            "field": "scansPerNode",
            "defaultValue": "1\n",
            "description": "<p>The number of scans that each node will initiate (regardless of success)</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "mergeAdjMacs",
            "defaultValue": "true\n",
            "description": "<p>If set, treat all discovered nodes as potentially multi-radio nodes, and add both &quot;addr&quot; and &quot;adjs&quot; into &quot;wlan_mac_addrs&quot;. Otherwise, treat all &quot;adjs&quot; as separate nodes.</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "storeResults",
            "defaultValue": "false\n",
            "description": "<p>If set, return all scan results in &quot;NetworkTopologyScanStatus&quot;.</p>"
          },
          {
            "group": "Parameter",
            "type": "Bool",
            "optional": false,
            "field": "dryRun",
            "defaultValue": "false\n",
            "description": "<p>If set, do not add any elements to the topology (typically used in conjunction with &quot;storeResults&quot;).</p>"
          }
        ],
        ":SiteLink": [
          {
            "group": ":SiteLink",
            "type": "String",
            "optional": false,
            "field": "aSite",
            "description": "<p>The first site (order does not matter)</p>"
          },
          {
            "group": ":SiteLink",
            "type": "String",
            "optional": false,
            "field": "zSite",
            "description": "<p>The second site (order does not matter)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/startTopologyScan",
    "title": "Start Topology Scan",
    "version": "2.0.0",
    "name": "StartTopologyScan",
    "permission": [
      {
        "name": "SCAN_WRITE"
      }
    ],
    "group": "TopologyBuilder",
    "description": "<p>Initiates a topology scan at a given node, returning information about nearby nodes.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"txNode\": \"15-46.p1\"}' http://localhost:443/api/v2/startTopologyScan",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"responders\": [\n        {\n            \"bestRxAngle\": 11.25,\n            \"bestSnr\": 14,\n            \"bestTxAngle\": 5.625,\n            \"nearestSite\": \"18-9\",\n            \"nearestSiteDistance\": \"0.0717740869\",\n            \"responderInfo\": {\n                \"addr\": \"38:3a:21:b0:0e:89\",\n                \"adjs\": [\n                    \"74:6f:f7:ca:1a:f8\",\n                    \"38:3a:21:b0:11:e2\",\n                    \"2c:dc:ad:2f:e8:36\"\n                ],\n                \"itorLqmMat\": {\n                    \"0\": {\n                        \"0\": 250,\n                        \"16\": 267\n                    },\n                    ... <more beams>\n                },\n                \"pos\": {\n                    \"accuracy\": 7.23619955501505,\n                    \"altitude\": -24.779,\n                    \"latitude\": 37.4846565,\n                    \"longitude\": -122.1457912\n                },\n                \"rtoiLqmMat\": {\n                    \"12\": {\n                        \"19\": 252,\n                        \"20\": 264,\n                        \"21\": 261,\n                        \"23\": 244\n                    },\n                    ... <more beams>\n                }\n            }\n        },\n        ... <more responders>\n    ],\n    \"txNode\": \"15-46.p1\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object(TopologyScanInfo)[]",
            "optional": false,
            "field": "responders",
            "description": "<p>The list of responders to the topology scan</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "txNode",
            "description": "<p>The transmitter node name</p>"
          },
          {
            "group": "Success 200",
            "type": "Int16",
            "optional": true,
            "field": "txPwrIndex",
            "description": "<p>The transmit power index used for the scan (0-31)</p>"
          }
        ],
        ":TopologyScanInfo": [
          {
            "group": ":TopologyScanInfo",
            "type": "Object(TopoResponderInfo)",
            "optional": false,
            "field": "responderInfo",
            "description": "<p>The raw responder information</p>"
          },
          {
            "group": ":TopologyScanInfo",
            "type": "Double",
            "optional": false,
            "field": "bestSnr",
            "description": "<p>The best signal-to-noise ratio (SNR) reported by the transmitter node, in dB</p>"
          },
          {
            "group": ":TopologyScanInfo",
            "type": "Double",
            "optional": false,
            "field": "bestTxAngle",
            "description": "<p>The transmitter beam angle at which the best SNR was found, in degrees</p>"
          },
          {
            "group": ":TopologyScanInfo",
            "type": "Double",
            "optional": false,
            "field": "bestRxAngle",
            "description": "<p>The receiver beam angle at which the best SNR was found, in degrees</p>"
          },
          {
            "group": ":TopologyScanInfo",
            "type": "String",
            "optional": false,
            "field": "nearestSite",
            "description": "<p>The name of the geographically nearest site in the topology</p>"
          },
          {
            "group": ":TopologyScanInfo",
            "type": "Double",
            "optional": false,
            "field": "nearestSiteDistance",
            "description": "<p>The approximate distance to the nearest site in the topology, in meters</p>"
          }
        ],
        ":TopoResponderInfo": [
          {
            "group": ":TopoResponderInfo",
            "type": "String",
            "optional": false,
            "field": "addr",
            "description": "<p>The MAC address of the responder</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Object(Location)",
            "optional": true,
            "field": "pos",
            "description": "<p>The GPS position of the responder</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Map(Int16:Map(Int16:Int16))",
            "optional": true,
            "field": "itorLqmMat",
            "description": "<p>The initiator-to-responder micro-route link quality metric (LQM) matrix</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Map(Int16:Map(Int16:Int16))",
            "optional": true,
            "field": "rtoiLqmMat",
            "description": "<p>The responder-to-initiator micro-route link quality metric (LQM) matrix</p>"
          },
          {
            "group": ":TopoResponderInfo",
            "type": "Set(String)",
            "optional": true,
            "field": "adjs",
            "description": "<p>The set of local adjacencies at the responder</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology Builder",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "txNode",
            "description": "<p>The transmitter radio MAC address or node name (will be deprecated)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int16",
            "optional": true,
            "field": "txPwrIndex",
            "description": "<p>The transmit power index (0-31, 255=current average power)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/stopNetworkTopologyScan",
    "title": "Stop Network Topology Scan",
    "version": "2.0.0",
    "name": "StopNetworkTopologyScan",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "TopologyBuilder",
    "description": "<p>Stops the current network-wide topology scan (if running).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{}' http://localhost:443/api/v2/stopNetworkTopologyScan",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology Builder",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/bulkAdd",
    "title": "Bulk Add Topology",
    "version": "2.0.0",
    "name": "BulkAdd",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Adds the given sites, nodes, and links to the topology (in that order).</p> <p>This command is equivalent to invoking the individual operations in sequence, and will proceed even if any of the topology changes fails.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"sites\": [{\"name\": \"Test Site\", \"location\": {\"latitude\": 37.4848, \"longitude\": -122.1472, \"altitude\": 30.5, \"accuracy\": 40000000}}], \"nodes\": [{\"name\": \"terra999.f5.td.a404-if\", \"node_type\": 2, \"mac_addr\": \"\", \"wlan_mac_addrs\": [], \"pop_node\" : false, \"status\": 1, \"site_name\": \"Test Site\", \"ant_azimuth\": 100.0, \"ant_elevation\": 999.99}]}' http://localhost:443/api/v2/bulkAdd",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"success\": true,\n    \"message\": \"Bulk add successful\",\n    \"addedSites\": [\"Test Site\"],\n    \"failedSites\": {},\n    \"addedNodes\": [\"terra999.f5.td.a404-if\"],\n    \"failedNodes\": {},\n    \"addedLinks\": [],\n    \"failedLinks\": {}\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "addedSites",
            "description": "<p>List of successfully added site names</p>"
          },
          {
            "group": "Success 200",
            "type": "Map(String:String)",
            "optional": false,
            "field": "failedSites",
            "description": "<p>Map of any failed site names to error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "addedNodes",
            "description": "<p>List of successfully added node names</p>"
          },
          {
            "group": "Success 200",
            "type": "Map(String:String)",
            "optional": false,
            "field": "failedNodes",
            "description": "<p>Map of any failed node names to error messages</p>"
          },
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "addedLinks",
            "description": "<p>List of successfully added link names</p>"
          },
          {
            "group": "Success 200",
            "type": "Map(String:String)",
            "optional": false,
            "field": "failedLinks",
            "description": "<p>Map of any failed link names to error messages</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object(Site)[]",
            "optional": false,
            "field": "sites",
            "description": "<p>The sites to add</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(Node)[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The nodes to add</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(Link)[]",
            "optional": false,
            "field": "links",
            "description": "<p>The links to add</p>"
          }
        ],
        ":Site": [
          {
            "group": ":Site",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The site name</p>"
          },
          {
            "group": ":Site",
            "type": "Object(Location)",
            "optional": false,
            "field": "location",
            "description": "<p>The site location</p>"
          }
        ],
        ":Node": [
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The node name</p>"
          },
          {
            "group": ":Node",
            "type": "Int(NodeType)",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "node_type",
            "description": "<p>The type of node (1=CN, 2=DN)</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "mac_addr",
            "description": "<p>The node's MAC address (can be left blank)</p>"
          },
          {
            "group": ":Node",
            "type": "String[]",
            "optional": false,
            "field": "wlan_mac_addrs",
            "description": "<p>MAC addresses of wlan interfaces (can be empty)</p>"
          },
          {
            "group": ":Node",
            "type": "Boolean",
            "optional": false,
            "field": "pop_node",
            "description": "<p>Whether the node is connected to a POP</p>"
          },
          {
            "group": ":Node",
            "type": "Int(NodeStatusType)",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The node status (1=OFFLINE, 2=ONLINE, 3=ONLINE_INITIATOR)</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "site_name",
            "description": "<p>The site name</p>"
          },
          {
            "group": ":Node",
            "type": "Double",
            "optional": false,
            "field": "ant_azimuth",
            "description": "<p>The antenna azimuth</p>"
          },
          {
            "group": ":Node",
            "type": "Double",
            "optional": false,
            "field": "ant_elevation",
            "description": "<p>The antenna elevation</p>"
          },
          {
            "group": ":Node",
            "type": "Boolean",
            "optional": true,
            "field": "has_cpe",
            "description": "<p>Whether the node is attached to a customer</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": true,
            "field": "prefix",
            "description": "<p>Network prefix allocated to this node if available</p>"
          }
        ],
        ":Link": [
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The link name</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "a_node_name",
            "description": "<p>The A-node name</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "a_node_mac",
            "description": "<p>The A-node MAC address (if empty, uses the node's MAC address)</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "z_node_name",
            "description": "<p>The Z-node name</p>"
          },
          {
            "group": ":Link",
            "type": "String",
            "optional": false,
            "field": "z_node_mac",
            "description": "<p>The Z-node MAC address (if empty, uses the node's MAC address)</p>"
          },
          {
            "group": ":Link",
            "type": "Int(LinkType)",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "link_type",
            "description": "<p>The link type (1=WIRELESS, 2=ETHERNET)</p>"
          },
          {
            "group": ":Link",
            "type": "Boolean",
            "optional": false,
            "field": "is_alive",
            "description": "<p>The alive state (initialize to false)</p>"
          },
          {
            "group": ":Link",
            "type": "Int64",
            "optional": false,
            "field": "linkup_attempts",
            "description": "<p>The link-up attempts (initialize to 0)</p>"
          },
          {
            "group": ":Link",
            "type": "Boolean",
            "optional": true,
            "field": "is_backup_cn_link",
            "description": "<p>Whether this is a backup DN-to-CN link</p>"
          }
        ],
        ":Location": [
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "altitude",
            "description": "<p>The altitude (in meters above WGS84 ellipsoid)</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "accuracy",
            "defaultValue": "40000000\n",
            "description": "<p>The location accuracy (in meters)</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/bulkSetNodeMacAddress",
    "title": "Bulk Set Node Mac Address",
    "version": "2.0.0",
    "name": "BulkSetNodeMacAddress",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Sets the MAC addresses of the given nodes (in order).</p> <p>This command is equivalent to setting the MAC addresses in sequence, and will proceed even if any of the operations fails.</p> <p>Unless the &quot;force&quot; flag is set, an operation can be rejected under certain circumstances (e.g. if a node is currently ignited).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"setNodeMacList\": [{\"nodeName\": \"terra111.f5.td.a404-if\", \"nodeMac\": \"99:00:00:10:0d:40\", \"force\": true}]}' http://localhost:443/api/v2/bulkSetNodeMacAddress",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Object(SetNodeMac)[]",
            "optional": false,
            "field": "setNodeMacList",
            "description": "<p>The list of node MAC addresses to set</p>"
          }
        ],
        ":SetNodeMac": [
          {
            "group": ":SetNodeMac",
            "type": "String",
            "optional": false,
            "field": "nodeName",
            "description": "<p>The node name</p>"
          },
          {
            "group": ":SetNodeMac",
            "type": "String",
            "optional": false,
            "field": "nodeMac",
            "description": "<p>The MAC address to set</p>"
          },
          {
            "group": ":SetNodeMac",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>Force set</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/changeNodeWlanMacAddress",
    "title": "Change Node Wlan Mac Address",
    "version": "2.0.0",
    "name": "ChangeNodeWlanMacAddress",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Changes one wlan MAC address of the given node</p> <p>Unless the &quot;force&quot; flag is set, an operation can be rejected under certain circumstances (e.g. if a node is currently ignited).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeName\": \"terra111.f5.td.a404-if\", \"oldWlanMac\": \"99:00:00:10:0d:40\", \"newWlanMac\": \"99:00:00:10:0d:41\"}' http://localhost:443/api/v2/changeNodeWlanMacAddress",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodeName",
            "description": "<p>The node name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "oldWlanMac",
            "description": "<p>Wlan MAC address to change</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "newWlanMac",
            "description": "<p>New wlan MAC address</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>Force set</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/delLink",
    "title": "Delete Link",
    "version": "2.0.0",
    "name": "DelLink",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Removes a link between two nodes from the topology.</p> <p>Unless the &quot;force&quot; flag is set, deletion can fail under certain circumstances (e.g. if the link is still alive).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"aNodeName\": \"terra212.f5.td.a404-if\", \"zNodeName\": \"terra214.f5.td.a404-if\", \"force\": true}' http://localhost:443/api/v2/delLink",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "aNodeName",
            "description": "<p>The A-node name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "zNodeName",
            "description": "<p>The Z-node name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>Force link deletion</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/delNode",
    "title": "Delete Node",
    "version": "2.0.0",
    "name": "DelNode",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Removes a node from the topology.</p> <p>Unless the &quot;force&quot; flag is set, deletion can fail under certain circumstances (e.g. if any link associated with the node is still alive).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeName\": \"terra212.f5.td.a404-if\", \"force\": false}' http://localhost:443/api/v2/delNode",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodeName",
            "description": "<p>The node name</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>Force node deletion</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/delSite",
    "title": "Delete Site",
    "version": "2.0.0",
    "name": "DelSite",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Removes a site from the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"siteName\": \"Test Site\"}' http://localhost:443/api/v2/delSite",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteName",
            "description": "<p>The site name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/deleteNodeWlanMacAddresses",
    "title": "Delete Node Wlan Mac Addresses",
    "version": "2.0.0",
    "name": "DeleteNodeWlanMacAddresses",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Deletes wlan MAC addresses from the given node</p> <p>Unless the &quot;force&quot; flag is set, this operation can be rejected under certain circumstances (e.g. if associated links are alive).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeName\": \"terra111.f5.td.a404-if\", \"wlanMacs\": [\"99:00:00:10:0d:40\"], \"force\": true}' http://localhost:443/api/v2/deleteNodeWlanMacAddresses",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodeName",
            "description": "<p>The node name</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "wlanMacs",
            "description": "<p>Wlan MAC addresses to delete</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>Force delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/editNode",
    "title": "Edit Node",
    "version": "2.0.0",
    "name": "EditNode",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Edits an existing node in the topology.</p> <p>Currently, the only supported changes are &quot;name&quot;, &quot;node_type&quot;, &quot;pop_node&quot;, &quot;ant_azimuth&quot;, &quot;ant_elevation&quot;, and &quot;has_cpe&quot;. When changing node type, no existing links are allowed.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeName\": \"terra212.f5.td.a404-if\", \"newNode\": {\"name\": \"terra999.f5.td.a404-if\", \"node_type\": 2, \"mac_addr\": \"00:00:00:10:0d:45\", \"wlan_mac_addrs\": [], \"pop_node\" : false, \"status\": 1, \"site_name\": \"B\", \"ant_azimuth\": 100.0, \"ant_elevation\": 999.99}}' http://localhost:443/api/v2/editNode",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodeName",
            "description": "<p>The node name</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(Node)",
            "optional": false,
            "field": "newNode",
            "description": "<p>The new node parameters</p>"
          }
        ],
        ":Node": [
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The node name</p>"
          },
          {
            "group": ":Node",
            "type": "Int(NodeType)",
            "allowedValues": [
              "1",
              "2"
            ],
            "optional": false,
            "field": "node_type",
            "description": "<p>The type of node (1=CN, 2=DN)</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "mac_addr",
            "description": "<p>The node's MAC address (can be left blank)</p>"
          },
          {
            "group": ":Node",
            "type": "String[]",
            "optional": false,
            "field": "wlan_mac_addrs",
            "description": "<p>MAC addresses of wlan interfaces (can be empty)</p>"
          },
          {
            "group": ":Node",
            "type": "Boolean",
            "optional": false,
            "field": "pop_node",
            "description": "<p>Whether the node is connected to a POP</p>"
          },
          {
            "group": ":Node",
            "type": "Int(NodeStatusType)",
            "allowedValues": [
              "1",
              "2",
              "3"
            ],
            "optional": false,
            "field": "status",
            "description": "<p>The node status (1=OFFLINE, 2=ONLINE, 3=ONLINE_INITIATOR)</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": false,
            "field": "site_name",
            "description": "<p>The site name</p>"
          },
          {
            "group": ":Node",
            "type": "Double",
            "optional": false,
            "field": "ant_azimuth",
            "description": "<p>The antenna azimuth</p>"
          },
          {
            "group": ":Node",
            "type": "Double",
            "optional": false,
            "field": "ant_elevation",
            "description": "<p>The antenna elevation</p>"
          },
          {
            "group": ":Node",
            "type": "Boolean",
            "optional": true,
            "field": "has_cpe",
            "description": "<p>Whether the node is attached to a customer</p>"
          },
          {
            "group": ":Node",
            "type": "String",
            "optional": true,
            "field": "prefix",
            "description": "<p>Network prefix allocated to this node if available</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/editSite",
    "title": "Edit Site",
    "version": "2.0.0",
    "name": "EditSite",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Edits an existing site in the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"siteName\": \"A\", \"newSite\": {\"name\": \"Z\", \"location\": {\"latitude\": 37.484946, \"longitude\": -122.1475237, \"altitude\": 17.92, \"accuracy\": 10.0}}}' http://localhost:443/api/v2/editSite",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "siteName",
            "description": "<p>The site name</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(Site)",
            "optional": false,
            "field": "newSite",
            "description": "<p>The new site parameters</p>"
          }
        ],
        ":Site": [
          {
            "group": ":Site",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The site name</p>"
          },
          {
            "group": ":Site",
            "type": "Object(Location)",
            "optional": false,
            "field": "location",
            "description": "<p>The site location</p>"
          }
        ],
        ":Location": [
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "latitude",
            "description": "<p>The latitude</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "longitude",
            "description": "<p>The longitude</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "altitude",
            "description": "<p>The altitude (in meters above WGS84 ellipsoid)</p>"
          },
          {
            "group": ":Location",
            "type": "Double",
            "optional": false,
            "field": "accuracy",
            "defaultValue": "40000000\n",
            "description": "<p>The location accuracy (in meters)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getLink",
    "title": "Get Link",
    "version": "2.0.0",
    "name": "GetLink",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "Topology",
    "description": "<p>Finds a link structure by name from the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"name\": \"link-terra111.f5.tb.a404-if-terra212.f5.tb.a404-if\"}' http://localhost:443/api/v2/getLink",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"a_node_mac\": \"00:00:00:10:0b:40\",\n    \"a_node_name\": \"terra111.f5.tb.a404-if\",\n    \"is_alive\": false,\n    \"link_type\": 1,\n    \"linkup_attempts\": 3,\n    \"name\": \"link-terra111.f5.tb.a404-if-terra212.f5.tb.a404-if\",\n    \"z_node_mac\": \"00:00:00:10:0b:45\",\n    \"z_node_name\": \"terra212.f5.tb.a404-if\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The link name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getNetworkAirtime",
    "title": "Get Network Airtime",
    "version": "2.0.0",
    "name": "GetNetworkAirtime",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "Topology",
    "description": "<p>Retrieves the network airtime allocation map.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getNetworkAirtime",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"nodeAirtimeMap\": {\n        \"terra111.f5.tb.a404-if\": {\n            \"linkAirtimes\": [\n                {\n                    \"macAddress\": \"00:00:00:10:0b:45\",\n                    \"rxIdeal\": -1,\n                    \"rxMax\": 8000,\n                    \"rxMin\": 200,\n                    \"txIdeal\": 10000,\n                    \"txMax\": 10000,\n                    \"txMin\": 200\n                }\n            ]\n        },\n        ... <more nodes>\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Map(String:Object(NodeAirtime))",
            "optional": false,
            "field": "nodeAirtimeMap",
            "description": "<p>The network airtime map (node name -&gt; airtimes)</p>"
          }
        ],
        ":NodeAirtime": [
          {
            "group": ":NodeAirtime",
            "type": "Object(LinkAirtime)[]",
            "optional": false,
            "field": "linkAirtimes",
            "description": "<p>The airtimes for each peer DN and peer CN</p>"
          }
        ],
        ":LinkAirtime": [
          {
            "group": ":LinkAirtime",
            "type": "String",
            "optional": false,
            "field": "macAddress",
            "description": "<p>The MAC address of the link</p>"
          },
          {
            "group": ":LinkAirtime",
            "type": "Int16",
            "optional": false,
            "field": "txIdeal",
            "description": "<p>The ideal TX airtime to the link (in 1/100%)</p>"
          },
          {
            "group": ":LinkAirtime",
            "type": "Int16",
            "optional": false,
            "field": "txMin",
            "description": "<p>The minimum TX airtime to the link (in 1/100%)</p>"
          },
          {
            "group": ":LinkAirtime",
            "type": "Int16",
            "optional": false,
            "field": "txMax",
            "description": "<p>The maximum TX airtime to the link (in 1/100%)</p>"
          },
          {
            "group": ":LinkAirtime",
            "type": "Int16",
            "optional": false,
            "field": "rxIdeal",
            "description": "<p>The ideal RX airtime from the link (in 1/100%)</p>"
          },
          {
            "group": ":LinkAirtime",
            "type": "Int16",
            "optional": false,
            "field": "rxMin",
            "description": "<p>The minimum RX airtime from the link (in 1/100%)</p>"
          },
          {
            "group": ":LinkAirtime",
            "type": "Int16",
            "optional": false,
            "field": "rxMax",
            "description": "<p>The maximum RX airtime from the link (in 1/100%)</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology"
  },
  {
    "type": "post",
    "url": "/getNode",
    "title": "Get Node",
    "version": "2.0.0",
    "name": "GetNode",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "Topology",
    "description": "<p>Finds a node structure by name from the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"name\": \"terra111.f5.tb.a404-if\"}' http://localhost:443/api/v2/getNode",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"ant_azimuth\": 0,\n    \"ant_elevation\": 0,\n    \"mac_addr\": \"00:00:00:10:0b:40\",\n    \"name\": \"terra111.f5.tb.a404-if\",\n    \"node_type\": 2,\n    \"pop_node\": true,\n    \"prefix\": \"face:b00c:cafe:ba00::/64\",\n    \"wlan_mac_addrs\": [],\n    \"site_name\": \"A\",\n    \"status\": 1\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The node name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getNodePrefixes",
    "title": "Get Node Prefixes",
    "version": "2.0.0",
    "name": "GetNodePrefixes",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "Topology",
    "description": "<p>Retrieves the prefixes allocated to the nodes in the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getNodePrefixes",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"nodePrefixes\": {\n        \"node-1\": \"face:b00c:0:1::/64\",\n        \"node-2\": \"face:b00c::/64\"\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        ":GetNodePrefixesResp": [
          {
            "group": ":GetNodePrefixesResp",
            "type": "Map(String:String)",
            "optional": false,
            "field": "nodePrefixes",
            "description": "<p>Map of node names to their assigned prefixes</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology"
  },
  {
    "type": "post",
    "url": "/getSite",
    "title": "Get Site",
    "version": "2.0.0",
    "name": "GetSite",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "Topology",
    "description": "<p>Finds a site structure by name from the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"name\": \"A\"}' http://localhost:443/api/v2/getSite",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"location\": {\n        \"accuracy\": 1.2327728906818156,\n        \"altitude\": -12.804,\n        \"latitude\": 37.4848884,\n        \"longitude\": -122.1473886\n    },\n    \"name\": \"A\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The site name</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getTopology",
    "title": "Get Topology",
    "version": "2.0.0",
    "name": "GetTopology",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "Topology",
    "description": "<p>Retrieves the network topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getTopology",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"config\": {\n        \"channel\": 2,\n        \"deterministic_prefix_alloc_params\": {\n            \"zones\": {\n                \"A\": {\n                    \"node_names\": [\n                        \"terra111.f5.tb.a404-if\",\n                        \"terra212.f5.tb.a404-if\"\n                    ],\n                    \"zone_prefixes\": [\n                        \"face:b00c:cafe:ba00::/56\"\n                    ]\n                }\n            }\n        }\n    },\n    \"links\": [\n        {\n            \"a_node_mac\": \"00:00:00:10:0b:40\",\n            \"a_node_name\": \"terra111.f5.tb.a404-if\",\n            \"is_alive\": false,\n            \"link_type\": 1,\n            \"linkup_attempts\": 3,\n            \"name\": \"link-terra111.f5.tb.a404-if-terra212.f5.tb.a404-if\",\n            \"z_node_mac\": \"00:00:00:10:0b:45\",\n            \"z_node_name\": \"terra212.f5.tb.a404-if\"\n        },\n        ... <more links>\n    ],\n    \"name\": \"Lab F8 B\",\n    \"nodes\": [\n        {\n            \"ant_azimuth\": 0,\n            \"ant_elevation\": 0,\n            \"mac_addr\": \"00:00:00:10:0b:40\",\n            \"name\": \"terra111.f5.tb.a404-if\",\n            \"node_type\": 2,\n            \"pop_node\": true,\n            \"prefix\": \"face:b00c:cafe:ba00::/64\",\n            \"wlan_mac_addrs\": [],\n            \"site_name\": \"A\",\n            \"status\": 1\n        },\n        ... <more nodes>\n    ],\n    \"sites\": [\n        {\n            \"location\": {\n                \"accuracy\": 1.2327728906818156,\n                \"altitude\": -12.804,\n                \"latitude\": 37.4848884,\n                \"longitude\": -122.1473886\n            },\n            \"name\": \"A\"\n        },\n        ... <more sites>\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The topology name</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Node)[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The list of nodes</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Link)[]",
            "optional": false,
            "field": "links",
            "description": "<p>The list of links</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Site)[]",
            "optional": false,
            "field": "sites",
            "description": "<p>The list of sites</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(Config)",
            "optional": false,
            "field": "config",
            "description": "<p>The topology config</p>"
          }
        ],
        ":Config": [
          {
            "group": ":Config",
            "type": "Byte",
            "allowedValues": [
              "1-3"
            ],
            "optional": false,
            "field": "channel",
            "defaultValue": "2",
            "description": "<p>The network channel</p>"
          },
          {
            "group": ":Config",
            "type": "Object(PrefixAllocParams_DEPRECATED)",
            "optional": true,
            "field": "prefix_alloc_params",
            "description": "<p>Parameters used for per-node prefix allocation in the network</p>"
          },
          {
            "group": ":Config",
            "type": "Object(DeterministicPrefixAllocParams)",
            "optional": true,
            "field": "deterministic_prefix_alloc_params",
            "description": "<p>Parameters used for per-node deterministic prefix allocation in the network</p>"
          }
        ],
        ":DeterministicPrefixAllocParams": [
          {
            "group": ":DeterministicPrefixAllocParams",
            "type": "Map(String:Object(Zone))",
            "optional": false,
            "field": "zones",
            "description": "<p>Map of zone names to their zone</p>"
          }
        ],
        ":Zone": [
          {
            "group": ":Zone",
            "type": "Set(String)",
            "optional": false,
            "field": "node_names",
            "description": "<p>Names of nodes in this zone</p>"
          },
          {
            "group": ":Zone",
            "type": "Set(String)",
            "optional": false,
            "field": "zone_prefixes",
            "description": "<p>Specific network prefixes allocated to this zone</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology"
  },
  {
    "type": "get",
    "url": "/getZonePrefixes",
    "title": "Get Zone Prefixes",
    "version": "2.0.0",
    "name": "GetZonePrefixes",
    "permission": [
      {
        "name": "TOPOLOGY_READ"
      }
    ],
    "group": "Topology",
    "description": "<p>Retrieves the prefixes allocated to the zones in the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getZonePrefixes",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"zonePrefixes\": {\n        \"A\": [\n            \"face:b00c::/56\"\n        ]\n    }\n}",
          "type": "json"
        }
      ],
      "fields": {
        ":GetZonePrefixesResp": [
          {
            "group": ":GetZonePrefixesResp",
            "type": "Map(String:Set(String))",
            "optional": false,
            "field": "zonePrefixes",
            "description": "<p>Map of site names to zone prefixes</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology"
  },
  {
    "type": "post",
    "url": "/setNodeMacAddress",
    "title": "Set Node Mac Address",
    "version": "2.0.0",
    "name": "SetNodeMacAddress",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Sets the MAC address of the given node.</p> <p>Unless the &quot;force&quot; flag is set, this operation can be rejected under certain circumstances (e.g. if the node is currently ignited).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"nodeName\": \"terra111.f5.td.a404-if\", \"nodeMac\": \"99:00:00:10:0d:40\", \"force\": true}' http://localhost:443/api/v2/setNodeMacAddress",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodeName",
            "description": "<p>The node name</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "nodeMac",
            "description": "<p>The MAC address to set</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "force",
            "description": "<p>Force set</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/setTopologyName",
    "title": "Set Topology Name",
    "version": "2.0.0",
    "name": "SetTopologyName",
    "permission": [
      {
        "name": "TOPOLOGY_WRITE"
      }
    ],
    "group": "Topology",
    "description": "<p>Sets the name of the topology.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"name\": \"Test Topology\"}' http://localhost:443/api/v2/setTopologyName",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Topology",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The new topology name</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/abortUpgrade",
    "title": "Abort Upgrade",
    "version": "2.0.0",
    "name": "AbortUpgrade",
    "permission": [
      {
        "name": "UPGRADE_WRITE"
      }
    ],
    "group": "Upgrade",
    "description": "<p>Aborts an upgrade.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"abortAll\": true, \"reqIds\": [], \"resetStatus\": true}' http://localhost:443/api/v2/abortUpgrade",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Upgrade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "abortAll",
            "description": "<p>Whether to abort all upgrades or only specific requests (reqIds)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "reqIds",
            "description": "<p>The request IDs to abort (if abortAll is false)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "resetStatus",
            "description": "<p>Whether to reset the upgrade state on affected nodes (if the current upgrde request is aborted)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/addUpgradeImage",
    "title": "Add Upgrade Image",
    "version": "2.0.0",
    "name": "AddUpgradeImage",
    "permission": [
      {
        "name": "UPGRADE_WRITE"
      }
    ],
    "group": "Upgrade",
    "description": "<p>Adds an image to be hosted by the controller.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"imageUrl\": \"https://example.com/tg-update-qoriq.bin\"}' http://localhost:443/api/v2/addUpgradeImage",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Upgrade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The HTTP/HTTPS URL of the image to download</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/delUpgradeImage",
    "title": "Delete Upgrade Image",
    "version": "2.0.0",
    "name": "DelUpgradeImage",
    "permission": [
      {
        "name": "UPGRADE_WRITE"
      }
    ],
    "group": "Upgrade",
    "description": "<p>Deletes an image from the controller.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"name\": \"Facebook Terragraph Release RELEASE_M16_1-michaelcallahan (michaelcallahan@devbig730 Wed Nov 22 18:27:41 PST 2017)\"}' http://localhost:443/api/v2/delUpgradeImage",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Upgrade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The name of the upgrade image to delete</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  },
  {
    "type": "post",
    "url": "/getUpgradeCommitPlan",
    "title": "Get Upgrade Commit Plan",
    "version": "2.0.0",
    "name": "GetUpgradeCommitPlan",
    "permission": [
      {
        "name": "UPGRADE_READ"
      }
    ],
    "group": "Upgrade",
    "description": "<p>Retrieves the upgrade commit plan containing the batching order at which nodes will be upgraded.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"limit\": 10, \"excludeNodes\": [\"terra411.f7.tg.a404-if\"]}' http://localhost:443/api/v2/getUpgradeCommitPlan",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"commitBatches\": [\n        [\n            \"terra121.f3.tg.a404-if\",\n            \"terra324.f3.tg.a404-if\",\n            \"terra322.f3.tg.a404-if\",\n            \"terra123.f3.tg.a404-if\",\n            \"terra611.f1.tg.a404-if\"\n        ],\n        [\n            \"terra623.f5.tg.a404-if\",\n            \"terra622.f5.tg.a404-if\"\n        ],\n        [\n            \"terra221.f1.tg.a404-if\",\n            \"terra224.f1.tg.a404-if\",\n            \"terra413.f1.tg.a404-if\"\n        ]\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        ":UpgradeCommitPlan": [
          {
            "group": ":UpgradeCommitPlan",
            "type": "Set(String)[]",
            "optional": false,
            "field": "commitBatches",
            "description": "<p>List of commit batches consisting of nodes to upgrade in each batch</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Upgrade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "limit",
            "description": "<p>The maximum number of nodes per batch</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "excludeNodes",
            "description": "<p>The nodes to exclude from the upgrade</p>"
          }
        ]
      }
    }
  },
  {
    "type": "get",
    "url": "/getUpgradeState",
    "title": "Get Upgrade State",
    "version": "2.0.0",
    "name": "GetUpgradeState",
    "permission": [
      {
        "name": "UPGRADE_READ"
      }
    ],
    "group": "Upgrade",
    "description": "<p>Retrieves the current upgrade state from the controller.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/getUpgradeState",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"curBatch\": [\n        \"terra312.f5.tb.a404-if\",\n        \"terra223.f5.tb.a404-if\",\n        \"terra222.f5.tb.a404-if\",\n        \"terra314.f5.tb.a404-if\",\n        \"terra214.f5.tb.a404-if\",\n        \"terra212.f5.tb.a404-if\",\n        \"terra211.f5.tb.a404-if\",\n        \"terra322.f5.tb.a404-if\",\n        \"terra123.f5.tb.a404-if\",\n        \"terra323.f5.tb.a404-if\",\n        \"terra221.f5.tb.a404-if\",\n        \"terra114.f5.tb.a404-if\",\n        \"terra121.f5.tb.a404-if\",\n        \"terra111.f5.tb.a404-if\"\n    ],\n    \"curReq\": {\n        \"excludeNodes\": [],\n        \"limit\": 0,\n        \"nodes\": [],\n        \"skipFailure\": false,\n        \"skipLinks\": [],\n        \"timeout\": 180,\n        \"retryLimit\": 3,\n        \"ugType\": 20,\n        \"urReq\": {\n            \"imageUrl\": \"magnet:?xt=urn:btih:3427351029eebbb923570440de57e738d892d996&dn=tg-update-qoriq.bin&tr=http%3a%2f%2f%5b2001%3a%3a1%5d%3a6969%2fannounce\",\n            \"md5\": \"176454de5884bbe173c2015e5145fc97\",\n            \"torrentParams\": {\n                \"downloadTimeout\": 180\n            },\n            \"upgradeReqId\": \"20171127162252\",\n            \"urType\": 10\n        },\n        \"version\": \"\"\n    },\n    \"pendingBatches\": [],\n    \"pendingReqs\": []\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String[]",
            "optional": false,
            "field": "curBatch",
            "description": "<p>The names of the nodes currently upgrading</p>"
          },
          {
            "group": "Success 200",
            "type": "String[][]",
            "optional": false,
            "field": "pendingBatches",
            "description": "<p>The batches of nodes pending for the current request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(UpgradeGroupReq)",
            "optional": false,
            "field": "curReq",
            "description": "<p>The current upgrade group request</p>"
          },
          {
            "group": "Success 200",
            "type": "Object(UpgradeGroupReq)[]",
            "optional": false,
            "field": "pendingReqs",
            "description": "<p>The queued upgrade group requests</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Upgrade"
  },
  {
    "type": "get",
    "url": "/listUpgradeImages",
    "title": "List Upgrade Images",
    "version": "2.0.0",
    "name": "ListUpgradeImages",
    "permission": [
      {
        "name": "UPGRADE_READ"
      }
    ],
    "group": "Upgrade",
    "description": "<p>Retrieves the list of all images hosted by the controller.</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -i http://localhost:443/api/v2/listUpgradeImages",
        "type": "curl"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"images\": [\n        {\n            \"magnetUri\": \"magnet:?xt=urn:btih:f8b37b30c31f201645c37a19f3fd2f08dde162b2&dn=176454de5884bbe173c2015e5145fc97.bin&tr=http%3a%2f%2f%5b%3a%3a1%5d%3a6969%2fannounce\",\n            \"httpUri\": \"http://[fd00::1]/node_image/network_name/md5.bin\",\n            \"md5\": \"176454de5884bbe173c2015e5145fc97\",\n            \"name\": \"Facebook Terragraph Release RELEASE_M16_1-michaelcallahan (michaelcallahan@devbig730 Wed Nov 22 18:27:41 PST 2017)\"\n        }\n    ]\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Object(UpgradeImage)[]",
            "optional": false,
            "field": "images",
            "description": "<p>The list of images hosted by the controller</p>"
          }
        ],
        ":UpgradeImage": [
          {
            "group": ":UpgradeImage",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>The unique, descriptive image name</p>"
          },
          {
            "group": ":UpgradeImage",
            "type": "String",
            "optional": false,
            "field": "magnetUri",
            "description": "<p>The magnet URI for the image</p>"
          },
          {
            "group": ":UpgradeImage",
            "type": "String",
            "optional": false,
            "field": "httpUri",
            "description": "<p>The HTTP URI for the image</p>"
          },
          {
            "group": ":UpgradeImage",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>The MD5 hash of the image</p>"
          },
          {
            "group": ":UpgradeImage",
            "type": "String[]",
            "optional": false,
            "field": "hardwareBoardIds",
            "description": "<p>The supported hardware board IDs</p>"
          }
        ]
      }
    },
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Upgrade"
  },
  {
    "type": "post",
    "url": "/sendUpgradeRequest",
    "title": "Send Upgrade Request",
    "version": "2.0.0",
    "name": "SendUpgradeRequest",
    "permission": [
      {
        "name": "UPGRADE_WRITE"
      }
    ],
    "group": "Upgrade",
    "description": "<p>Sends an upgrade request (prepare, commit, or reset status).</p>",
    "examples": [
      {
        "title": "Example:",
        "content": "curl -id '{\"ugType\": 20, \"nodes\": [], \"excludeNodes\": [], \"urReq\": {\"urType\": 10, \"upgradeReqId\": \"20171127162252\", \"md5\": \"176454de5884bbe173c2015e5145fc97\", \"imageUrl\": \"magnet:?xt=urn:btih:3427351029eebbb923570440de57e738d892d996&dn=tg-update-qoriq.bin&tr=http%3a%2f%2f%5b2001%3a%3a1%5d%3a6969%2fannounce\", \"torrentParams\": {\"downloadTimeout\": 180}}, \"timeout\": 180, \"skipFailure\": false, \"version\": \"\", \"skipLinks\": [], \"limit\": 0, \"retryLimit\": 3}' http://localhost:443/api/v2/sendUpgradeRequest",
        "type": "curl"
      }
    ],
    "filename": "src/terragraph-api/src/service/ApiClient.cpp",
    "groupTitle": "Upgrade",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Int(UpgradeGroupType)",
            "allowedValues": [
              "10",
              "20"
            ],
            "optional": false,
            "field": "ugType",
            "description": "<p>Whether to upgrade a list of nodes or the entire network (10=NODES, 20=NETWORK)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "nodes",
            "description": "<p>The nodes to upgrade (for node-level upgrades)</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "excludeNodes",
            "description": "<p>The nodes to exclude from the upgrade (for network-level upgrades)</p>"
          },
          {
            "group": "Parameter",
            "type": "Object(UpgradeReq)",
            "optional": false,
            "field": "urReq",
            "description": "<p>The upgrade request parameters</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "timeout",
            "description": "<p>The per-batch timeout for the upgrade operation (in seconds)</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "skipFailure",
            "description": "<p>If true, the controller will move on to the next node if the current node can't be upgraded; if false, it will abort the upgrade upon seeing a single node failure</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "skipPopFailure",
            "description": "<p>If true, the controller will not perform extra checks for POP nodes; if false, it will abort the upgrade upon seeing a POP node fail to re-establish BGP connections after upgrading</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "version",
            "description": "<p>Skip nodes with this version before prepare/commit</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "skipLinks",
            "description": "<p>Skip the link aliveness check for these links when updating the commit status</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "limit",
            "description": "<p>Maximum number of nodes to commit simultaneously (&lt;0 Upgrade all nodes at once; 0 Staged commit with no limit per stage; &gt;0 Staged commit with limiting number of nodes per stage)</p>"
          },
          {
            "group": "Parameter",
            "type": "Int64",
            "optional": false,
            "field": "retryLimit",
            "defaultValue": "3",
            "description": "<p>The maximum retry attempts for each node</p>"
          }
        ],
        ":UpgradeReq": [
          {
            "group": ":UpgradeReq",
            "type": "Int(UpgradeReqType)",
            "allowedValues": [
              "10",
              "20",
              "30",
              "40"
            ],
            "optional": false,
            "field": "urType",
            "description": "<p>The upgrade request type (10=PREPARE_UPGRADE, 20=COMMIT_UPGRADE, 30=RESET_STATUS, 40=FULL_UPGRADE)</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "String",
            "optional": false,
            "field": "upgradeReqId",
            "description": "<p>The unique identifier for the upgrade request</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "String",
            "optional": false,
            "field": "md5",
            "description": "<p>The expected MD5 hash of the upgrade image file (only used in prepare)</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "String",
            "optional": false,
            "field": "hardwareBoardIds",
            "description": "<p>The hardware board IDs that this image supports (only used in prepare)</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "String",
            "optional": false,
            "field": "imageUrl",
            "description": "<p>The URI for the upgrade image, which must be either an HTTP/HTTPS URL or Magnet URI (only used in prepare)</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "Int64",
            "optional": true,
            "field": "scheduleToCommit",
            "defaultValue": "0",
            "description": "<p>The number of seconds before a minion reboots after being flashed (only used in commit)</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "Int64",
            "allowedValues": [
              "1-10"
            ],
            "optional": true,
            "field": "downloadAttempts",
            "defaultValue": "3",
            "description": "<p>The maximum number of attempts for a minion to download the upgrade image (only used in prepare over HTTP/HTTPS)</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "Object(UpgradeTorrentParams)",
            "optional": true,
            "field": "torrentParams",
            "description": "<p>The torrent parameters (only used in prepare over BitTorrent)</p>"
          },
          {
            "group": ":UpgradeReq",
            "type": "String",
            "optional": true,
            "field": "nextNodeConfigJson",
            "description": "<p>The preloaded node config JSON for the new software image</p>"
          }
        ],
        ":UpgradeTorrentParams": [
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": false,
            "field": "downloadTimeout",
            "defaultValue": "100\n",
            "description": "<p>The timeout for downloading the torrent (in seconds)</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "downloadLimit",
            "defaultValue": "-1",
            "description": "<p>The download bandwidth limit (in bytes per second, unlimited by default)</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "uploadLimit",
            "defaultValue": "-1",
            "description": "<p>The upload bandwidth limit (in bytes per second, unlimited by default)</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "maxConnections",
            "defaultValue": "-1",
            "description": "<p>The maximum number of connections that the torrent will open (must be at least 2, unlimited by default)</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "peerTos",
            "description": "<p>The ToS (type of service) byte set in the IP header of every packet sent to peers</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "maxFailCount",
            "description": "<p>The maximum tries to connect to a peer before stopping</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "minReconnectTimeSec",
            "description": "<p>The number of seconds to wait to reconnect to a peer</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "peerConnectTimeoutSec",
            "description": "<p>The number of seconds to wait after a connection attempt is initiated to a peer until it is considered as having timed out</p>"
          },
          {
            "group": ":UpgradeTorrentParams",
            "type": "Int64",
            "optional": true,
            "field": "handshakeTimeoutSec",
            "description": "<p>The number of seconds to wait for a handshake response from a peer</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>The response status</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>The response message</p>"
          }
        ]
      }
    }
  }
] });
