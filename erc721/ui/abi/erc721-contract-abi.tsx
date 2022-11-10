const abi = {
  "source": {
    "hash": "0xcb61f53fa86376cb2d7606917cda33e032b5664afec21d76ff046b287a6b2990",
    "language": "ink! 4.0.0-alpha.3",
    "compiler": "rustc 1.65.0",
    "build_info": {
      "build_mode": "Debug",
      "cargo_contract_version": "2.0.0-alpha.5",
      "rust_toolchain": "stable-aarch64-apple-darwin",
      "wasm_opt_settings": {
        "keep_debug_symbols": false,
        "optimization_passes": "Z"
      }
    }
  },
  "contract": {
    "name": "erc721",
    "version": "4.0.0-alpha.3",
    "authors": [
      "Parity Technologies <admin@parity.io>"
    ]
  },
  "spec": {
    "constructors": [
      {
        "args": [],
        "docs": [
          "Creates a new ERC-721 token contract."
        ],
        "label": "new",
        "payable": false,
        "returnType": null,
        "selector": "0x9bae9d5e"
      }
    ],
    "docs": [],
    "events": [
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 5
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "Option"
              ],
              "type": 5
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Event emitted when a token transfer occurs."
        ],
        "label": "Transfer"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Event emitted when a token approve occurs."
        ],
        "label": "Approval"
      },
      {
        "args": [
          {
            "docs": [],
            "indexed": true,
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": true,
            "label": "operator",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "docs": [],
            "indexed": false,
            "label": "approved",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 6
            }
          }
        ],
        "docs": [
          " Event emitted when an operator is enabled or disabled for an owner.",
          " The operator can manage all NFTs of the owner."
        ],
        "label": "ApprovalForAll"
      }
    ],
    "messages": [
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Returns the balance of the owner.",
          "",
          " This represents the amount of unique tokens the owner has."
        ],
        "label": "balance_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "u32"
          ],
          "type": 3
        },
        "selector": "0x0f755a56"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Returns the owner of the token."
        ],
        "label": "owner_of",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "Option"
          ],
          "type": 5
        },
        "selector": "0x99720c1e"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Returns the approved account ID for this token if any."
        ],
        "label": "get_approved",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "Option"
          ],
          "type": 5
        },
        "selector": "0x27592dea"
      },
      {
        "args": [
          {
            "label": "owner",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "operator",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          }
        ],
        "docs": [
          " Returns `true` if the operator is approved by the owner."
        ],
        "label": "is_approved_for_all",
        "mutates": false,
        "payable": false,
        "returnType": {
          "displayName": [
            "bool"
          ],
          "type": 6
        },
        "selector": "0x0f5922e9"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "approved",
            "type": {
              "displayName": [
                "bool"
              ],
              "type": 6
            }
          }
        ],
        "docs": [
          " Approves or disapproves the operator for all tokens of the caller."
        ],
        "label": "set_approval_for_all",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 7
        },
        "selector": "0xcfd0c27b"
      },
      {
        "args": [
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Approves the account to transfer the specified token on behalf of the caller."
        ],
        "label": "approve",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 7
        },
        "selector": "0x681266a0"
      },
      {
        "args": [
          {
            "label": "destination",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Transfers the token from the caller to the given destination."
        ],
        "label": "transfer",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 7
        },
        "selector": "0x84a15da1"
      },
      {
        "args": [
          {
            "label": "from",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "to",
            "type": {
              "displayName": [
                "AccountId"
              ],
              "type": 0
            }
          },
          {
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Transfer approved or owned token."
        ],
        "label": "transfer_from",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 7
        },
        "selector": "0x0b396f18"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Creates a new token."
        ],
        "label": "mint",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 7
        },
        "selector": "0xcfdd9aa2"
      },
      {
        "args": [
          {
            "label": "id",
            "type": {
              "displayName": [
                "TokenId"
              ],
              "type": 3
            }
          }
        ],
        "docs": [
          " Deletes an existing token. Only the owner can burn the token."
        ],
        "label": "burn",
        "mutates": true,
        "payable": false,
        "returnType": {
          "displayName": [
            "Result"
          ],
          "type": 7
        },
        "selector": "0xb1efc17b"
      }
    ]
  },
  "storage": {
    "root": {
      "layout": {
        "struct": {
          "fields": [
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0xed16db9e",
                      "ty": 0
                    }
                  },
                  "root_key": "0xed16db9e"
                }
              },
              "name": "token_owner"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0x4d897660",
                      "ty": 0
                    }
                  },
                  "root_key": "0x4d897660"
                }
              },
              "name": "token_approvals"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0xb5379df2",
                      "ty": 3
                    }
                  },
                  "root_key": "0xb5379df2"
                }
              },
              "name": "owned_tokens_count"
            },
            {
              "layout": {
                "root": {
                  "layout": {
                    "leaf": {
                      "key": "0xad984333",
                      "ty": 4
                    }
                  },
                  "root_key": "0xad984333"
                }
              },
              "name": "operator_approvals"
            }
          ],
          "name": "Erc721"
        }
      },
      "root_key": "0x00000000"
    }
  },
  "types": [
    {
      "id": 0,
      "type": {
        "def": {
          "composite": {
            "fields": [
              {
                "type": 1,
                "typeName": "[u8; 32]"
              }
            ]
          }
        },
        "path": [
          "ink_primitives",
          "types",
          "AccountId"
        ]
      }
    },
    {
      "id": 1,
      "type": {
        "def": {
          "array": {
            "len": 32,
            "type": 2
          }
        }
      }
    },
    {
      "id": 2,
      "type": {
        "def": {
          "primitive": "u8"
        }
      }
    },
    {
      "id": 3,
      "type": {
        "def": {
          "primitive": "u32"
        }
      }
    },
    {
      "id": 4,
      "type": {
        "def": {
          "tuple": []
        }
      }
    },
    {
      "id": 5,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "None"
              },
              {
                "fields": [
                  {
                    "type": 0
                  }
                ],
                "index": 1,
                "name": "Some"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 0
          }
        ],
        "path": [
          "Option"
        ]
      }
    },
    {
      "id": 6,
      "type": {
        "def": {
          "primitive": "bool"
        }
      }
    },
    {
      "id": 7,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "fields": [
                  {
                    "type": 4
                  }
                ],
                "index": 0,
                "name": "Ok"
              },
              {
                "fields": [
                  {
                    "type": 8
                  }
                ],
                "index": 1,
                "name": "Err"
              }
            ]
          }
        },
        "params": [
          {
            "name": "T",
            "type": 4
          },
          {
            "name": "E",
            "type": 8
          }
        ],
        "path": [
          "Result"
        ]
      }
    },
    {
      "id": 8,
      "type": {
        "def": {
          "variant": {
            "variants": [
              {
                "index": 0,
                "name": "NotOwner"
              },
              {
                "index": 1,
                "name": "NotApproved"
              },
              {
                "index": 2,
                "name": "TokenExists"
              },
              {
                "index": 3,
                "name": "TokenNotFound"
              },
              {
                "index": 4,
                "name": "CannotInsert"
              },
              {
                "index": 5,
                "name": "CannotFetchValue"
              },
              {
                "index": 6,
                "name": "NotAllowed"
              }
            ]
          }
        },
        "path": [
          "erc721",
          "erc721",
          "Error"
        ]
      }
    }
  ],
  "version": "4"
}
  
  export default abi;