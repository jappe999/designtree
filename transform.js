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

const isDate = date => /[0-9]{2}\-[0-9]{2}\-[0-9]{2}/.test(date)

const formatDate = date => isDate(date)
  ? date.split('-').reverse().join('-')
  : ''

const formatData = (data, parentId = null) => {
  parentId = parentId ? `${parentId}/` : ''

  for (const child of data) {
    const id = `${parentId}${uuid()}`
    const children = [ ...child.children ]
    delete child['children']
    child.deadline = formatDate(child.deadline)
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
  "author": "Sven Uitendaal",
  "quantity": 1,
  "type": "Assembly",
  "deadline": "20-12-2018",
  "children": [
    {
      "title": "Hull Assembly",
      "author": "fill in author",
      "quantity": "fill in quantity",
      "type": "Assembly",
      "deadline": "fill in deadline",
      "children": [
        {
          "title": "Port Hull",
          "author": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Hull-Strut Connection Port",
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Hull-Strut Connection Port Watertight Ring",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Hull-Strut Connection Port Stiffeners",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Front Strut Port Outer Tube",
                  "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Hatch Port",
              "author": "fill in author",
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
          "author": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Hull-Strut Connection Starboard",
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Hull-Strut Connection Starboard Watertight Ring",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Hull-Strut Connection Starboard Stiffeners",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Front Strut Starboard Outer Tube",
                  "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Hatch Starboard",
              "author": "fill in author",
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
          "author": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Main Hull",
              "author": "fill in author",
              "quantity": "fill in quantity",
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Main Hull Laminate",
                  "author": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Rear Strut Outer Tube",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Rear Strut Plate",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Hull-Strut Connection Main",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Hull-Strut Connection Main Watertight Ring",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Hull-Strut Connection Main Stiffeners",
                      "author": "fill in author",
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
                  "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Circuit Breaker",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Motor Precharger",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Motor Precharge Relay",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Motor Precharge Resistor",
                      "author": "fill in author",
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
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Solar Precharge Relay",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Solar Precharge Resistor",
                      "author": "fill in author",
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
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Solar Relay",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Fuse",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "EMS",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "24 Volt",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "TDK Lambda",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Custom PCB",
                      "author": "fill in author",
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
                  "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Pack",
                  "author": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Module",
                      "author": "fill in author",
                      "quantity": "fill in quantity",
                      "type": "Assembly",
                      "deadline": "fill in deadline",
                      "children": [
                        {
                          "title": "Cell",
                          "author": "fill in author",
                          "quantity": "fill in quantity",
                          "type": "Part",
                          "deadline": "fill in deadline",
                          "children": [

                          ]
                        },
                        {
                          "title": "Nickel Foil",
                          "author": "fill in author",
                          "quantity": "fill in quantity",
                          "type": "Part",
                          "deadline": "fill in deadline",
                          "children": [

                          ]
                        },
                        {
                          "title": "PMMA",
                          "author": "fill in author",
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
                  "author": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "BMS",
                  "author": "fill in author",
                  "quantity": "fill in quantity",
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Custom PCB",
                      "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Dashboard",
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Control",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Bilge Pump Switch",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Deadmans Switch",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "24 V Switch",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Solar Panel Switch",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Control PCB",
                      "author": "fill in author",
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
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Antenna",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Modem",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Development Board",
                      "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Strategy Screen",
                  "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Maintenance Screen",
                  "author": "fill in author",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Logger",
              "author": "fill in author",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Motor Assembly",
              "author": "Gijs van Rijen",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "",
              "children": [
                {
                  "title": "Motor",
                  "author": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [
	                  {
                      "title": "Front bearing (FAG 6204)",
                      "author": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear bearing (FAG 3204)",
                      "author": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

   	                  ]
              	    },
              	    {
              	      "title": "Stator",
                      "author": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

               	      ]
                	  },
              	    {
              	      "title": "Rotor",
                      "author": "Gijs van Rijen",
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
                  "author": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [
              	    {
              	      "title": "Flanged shaft with inner splines",
                      "author": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    },
                    {
  	                  "title": "6x M6 threaded boreholes",
                      "author": "Gijs van Rijen",
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
                  "author": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

                  ]
                },
              	{
              	  "title": "Motor mounting",
                  "author": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [
              	    {
              	      "title": "X-Bracket",
                      "author": "Gijs van Rijen",
                      "quantity": "1",
                      "type": "Part",
                      "deadline": "",
                      "children": [

                      ]
                    },
                    {
        	            "title": "6x M6 threaded boreholes",
                      "author": "Gijs van Rijen",
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
                  "author": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

                  ]
                },
              	{
              	  "title": "90 deg coolant fittings",
                  "author": "Gijs van Rijen",
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
              "author": "fill in author",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [
                {
                  "title": "Steering Shaft",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Front Steering Arm",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Front Steering Arm Top Plate",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Front Steering Arm Middle Plate",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Front Steering Arm Bottom Plate",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Front Steering Arm Cable Connector",
                      "author": "fill in author",
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
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Steering Outer Cable",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Part",
                  "deadline": "fill in deadline",
                  "children": [

                  ]
                },
                {
                  "title": "Rear Steering Arm",
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Rear Steering Arm Top Plate",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear Steering Arm Middle Plate",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear Steering Arm Bottom Plate",
                      "author": "fill in author",
                      "quantity": 1,
                      "type": "Part",
                      "deadline": "fill in deadline",
                      "children": [

                      ]
                    },
                    {
                      "title": "Rear Steering Arm Cable Connector",
                      "author": "fill in author",
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
                  "author": "fill in author",
                  "quantity": 1,
                  "type": "Assembly",
                  "deadline": "fill in deadline",
                  "children": [
                    {
                      "title": "Steering Screen",
                      "author": "fill in author",
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
          "author": "fill in author",
          "quantity": "fill in quantity",
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Modularity Beam",
              "author": "fill in author",
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
          "author": "fill in author",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Solar Panel",
              "author": "fill in author",
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
      "author": "Kjell and Max",
      "quantity": 2,
      "type": "Assembly",
      "deadline": "/",
      "children": [
        {
          "title": "Front Wing",
          "author": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "/",
          "children": [

          ]
        },
        {
          "title": "Front Strut",
          "author": "Max and Kjell",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Front PU Ridderflex rubber (water resistance)",
              "author": "fill in author",
              "quantity": 2,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Front Strut left half",
              "author": "Max and Kjell",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Front Strut right half",
              "author": "Max and Kjell",
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
          "author": "Max and Kjell",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Front angle of attack actuator",
          "author": "Max and Kjell",
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
      "author": "fill in author",
      "quantity": 1,
      "type": "Assembly",
      "deadline": "fill in deadline",
      "children": [
        {
          "title": "Rear Wing",
          "author": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Rear Strut",
          "author": "Max and Kjell",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "fill in deadline",
          "children": [
            {
              "title": "Rear PU Ridderflex rubber (water resistance)",
              "author": "Max and Kjell",
              "quantity": 2,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Rear strut left half",
              "author": "Max and Kjell",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Rear strut right half",
              "author": "Max and Kjell",
              "quantity": 1,
              "type": "Part",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Drive-train assembly",
              "author": "Gijs van Rijen",
              "quantity": "1",
              "type": "Assembly",
              "deadline": "",
              "children": [
          	    {
                  "title": "Motor shaft",
                  "author": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

          	      ]
          	    },
          	    {
                  "title": "Bearings",
                  "author": "Gijs van Rijen",
                  "quantity": "2",
                  "type": "Part",
                  "deadline": "",
                  "children": [

          	      ]
          	    },
                {
                  "title": "Bevel gear",
                  "author": "Gijs van Rijen",
                  "quantity": "1",
                  "type": "Part",
                  "deadline": "",
                  "children": [

          	      ]
          	    },
          	    {
                  "title": "Torque limiter",
                  "author": "Gijs van Rijen",
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
              "author": "Max and Kjell",
              "quantity": 1,
              "type": "Assembly",
              "deadline": "fill in deadline",
              "children": [

              ]
            },
            {
              "title": "Pod gear wheel",
              "author": "Max and Kjell",
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
          "author": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Rear Inner Tube",
          "author": "Max and Kjell",
          "quantity": 1,
          "type": "Part",
          "deadline": "fill in deadline",
          "children": [

          ]
        },
        {
          "title": "Propeller Assembly",
          "author": "Gijs van Rijen",
          "quantity": 1,
          "type": "Assembly",
          "deadline": "",
          "children": [
            {
              "title": "Propeller",
              "author": "Gijs van Rijen",
              "quantity": 1,
              "type": "Part",
              "deadline": "",
              "children": [

              ]
            },
            {
              "title": "Propeller shear pin",
              "author": "Gijs van Rijen",
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