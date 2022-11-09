const abi = {
    "source": {
      "hash": "0xe2783cf3d65a0c45a750c7f4163b63d249ae883a26b1c05d11ab6a5b72f0ec0c",
      "language": "ink! 3.4.0",
      "compiler": "rustc 1.67.0-nightly"
    },
    "contract": {
      "name": "flipper",
      "version": "0.1.0",
      "authors": [
        "[your_name] <[your_email]>"
      ]
    },
    "V3": {
      "spec": {
        "constructors": [
          {
            "args": [
              {
                "label": "init_value",
                "type": {
                  "displayName": [
                    "bool"
                  ],
                  "type": 0
                }
              }
            ],
            "docs": [
              "Constructor that initializes the `bool` value to the given `init_value`."
            ],
            "label": "new",
            "payable": false,
            "selector": "0x9bae9d5e"
          },
          {
            "args": [],
            "docs": [
              "Constructor that initializes the `bool` value to `false`.",
              "",
              "Constructors can delegate to other constructors."
            ],
            "label": "default",
            "payable": false,
            "selector": "0xed4b9d1b"
          }
        ],
        "docs": [],
        "events": [],
        "messages": [
          {
            "args": [],
            "docs": [
              " A message that can be called on instantiated contracts.",
              " This one flips the value of the stored `bool` from `true`",
              " to `false` and vice versa."
            ],
            "label": "flip",
            "mutates": true,
            "payable": false,
            "returnType": null,
            "selector": "0x633aa551"
          },
          {
            "args": [],
            "docs": [
              " Simply returns the current value of our `bool`."
            ],
            "label": "get",
            "mutates": false,
            "payable": false,
            "returnType": {
              "displayName": [
                "bool"
              ],
              "type": 0
            },
            "selector": "0x2f865bd9"
          }
        ]
      },
      "storage": {
        "struct": {
          "fields": [
            {
              "layout": {
                "cell": {
                  "key": "0x0000000000000000000000000000000000000000000000000000000000000000",
                  "ty": 0
                }
              },
              "name": "value"
            }
          ]
        }
      },
      "types": [
        {
          "id": 0,
          "type": {
            "def": {
              "primitive": "bool"
            }
          }
        }
      ]
    }
  };
  
  export default abi;