export const MockContract = 
{
  "contractName": "MockContract",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        }
      ],
      "name": "getMockReturnValue",
      "outputs": [
        {
          "name": "_mockReturnValue",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "functionName",
          "type": "string"
        },
        {
          "name": "argsSignature",
          "type": "bytes32"
        },
        {
          "name": "returnValue",
          "type": "bytes32"
        }
      ],
      "name": "mockReturnValue",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "reset",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "bytecode": "0x",
  "deployedBytecode": "0x",
  "sourceMap": "",
  "deployedSourceMap": "",
  "source": "/*\n\n  Copyright 2017 Dharma Labs Inc.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity 0.4.18;\n\n\ncontract MockContract {\n    bytes32 internal constant DEFAULT_SIGNATURE_ARGS = bytes32(0);\n\n    // We use bytes32 as our generic base type from and to which we cast all other types\n    mapping (string => bytes32[]) internal functionCallSignatures;\n    mapping (string => mapping (bytes32 => bytes32)) internal mockedReturnValue;\n    mapping (string => mapping (bytes32 => bool)) internal functionCalls;\n\n    function mockReturnValue(\n        string functionName,\n        bytes32 argsSignature,\n        bytes32 returnValue\n    ) public {\n        functionCallSignatures[functionName].push(argsSignature);\n        mockedReturnValue[functionName][argsSignature] = returnValue;\n    }\n\n    function getMockReturnValue(string functionName, bytes32 argsSignature)\n        public\n        view\n        returns (bytes32 _mockReturnValue)\n    {\n        return mockedReturnValue[functionName][argsSignature];\n    }\n\n    function reset() public {\n        for (uint i = 0; i < 10; i++) {\n            string memory functionName = getFunctionList()[i];\n\n            if (bytes(functionName).length != 0) {\n                for (uint j = 0; j < functionCallSignatures[functionName].length; j++) {\n                    bytes32 callSignature = functionCallSignatures[functionName][j];\n                    delete functionCalls[functionName][callSignature];\n                    delete mockedReturnValue[functionName][callSignature];\n                }\n\n                delete functionCallSignatures[functionName];\n            }\n        }\n    }\n\n    function functionCalledWithArgs(string functionName, bytes32 args)\n        internal\n    {\n        functionCalls[functionName][args] = true;\n        functionCallSignatures[functionName].push(args);\n    }\n\n    function wasFunctionCalledWithArgs(string functionName, bytes32 args)\n        internal\n        view\n        returns (bool wasCalled)\n    {\n        return functionCalls[functionName][args];\n    }\n\n    function getFunctionList() internal returns (string[10] functionNames);\n}\n",
  "sourcePath": "/Users/kayvon/dharma/charta/contracts/test/mocks/MockContract.sol",
  "ast": {
    "attributes": {
      "absolutePath": "/Users/kayvon/dharma/charta/contracts/test/mocks/MockContract.sol",
      "exportedSymbols": {
        "MockContract": [
          5540
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            "0.4",
            ".18"
          ]
        },
        "id": 5357,
        "name": "PragmaDirective",
        "src": "584:23:17"
      },
      {
        "attributes": {
          "baseContracts": [
            null
          ],
          "contractDependencies": [
            null
          ],
          "contractKind": "contract",
          "documentation": null,
          "fullyImplemented": false,
          "linearizedBaseContracts": [
            5540
          ],
          "name": "MockContract",
          "scope": 5541
        },
        "children": [
          {
            "attributes": {
              "constant": true,
              "name": "DEFAULT_SIGNATURE_ARGS",
              "scope": 5540,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 5358,
                "name": "ElementaryTypeName",
                "src": "638:7:17"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "type": "bytes32",
                  "type_conversion": true
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_rational_0_by_1",
                          "typeString": "int_const 0"
                        }
                      ],
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "type": "type(bytes32)",
                      "value": "bytes32"
                    },
                    "id": 5359,
                    "name": "ElementaryTypeNameExpression",
                    "src": "689:7:17"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "30",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "number",
                      "type": "int_const 0",
                      "value": "0"
                    },
                    "id": 5360,
                    "name": "Literal",
                    "src": "697:1:17"
                  }
                ],
                "id": 5361,
                "name": "FunctionCall",
                "src": "689:10:17"
              }
            ],
            "id": 5362,
            "name": "VariableDeclaration",
            "src": "638:61:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCallSignatures",
              "scope": 5540,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => bytes32[] storage ref)",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => bytes32[] storage ref)"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 5363,
                    "name": "ElementaryTypeName",
                    "src": "804:6:17"
                  },
                  {
                    "attributes": {
                      "length": null,
                      "type": "bytes32[] storage pointer"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5364,
                        "name": "ElementaryTypeName",
                        "src": "814:7:17"
                      }
                    ],
                    "id": 5365,
                    "name": "ArrayTypeName",
                    "src": "814:9:17"
                  }
                ],
                "id": 5366,
                "name": "Mapping",
                "src": "795:29:17"
              }
            ],
            "id": 5367,
            "name": "VariableDeclaration",
            "src": "795:61:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "mockedReturnValue",
              "scope": 5540,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bytes32))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 5368,
                    "name": "ElementaryTypeName",
                    "src": "871:6:17"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bytes32)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5369,
                        "name": "ElementaryTypeName",
                        "src": "890:7:17"
                      },
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5370,
                        "name": "ElementaryTypeName",
                        "src": "901:7:17"
                      }
                    ],
                    "id": 5371,
                    "name": "Mapping",
                    "src": "881:28:17"
                  }
                ],
                "id": 5372,
                "name": "Mapping",
                "src": "862:48:17"
              }
            ],
            "id": 5373,
            "name": "VariableDeclaration",
            "src": "862:75:17"
          },
          {
            "attributes": {
              "constant": false,
              "name": "functionCalls",
              "scope": 5540,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "mapping(string memory => mapping(bytes32 => bool))",
              "value": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "type": "mapping(string memory => mapping(bytes32 => bool))"
                },
                "children": [
                  {
                    "attributes": {
                      "name": "string",
                      "type": "string storage pointer"
                    },
                    "id": 5374,
                    "name": "ElementaryTypeName",
                    "src": "952:6:17"
                  },
                  {
                    "attributes": {
                      "type": "mapping(bytes32 => bool)"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5375,
                        "name": "ElementaryTypeName",
                        "src": "971:7:17"
                      },
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5376,
                        "name": "ElementaryTypeName",
                        "src": "982:4:17"
                      }
                    ],
                    "id": 5377,
                    "name": "Mapping",
                    "src": "962:25:17"
                  }
                ],
                "id": 5378,
                "name": "Mapping",
                "src": "943:45:17"
              }
            ],
            "id": 5379,
            "name": "VariableDeclaration",
            "src": "943:68:17"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "mockReturnValue",
              "payable": false,
              "scope": 5540,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 5404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5380,
                        "name": "ElementaryTypeName",
                        "src": "1052:6:17"
                      }
                    ],
                    "id": 5381,
                    "name": "VariableDeclaration",
                    "src": "1052:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5382,
                        "name": "ElementaryTypeName",
                        "src": "1081:7:17"
                      }
                    ],
                    "id": 5383,
                    "name": "VariableDeclaration",
                    "src": "1081:21:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "returnValue",
                      "scope": 5404,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5384,
                        "name": "ElementaryTypeName",
                        "src": "1112:7:17"
                      }
                    ],
                    "id": 5385,
                    "name": "VariableDeclaration",
                    "src": "1112:19:17"
                  }
                ],
                "id": 5386,
                "name": "ParameterList",
                "src": "1042:95:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5387,
                "name": "ParameterList",
                "src": "1145:0:17"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5367,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5388,
                                    "name": "Identifier",
                                    "src": "1155:22:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5381,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5389,
                                    "name": "Identifier",
                                    "src": "1178:12:17"
                                  }
                                ],
                                "id": 5390,
                                "name": "IndexAccess",
                                "src": "1155:36:17"
                              }
                            ],
                            "id": 5391,
                            "name": "MemberAccess",
                            "src": "1155:41:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5383,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5392,
                            "name": "Identifier",
                            "src": "1197:13:17"
                          }
                        ],
                        "id": 5393,
                        "name": "FunctionCall",
                        "src": "1155:56:17"
                      }
                    ],
                    "id": 5394,
                    "name": "ExpressionStatement",
                    "src": "1155:56:17"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bytes32"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bytes32)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5373,
                                      "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                      "value": "mockedReturnValue"
                                    },
                                    "id": 5395,
                                    "name": "Identifier",
                                    "src": "1221:17:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5381,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5396,
                                    "name": "Identifier",
                                    "src": "1239:12:17"
                                  }
                                ],
                                "id": 5398,
                                "name": "IndexAccess",
                                "src": "1221:31:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5383,
                                  "type": "bytes32",
                                  "value": "argsSignature"
                                },
                                "id": 5397,
                                "name": "Identifier",
                                "src": "1253:13:17"
                              }
                            ],
                            "id": 5399,
                            "name": "IndexAccess",
                            "src": "1221:46:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5385,
                              "type": "bytes32",
                              "value": "returnValue"
                            },
                            "id": 5400,
                            "name": "Identifier",
                            "src": "1270:11:17"
                          }
                        ],
                        "id": 5401,
                        "name": "Assignment",
                        "src": "1221:60:17"
                      }
                    ],
                    "id": 5402,
                    "name": "ExpressionStatement",
                    "src": "1221:60:17"
                  }
                ],
                "id": 5403,
                "name": "Block",
                "src": "1145:143:17"
              }
            ],
            "id": 5404,
            "name": "FunctionDefinition",
            "src": "1018:270:17"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getMockReturnValue",
              "payable": false,
              "scope": 5540,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 5420,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5405,
                        "name": "ElementaryTypeName",
                        "src": "1322:6:17"
                      }
                    ],
                    "id": 5406,
                    "name": "VariableDeclaration",
                    "src": "1322:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "argsSignature",
                      "scope": 5420,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5407,
                        "name": "ElementaryTypeName",
                        "src": "1343:7:17"
                      }
                    ],
                    "id": 5408,
                    "name": "VariableDeclaration",
                    "src": "1343:21:17"
                  }
                ],
                "id": 5409,
                "name": "ParameterList",
                "src": "1321:44:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "_mockReturnValue",
                      "scope": 5420,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5410,
                        "name": "ElementaryTypeName",
                        "src": "1411:7:17"
                      }
                    ],
                    "id": 5411,
                    "name": "VariableDeclaration",
                    "src": "1411:24:17"
                  }
                ],
                "id": 5412,
                "name": "ParameterList",
                "src": "1410:26:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5412
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bytes32"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bytes32)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5373,
                                  "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                  "value": "mockedReturnValue"
                                },
                                "id": 5413,
                                "name": "Identifier",
                                "src": "1458:17:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5406,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5414,
                                "name": "Identifier",
                                "src": "1476:12:17"
                              }
                            ],
                            "id": 5415,
                            "name": "IndexAccess",
                            "src": "1458:31:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5408,
                              "type": "bytes32",
                              "value": "argsSignature"
                            },
                            "id": 5416,
                            "name": "Identifier",
                            "src": "1490:13:17"
                          }
                        ],
                        "id": 5417,
                        "name": "IndexAccess",
                        "src": "1458:46:17"
                      }
                    ],
                    "id": 5418,
                    "name": "Return",
                    "src": "1451:53:17"
                  }
                ],
                "id": 5419,
                "name": "Block",
                "src": "1441:70:17"
              }
            ],
            "id": 5420,
            "name": "FunctionDefinition",
            "src": "1294:217:17"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "reset",
              "payable": false,
              "scope": 5540,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5421,
                "name": "ParameterList",
                "src": "1531:2:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5422,
                "name": "ParameterList",
                "src": "1541:0:17"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "assignments": [
                            5424
                          ]
                        },
                        "children": [
                          {
                            "attributes": {
                              "constant": false,
                              "name": "i",
                              "scope": 5493,
                              "stateVariable": false,
                              "storageLocation": "default",
                              "type": "uint256",
                              "value": null,
                              "visibility": "internal"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "name": "uint",
                                  "type": "uint256"
                                },
                                "id": 5423,
                                "name": "ElementaryTypeName",
                                "src": "1556:4:17"
                              }
                            ],
                            "id": 5424,
                            "name": "VariableDeclaration",
                            "src": "1556:6:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "30",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 0",
                              "value": "0"
                            },
                            "id": 5425,
                            "name": "Literal",
                            "src": "1565:1:17"
                          }
                        ],
                        "id": 5426,
                        "name": "VariableDeclarationStatement",
                        "src": "1556:10:17"
                      },
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "<",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5424,
                              "type": "uint256",
                              "value": "i"
                            },
                            "id": 5427,
                            "name": "Identifier",
                            "src": "1568:1:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 5428,
                            "name": "Literal",
                            "src": "1572:2:17"
                          }
                        ],
                        "id": 5429,
                        "name": "BinaryOperation",
                        "src": "1568:6:17"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "operator": "++",
                              "prefix": false,
                              "type": "uint256"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5424,
                                  "type": "uint256",
                                  "value": "i"
                                },
                                "id": 5430,
                                "name": "Identifier",
                                "src": "1576:1:17"
                              }
                            ],
                            "id": 5431,
                            "name": "UnaryOperation",
                            "src": "1576:3:17"
                          }
                        ],
                        "id": 5432,
                        "name": "ExpressionStatement",
                        "src": "1576:3:17"
                      },
                      {
                        "children": [
                          {
                            "attributes": {
                              "assignments": [
                                5434
                              ]
                            },
                            "children": [
                              {
                                "attributes": {
                                  "constant": false,
                                  "name": "functionName",
                                  "scope": 5493,
                                  "stateVariable": false,
                                  "storageLocation": "memory",
                                  "type": "string memory",
                                  "value": null,
                                  "visibility": "internal"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "name": "string",
                                      "type": "string storage pointer"
                                    },
                                    "id": 5433,
                                    "name": "ElementaryTypeName",
                                    "src": "1595:6:17"
                                  }
                                ],
                                "id": 5434,
                                "name": "VariableDeclaration",
                                "src": "1595:26:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "string memory"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "arguments": [
                                        null
                                      ],
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "isStructConstructorCall": false,
                                      "lValueRequested": false,
                                      "names": [
                                        null
                                      ],
                                      "type": "string memory[10] memory",
                                      "type_conversion": false
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": [
                                            null
                                          ],
                                          "overloadedDeclarations": [
                                            null
                                          ],
                                          "referencedDeclaration": 5539,
                                          "type": "function () returns (string memory[10] memory)",
                                          "value": "getFunctionList"
                                        },
                                        "id": 5435,
                                        "name": "Identifier",
                                        "src": "1624:15:17"
                                      }
                                    ],
                                    "id": 5436,
                                    "name": "FunctionCall",
                                    "src": "1624:17:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5424,
                                      "type": "uint256",
                                      "value": "i"
                                    },
                                    "id": 5437,
                                    "name": "Identifier",
                                    "src": "1642:1:17"
                                  }
                                ],
                                "id": 5438,
                                "name": "IndexAccess",
                                "src": "1624:20:17"
                              }
                            ],
                            "id": 5439,
                            "name": "VariableDeclarationStatement",
                            "src": "1595:49:17"
                          },
                          {
                            "attributes": {
                              "falseBody": null
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "commonType": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  },
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "operator": "!=",
                                  "type": "bool"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "member_name": "length",
                                      "referencedDeclaration": null,
                                      "type": "uint256"
                                    },
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "isStructConstructorCall": false,
                                          "lValueRequested": false,
                                          "names": [
                                            null
                                          ],
                                          "type": "bytes memory",
                                          "type_conversion": true
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": [
                                                {
                                                  "typeIdentifier": "t_string_memory_ptr",
                                                  "typeString": "string memory"
                                                }
                                              ],
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "type": "type(bytes storage pointer)",
                                              "value": "bytes"
                                            },
                                            "id": 5440,
                                            "name": "ElementaryTypeNameExpression",
                                            "src": "1663:5:17"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5434,
                                              "type": "string memory",
                                              "value": "functionName"
                                            },
                                            "id": 5441,
                                            "name": "Identifier",
                                            "src": "1669:12:17"
                                          }
                                        ],
                                        "id": 5442,
                                        "name": "FunctionCall",
                                        "src": "1663:19:17"
                                      }
                                    ],
                                    "id": 5443,
                                    "name": "MemberAccess",
                                    "src": "1663:26:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "hexvalue": "30",
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "lValueRequested": false,
                                      "subdenomination": null,
                                      "token": "number",
                                      "type": "int_const 0",
                                      "value": "0"
                                    },
                                    "id": 5444,
                                    "name": "Literal",
                                    "src": "1693:1:17"
                                  }
                                ],
                                "id": 5445,
                                "name": "BinaryOperation",
                                "src": "1663:31:17"
                              },
                              {
                                "children": [
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "assignments": [
                                            5447
                                          ]
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "constant": false,
                                              "name": "j",
                                              "scope": 5493,
                                              "stateVariable": false,
                                              "storageLocation": "default",
                                              "type": "uint256",
                                              "value": null,
                                              "visibility": "internal"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "name": "uint",
                                                  "type": "uint256"
                                                },
                                                "id": 5446,
                                                "name": "ElementaryTypeName",
                                                "src": "1719:4:17"
                                              }
                                            ],
                                            "id": 5447,
                                            "name": "VariableDeclaration",
                                            "src": "1719:6:17"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "hexvalue": "30",
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": true,
                                              "lValueRequested": false,
                                              "subdenomination": null,
                                              "token": "number",
                                              "type": "int_const 0",
                                              "value": "0"
                                            },
                                            "id": 5448,
                                            "name": "Literal",
                                            "src": "1728:1:17"
                                          }
                                        ],
                                        "id": 5449,
                                        "name": "VariableDeclarationStatement",
                                        "src": "1719:10:17"
                                      },
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "commonType": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                          },
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "<",
                                          "type": "bool"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "overloadedDeclarations": [
                                                null
                                              ],
                                              "referencedDeclaration": 5447,
                                              "type": "uint256",
                                              "value": "j"
                                            },
                                            "id": 5450,
                                            "name": "Identifier",
                                            "src": "1731:1:17"
                                          },
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "member_name": "length",
                                              "referencedDeclaration": null,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32[] storage ref"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5367,
                                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                                      "value": "functionCallSignatures"
                                                    },
                                                    "id": 5451,
                                                    "name": "Identifier",
                                                    "src": "1735:22:17"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5434,
                                                      "type": "string memory",
                                                      "value": "functionName"
                                                    },
                                                    "id": 5452,
                                                    "name": "Identifier",
                                                    "src": "1758:12:17"
                                                  }
                                                ],
                                                "id": 5453,
                                                "name": "IndexAccess",
                                                "src": "1735:36:17"
                                              }
                                            ],
                                            "id": 5454,
                                            "name": "MemberAccess",
                                            "src": "1735:43:17"
                                          }
                                        ],
                                        "id": 5455,
                                        "name": "BinaryOperation",
                                        "src": "1731:47:17"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": false,
                                              "isPure": false,
                                              "lValueRequested": false,
                                              "operator": "++",
                                              "prefix": false,
                                              "type": "uint256"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5447,
                                                  "type": "uint256",
                                                  "value": "j"
                                                },
                                                "id": 5456,
                                                "name": "Identifier",
                                                "src": "1780:1:17"
                                              }
                                            ],
                                            "id": 5457,
                                            "name": "UnaryOperation",
                                            "src": "1780:3:17"
                                          }
                                        ],
                                        "id": 5458,
                                        "name": "ExpressionStatement",
                                        "src": "1780:3:17"
                                      },
                                      {
                                        "children": [
                                          {
                                            "attributes": {
                                              "assignments": [
                                                5460
                                              ]
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "constant": false,
                                                  "name": "callSignature",
                                                  "scope": 5493,
                                                  "stateVariable": false,
                                                  "storageLocation": "default",
                                                  "type": "bytes32",
                                                  "value": null,
                                                  "visibility": "internal"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "name": "bytes32",
                                                      "type": "bytes32"
                                                    },
                                                    "id": 5459,
                                                    "name": "ElementaryTypeName",
                                                    "src": "1807:7:17"
                                                  }
                                                ],
                                                "id": 5460,
                                                "name": "VariableDeclaration",
                                                "src": "1807:21:17"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": true,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "type": "bytes32"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": false,
                                                      "type": "bytes32[] storage ref"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5367,
                                                          "type": "mapping(string memory => bytes32[] storage ref)",
                                                          "value": "functionCallSignatures"
                                                        },
                                                        "id": 5461,
                                                        "name": "Identifier",
                                                        "src": "1831:22:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5434,
                                                          "type": "string memory",
                                                          "value": "functionName"
                                                        },
                                                        "id": 5462,
                                                        "name": "Identifier",
                                                        "src": "1854:12:17"
                                                      }
                                                    ],
                                                    "id": 5463,
                                                    "name": "IndexAccess",
                                                    "src": "1831:36:17"
                                                  },
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "overloadedDeclarations": [
                                                        null
                                                      ],
                                                      "referencedDeclaration": 5447,
                                                      "type": "uint256",
                                                      "value": "j"
                                                    },
                                                    "id": 5464,
                                                    "name": "Identifier",
                                                    "src": "1868:1:17"
                                                  }
                                                ],
                                                "id": 5465,
                                                "name": "IndexAccess",
                                                "src": "1831:39:17"
                                              }
                                            ],
                                            "id": 5466,
                                            "name": "VariableDeclarationStatement",
                                            "src": "1807:63:17"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bool"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bool)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5379,
                                                              "type": "mapping(string memory => mapping(bytes32 => bool))",
                                                              "value": "functionCalls"
                                                            },
                                                            "id": 5467,
                                                            "name": "Identifier",
                                                            "src": "1899:13:17"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5434,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5468,
                                                            "name": "Identifier",
                                                            "src": "1913:12:17"
                                                          }
                                                        ],
                                                        "id": 5469,
                                                        "name": "IndexAccess",
                                                        "src": "1899:27:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5460,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5470,
                                                        "name": "Identifier",
                                                        "src": "1927:13:17"
                                                      }
                                                    ],
                                                    "id": 5471,
                                                    "name": "IndexAccess",
                                                    "src": "1899:42:17"
                                                  }
                                                ],
                                                "id": 5472,
                                                "name": "UnaryOperation",
                                                "src": "1892:49:17"
                                              }
                                            ],
                                            "id": 5473,
                                            "name": "ExpressionStatement",
                                            "src": "1892:49:17"
                                          },
                                          {
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "isConstant": false,
                                                  "isLValue": false,
                                                  "isPure": false,
                                                  "lValueRequested": false,
                                                  "operator": "delete",
                                                  "prefix": true,
                                                  "type": "tuple()"
                                                },
                                                "children": [
                                                  {
                                                    "attributes": {
                                                      "argumentTypes": null,
                                                      "isConstant": false,
                                                      "isLValue": true,
                                                      "isPure": false,
                                                      "lValueRequested": true,
                                                      "type": "bytes32"
                                                    },
                                                    "children": [
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "isConstant": false,
                                                          "isLValue": true,
                                                          "isPure": false,
                                                          "lValueRequested": false,
                                                          "type": "mapping(bytes32 => bytes32)"
                                                        },
                                                        "children": [
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5373,
                                                              "type": "mapping(string memory => mapping(bytes32 => bytes32))",
                                                              "value": "mockedReturnValue"
                                                            },
                                                            "id": 5474,
                                                            "name": "Identifier",
                                                            "src": "1970:17:17"
                                                          },
                                                          {
                                                            "attributes": {
                                                              "argumentTypes": null,
                                                              "overloadedDeclarations": [
                                                                null
                                                              ],
                                                              "referencedDeclaration": 5434,
                                                              "type": "string memory",
                                                              "value": "functionName"
                                                            },
                                                            "id": 5475,
                                                            "name": "Identifier",
                                                            "src": "1988:12:17"
                                                          }
                                                        ],
                                                        "id": 5476,
                                                        "name": "IndexAccess",
                                                        "src": "1970:31:17"
                                                      },
                                                      {
                                                        "attributes": {
                                                          "argumentTypes": null,
                                                          "overloadedDeclarations": [
                                                            null
                                                          ],
                                                          "referencedDeclaration": 5460,
                                                          "type": "bytes32",
                                                          "value": "callSignature"
                                                        },
                                                        "id": 5477,
                                                        "name": "Identifier",
                                                        "src": "2002:13:17"
                                                      }
                                                    ],
                                                    "id": 5478,
                                                    "name": "IndexAccess",
                                                    "src": "1970:46:17"
                                                  }
                                                ],
                                                "id": 5479,
                                                "name": "UnaryOperation",
                                                "src": "1963:53:17"
                                              }
                                            ],
                                            "id": 5480,
                                            "name": "ExpressionStatement",
                                            "src": "1963:53:17"
                                          }
                                        ],
                                        "id": 5481,
                                        "name": "Block",
                                        "src": "1785:250:17"
                                      }
                                    ],
                                    "id": 5482,
                                    "name": "ForStatement",
                                    "src": "1714:321:17"
                                  },
                                  {
                                    "children": [
                                      {
                                        "attributes": {
                                          "argumentTypes": null,
                                          "isConstant": false,
                                          "isLValue": false,
                                          "isPure": false,
                                          "lValueRequested": false,
                                          "operator": "delete",
                                          "prefix": true,
                                          "type": "tuple()"
                                        },
                                        "children": [
                                          {
                                            "attributes": {
                                              "argumentTypes": null,
                                              "isConstant": false,
                                              "isLValue": true,
                                              "isPure": false,
                                              "lValueRequested": true,
                                              "type": "bytes32[] storage ref"
                                            },
                                            "children": [
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5367,
                                                  "type": "mapping(string memory => bytes32[] storage ref)",
                                                  "value": "functionCallSignatures"
                                                },
                                                "id": 5483,
                                                "name": "Identifier",
                                                "src": "2060:22:17"
                                              },
                                              {
                                                "attributes": {
                                                  "argumentTypes": null,
                                                  "overloadedDeclarations": [
                                                    null
                                                  ],
                                                  "referencedDeclaration": 5434,
                                                  "type": "string memory",
                                                  "value": "functionName"
                                                },
                                                "id": 5484,
                                                "name": "Identifier",
                                                "src": "2083:12:17"
                                              }
                                            ],
                                            "id": 5485,
                                            "name": "IndexAccess",
                                            "src": "2060:36:17"
                                          }
                                        ],
                                        "id": 5486,
                                        "name": "UnaryOperation",
                                        "src": "2053:43:17"
                                      }
                                    ],
                                    "id": 5487,
                                    "name": "ExpressionStatement",
                                    "src": "2053:43:17"
                                  }
                                ],
                                "id": 5488,
                                "name": "Block",
                                "src": "1696:415:17"
                              }
                            ],
                            "id": 5489,
                            "name": "IfStatement",
                            "src": "1659:452:17"
                          }
                        ],
                        "id": 5490,
                        "name": "Block",
                        "src": "1581:540:17"
                      }
                    ],
                    "id": 5491,
                    "name": "ForStatement",
                    "src": "1551:570:17"
                  }
                ],
                "id": 5492,
                "name": "Block",
                "src": "1541:586:17"
              }
            ],
            "id": 5493,
            "name": "FunctionDefinition",
            "src": "1517:610:17"
          },
          {
            "attributes": {
              "constant": false,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "functionCalledWithArgs",
              "payable": false,
              "scope": 5540,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 5516,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5494,
                        "name": "ElementaryTypeName",
                        "src": "2165:6:17"
                      }
                    ],
                    "id": 5495,
                    "name": "VariableDeclaration",
                    "src": "2165:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5516,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5496,
                        "name": "ElementaryTypeName",
                        "src": "2186:7:17"
                      }
                    ],
                    "id": 5497,
                    "name": "VariableDeclaration",
                    "src": "2186:12:17"
                  }
                ],
                "id": 5498,
                "name": "ParameterList",
                "src": "2164:35:17"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5499,
                "name": "ParameterList",
                "src": "2221:0:17"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "operator": "=",
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": true,
                              "type": "bool"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "mapping(bytes32 => bool)"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5379,
                                      "type": "mapping(string memory => mapping(bytes32 => bool))",
                                      "value": "functionCalls"
                                    },
                                    "id": 5500,
                                    "name": "Identifier",
                                    "src": "2231:13:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5495,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5501,
                                    "name": "Identifier",
                                    "src": "2245:12:17"
                                  }
                                ],
                                "id": 5503,
                                "name": "IndexAccess",
                                "src": "2231:27:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5497,
                                  "type": "bytes32",
                                  "value": "args"
                                },
                                "id": 5502,
                                "name": "Identifier",
                                "src": "2259:4:17"
                              }
                            ],
                            "id": 5504,
                            "name": "IndexAccess",
                            "src": "2231:33:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "74727565",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "bool",
                              "type": "bool",
                              "value": "true"
                            },
                            "id": 5505,
                            "name": "Literal",
                            "src": "2267:4:17"
                          }
                        ],
                        "id": 5506,
                        "name": "Assignment",
                        "src": "2231:40:17"
                      }
                    ],
                    "id": 5507,
                    "name": "ExpressionStatement",
                    "src": "2231:40:17"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "type": "uint256",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "push",
                              "referencedDeclaration": null,
                              "type": "function (bytes32) returns (uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "type": "bytes32[] storage ref"
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5367,
                                      "type": "mapping(string memory => bytes32[] storage ref)",
                                      "value": "functionCallSignatures"
                                    },
                                    "id": 5508,
                                    "name": "Identifier",
                                    "src": "2281:22:17"
                                  },
                                  {
                                    "attributes": {
                                      "argumentTypes": null,
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 5495,
                                      "type": "string memory",
                                      "value": "functionName"
                                    },
                                    "id": 5509,
                                    "name": "Identifier",
                                    "src": "2304:12:17"
                                  }
                                ],
                                "id": 5510,
                                "name": "IndexAccess",
                                "src": "2281:36:17"
                              }
                            ],
                            "id": 5511,
                            "name": "MemberAccess",
                            "src": "2281:41:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5497,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5512,
                            "name": "Identifier",
                            "src": "2323:4:17"
                          }
                        ],
                        "id": 5513,
                        "name": "FunctionCall",
                        "src": "2281:47:17"
                      }
                    ],
                    "id": 5514,
                    "name": "ExpressionStatement",
                    "src": "2281:47:17"
                  }
                ],
                "id": 5515,
                "name": "Block",
                "src": "2221:114:17"
              }
            ],
            "id": 5516,
            "name": "FunctionDefinition",
            "src": "2133:202:17"
          },
          {
            "attributes": {
              "constant": true,
              "implemented": true,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "wasFunctionCalledWithArgs",
              "payable": false,
              "scope": 5540,
              "stateMutability": "view",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionName",
                      "scope": 5532,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string storage pointer"
                        },
                        "id": 5517,
                        "name": "ElementaryTypeName",
                        "src": "2376:6:17"
                      }
                    ],
                    "id": 5518,
                    "name": "VariableDeclaration",
                    "src": "2376:19:17"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "name": "args",
                      "scope": 5532,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bytes32",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bytes32",
                          "type": "bytes32"
                        },
                        "id": 5519,
                        "name": "ElementaryTypeName",
                        "src": "2397:7:17"
                      }
                    ],
                    "id": 5520,
                    "name": "VariableDeclaration",
                    "src": "2397:12:17"
                  }
                ],
                "id": 5521,
                "name": "ParameterList",
                "src": "2375:35:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "wasCalled",
                      "scope": 5532,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "bool",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "bool",
                          "type": "bool"
                        },
                        "id": 5522,
                        "name": "ElementaryTypeName",
                        "src": "2458:4:17"
                      }
                    ],
                    "id": 5523,
                    "name": "VariableDeclaration",
                    "src": "2458:14:17"
                  }
                ],
                "id": 5524,
                "name": "ParameterList",
                "src": "2457:16:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "functionReturnParameters": 5524
                    },
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "type": "bool"
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": true,
                              "isPure": false,
                              "lValueRequested": false,
                              "type": "mapping(bytes32 => bool)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5379,
                                  "type": "mapping(string memory => mapping(bytes32 => bool))",
                                  "value": "functionCalls"
                                },
                                "id": 5525,
                                "name": "Identifier",
                                "src": "2495:13:17"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 5518,
                                  "type": "string memory",
                                  "value": "functionName"
                                },
                                "id": 5526,
                                "name": "Identifier",
                                "src": "2509:12:17"
                              }
                            ],
                            "id": 5527,
                            "name": "IndexAccess",
                            "src": "2495:27:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 5520,
                              "type": "bytes32",
                              "value": "args"
                            },
                            "id": 5528,
                            "name": "Identifier",
                            "src": "2523:4:17"
                          }
                        ],
                        "id": 5529,
                        "name": "IndexAccess",
                        "src": "2495:33:17"
                      }
                    ],
                    "id": 5530,
                    "name": "Return",
                    "src": "2488:40:17"
                  }
                ],
                "id": 5531,
                "name": "Block",
                "src": "2478:57:17"
              }
            ],
            "id": 5532,
            "name": "FunctionDefinition",
            "src": "2341:194:17"
          },
          {
            "attributes": {
              "body": null,
              "constant": false,
              "implemented": false,
              "isConstructor": false,
              "modifiers": [
                null
              ],
              "name": "getFunctionList",
              "payable": false,
              "scope": 5540,
              "stateMutability": "nonpayable",
              "superFunction": null,
              "visibility": "internal"
            },
            "children": [
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 5533,
                "name": "ParameterList",
                "src": "2565:2:17"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "name": "functionNames",
                      "scope": 5539,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "string memory[10] memory",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "type": "string storage ref[10] storage pointer"
                        },
                        "children": [
                          {
                            "attributes": {
                              "name": "string",
                              "type": "string storage pointer"
                            },
                            "id": 5534,
                            "name": "ElementaryTypeName",
                            "src": "2586:6:17"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "3130",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "number",
                              "type": "int_const 10",
                              "value": "10"
                            },
                            "id": 5535,
                            "name": "Literal",
                            "src": "2593:2:17"
                          }
                        ],
                        "id": 5536,
                        "name": "ArrayTypeName",
                        "src": "2586:10:17"
                      }
                    ],
                    "id": 5537,
                    "name": "VariableDeclaration",
                    "src": "2586:24:17"
                  }
                ],
                "id": 5538,
                "name": "ParameterList",
                "src": "2585:26:17"
              }
            ],
            "id": 5539,
            "name": "FunctionDefinition",
            "src": "2541:71:17"
          }
        ],
        "id": 5540,
        "name": "ContractDefinition",
        "src": "610:2004:17"
      }
    ],
    "id": 5541,
    "name": "SourceUnit",
    "src": "584:2031:17"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.18+commit.9cf6e910.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "1.0.1",
  "updatedAt": "2018-07-02T23:10:02.074Z"
}