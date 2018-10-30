const uuid = require('uuid/v4')
const JsonDB = require('node-json-db')

const db = new JsonDB('tree', true, false)

db.delete('/')

const pushNode = (name, value) => {
  try {
    db.push(name, value, false)
    return true
  } catch (e) {
    console.log(e)
    return false
  }
}

const formatData = (data, parentId = null) => {
  parentId = parentId ? `${parentId}/` : ''

  for (const child of data) {
    const id = `${parentId}${uuid()}`
    const children = [ ...child.children ]
    delete child['children']
    node = {
      data: {
        id,
        ...child
      }
    }
   
    pushNode(`/${id}`, node)
    formatData(children, id)
  }
}


const data = [{
  "title": "Solar Boat",
  "autor": "Sven Uitendaal",
  "quantity": 1,
  "type": "Assembly",
  "deadline": "20-12-2018",
  "children": [
    {
      "title": "Hull Assembly",
      "autor": "fill in author",
      "quantity": "fill in quantity",
      "type": "Assembly",
      "deadline": "fill in deadline",
      "children": [
        {
          "title": "Port Hull",
          "autor": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Hull-Strut Connection Port",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Hull-Strut Connection Port Watertight Ring",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Hull-Strut Connection Port Stiffeners",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Front Strut Port Outer Tube",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                }
              ]
            },
            {
              "title": "Front Strut Port Plate",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Hatch Port",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            }
          ]
        },
        {
          "title": "Starboard Hull",
          "autor": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Hull-Strut Connection Starboard",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Hull-Strut Connection Starboard Watertight Ring",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Hull-Strut Connection Starboard Stiffeners",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Front Strut Starboard Outer Tube",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                }
              ]
            },
            {
              "title": "Front Strut Starboard Plate",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Hatch Starboard",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            }
          ]
        },
        {
          "title": "Main Hull Assembly",
          "autor": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Main Hull",
              "autor": "fill in author",
              "quantity": "fill in quantity",
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Main Hull Laminate",
                  "autor": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Rear Strut Outer Tube",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Rear Strut Plate",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Hull-Strut Connection Main",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Hull-Strut Connection Main Watertight Ring",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Hull-Strut Connection Main Stiffeners",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                },
                {
                  "title": "Hatch Main",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                }
              ]
            },
            {
              "title": "Power Box",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Circuit Breaker",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Motor Precharger",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Motor Precharge Relay",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Motor Precharge Resistor",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                },
                {
                  "title": "Solar Precharger",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Solar Precharge Relay",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Solar Precharge Resistor",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                },
                {
                  "title": "Motor Relay",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Solar Relay",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Fuse",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "EMS",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "24 Volt",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "TDK Lambda",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Custom PCB",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                },
                {
                  "title": "MPPT",
                  "autor": "fill in author",
                  "quantity": 12,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                }
              ]
            },
            {
              "title": "Battery Box",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Pack",
                  "autor": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Module",
                      "autor": "fill in author",
                      "quantity": "fill in quantity",
                      "type": "Assembly",
                      "deadline": "fill in deadline",
                      "children": [
                        {
                          "title": "Cell",
                          "autor": "fill in author",
                          "quantity": "fill in quantity",
                          "type": "Part",
                          "deadline": "fill in deadline",
                          "children": [

                          ]
                        },
                        {
                          "title": "Nickel Foil",
                          "autor": "fill in author",
                          "quantity": "fill in quantity",
                          "type": "Part",
                          "deadline": "fill in deadline",
                          "children": [

                          ]
                        },
                        {
                          "title": "PMMA",
                          "autor": "fill in author",
                          "quantity": "fill in quantity",
                          "type": "Part",
                          "deadline": "fill in deadline",
                          "children": [

                          ]
                        }
                      ]
                    }
                  ]
                },
                {
                  "title": "Casing",
                  "autor": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "BMS",
                  "autor": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Custom PCB",
                      "autor": "fill in author",
                      "quantity": "fill in quantity",
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Control Box",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Dashboard",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Control",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Bilge Pump Switch",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Deadmans Switch",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "24 V Switch",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Solar Panel Switch",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Control PCB",
                      "autor": "fill in author",
                      "quantity": "fill in quantity",
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                },
                {
                  "title": "DAQ",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Antenna",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Modem",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Development Board",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                }
              ]
            },
            {
              "title": "Strategy Interface",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Strategy Screen",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                }
              ]
            },
            {
              "title": "Maintenance Interface",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Maintenance Screen",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                }
              ]
            },
            {
              "title": "Motor Controller",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Logger",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Motor Assembly",
              "autor": "Gijs van Rijen",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "",
              "children": [
                {
                  "title": "Motor",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [
	                  {
                      "title": "Front bearing (FAG 6204)",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear bearing (FAG 3204)",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

   	                  ]
              	    },
              	    {
              	      "title": "Stator",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

               	      ]
                	  },
              	    {
              	      "title": "Rotor",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                	    ]
                	  }
                  ]
              	},
              	{
              	  "title": "Shaft mounting",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [
              	    {
              	      "title": "Flanged shaft with inner splines",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    },
                    {
  	                  "title": "6x M6 threaded boreholes",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    }
                  ]
                },
              	{
              	  "title": "Resolver (Tamagawa TS2620N21E11)",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

                  ]
                },
              	{
              	  "title": "Motor mounting",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [
              	    {
              	      "title": "X-Bracket",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    },
                    {
        	            "title": "6x M6 threaded boreholes",
                      "autor": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    }
                  ]
                },
              	{
              	  "title": "UVW connector (3 phases)",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

                  ]
                },
              	{
              	  "title": "90 deg coolant fittings",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

                  ]
                }
              ]
            },
            {
              "title": "Steering Assembly",
              "autor": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Steering Shaft",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Front Steering Arm",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Front Steering Arm Top Plate",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Front Steering Arm Middle Plate",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Front Steering Arm Bottom Plate",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Front Steering Arm Cable Connector",
                      "autor": "fill in author",
                      "quantity": 2,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                },
                {
                  "title": "Steering Inner Cable",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Steering Outer Cable",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Rear Steering Arm",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Rear Steering Arm Top Plate",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear Steering Arm Middle Plate",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear Steering Arm Bottom Plate",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear Steering Arm Cable Connector",
                      "autor": "fill in author",
                      "quantity": 2,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                },
                {
                  "title": "Steer Interface",
                  "autor": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Steering Screen",
                      "autor": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          "title": "Hull Modularity",
          "autor": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Modularity Beam",
              "autor": "fill in author",
              "quantity": "fill in quantity",
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            }
          ]
        },
        {
          "title": "Solar Deck",
          "autor": "fill in author",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Solar Panel",
              "autor": "fill in author",
              "quantity": "fill in quantity",
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            }
          ]
        }
      ]
    },
    {
      "title": "Front Strut Assembly",
      "autor": "Kjell and Max",
      "quantity": 2,
      "type": "Assembly",
      "deadline": "/",
      "children": [
        {
          "title": "Front Wing",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "/",
          "children": [

          ]
        },
        {
          "title": "Front Strut",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Front PU Ridderflex rubber (water resistance)",
              "autor": "fill in author",
              "quantity": 2,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Front Strut left half",
              "autor": "Max and Kjell",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Front Strut right half",
              "autor": "Max and Kjell",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            }
          ]
        },
        {
          "title": "Front strut Inner Tube",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Front angle of attack actuator",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "fill in deadline",
          "children": [

          ]
        }
      ]
    },
    {
      "title": "Rear Strut Assembly",
      "autor": "fill in author",
      "quantity": 1,
      "type": "Assembly",
      "deadline": "fill in deadline",
      "children": [
        {
          "title": "Rear Wing",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Rear Strut",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Rear PU Ridderflex rubber (water resistance)",
              "autor": "Max and Kjell",
              "quantity": 2,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Rear strut left half",
              "autor": "Max and Kjell",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Rear strut right half",
              "autor": "Max and Kjell",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Drive-train assembly",
              "autor": "Gijs van Rijen",
              "quantity": "1",
              "type": "Assembly",
              "deadline": "",
              "children": [
          	    {
                  "title": "Motor shaft",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

          	      ]
          	    },
          	    {
                  "title": "Bearings",
                  "autor": "Gijs van Rijen",
                  "quantity": "2",
                  "type": "Part",
                  "deadline": "",
                  "children": [

          	      ]
          	    },
                {
                  "title": "Bevel gear",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

          	      ]
          	    },
          	    {
                  "title": "Torque limiter",
                  "autor": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

      	          ]
          	    }
              ]
            },
            {
              "title": "Watercooling assembly",
              "autor": "Max and Kjell",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Pod gear wheel",
              "autor": "Max and Kjell",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [

              ]
            }
          ]
        },
        {
          "title": "Rear strut Angle of Attack actuator",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Rear Inner Tube",
          "autor": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Propeller Assembly",
          "autor": "Gijs van Rijen",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "",
          "children": [
            {
              "title": "Propeller",
              "autor": "Gijs van Rijen",
              "quantity": 1,
              "type": "Part",
              "deadline": "",
              "children": [

              ]
            },
            {
              "title": "Propeller shear pin",
              "autor": "Gijs van Rijen",
              "quantity": 1,
              "type": "Part",
              "deadline": "",
              "children": [

              ]
            }
          ]
        }
      ]
    }
  ]
}]

formatData(data)