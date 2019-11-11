let location = [
  {
    foo: {
      location: "Sudan",
      lastName: "Venturi",
      firstName: "Josh",
      phone: "555-555-5555",
      date: null,
      urgent: false,
      saline_bags: null,
      iv_supplies: null,
      tape: null,
      gauze: null,
      bandages_2x2: null,
      bandages_4x4: null,
      bandages_6x9: null,
      benznidazole: null,
      aspirin: null,
      gluscose: null,
      albuterol: null,
      Fexinidazole: null,
      rifampicin: null,
      ASMQ: null,
      NECT: null
    }
  },

  {
    
  }
];
let site = [
    {name: 'WorldWide',
    requests: [{
        location: "Sudan",
        lastName: "Venturi",
        firstName: "Josh",
        phone: "555-555-5555",
        date: null,
        urgent: false,
        saline_bags: 1,
        iv_supplies: null,
        tape: null,
        gauze: 1,
        bandages_2x2: null,
        bandages_4x4: null,
        bandages_6x9: null,
        benznidazole: null,
        aspirin: null,
        gluscose: null,
        albuterol: null,
        Fexinidazole: 1,
        rifampicin: 14,
        ASMQ: null,
        NECT: null},{
        location: "Syria",
        lastName: "Venturi",
        firstName: "Josh",
        phone: "555-555-5555",
        date: null,
        urgent: true,
        saline_bags: null,
        iv_supplies: 1,
        tape: null,
        gauze: null,
        bandages_2x2: null,
        bandages_4x4: null,
        bandages_6x9: null,
        benznidazole: null,
        aspirin: 1,
        gluscose: null,
        albuterol: null,
        Fexinidazole: null,
        rifampicin: 1,
        ASMQ: null,
        NECT: null}]},
    {name: 'Sudan',
    requests: [{
        location: "Sudan",
        lastName: "Venturi",
        firstName: "Josh",
        phone: "555-555-5555",
        date: null,
        urgent: false,
        saline_bags: null,
        iv_supplies: null,
        tape: null,
        gauze: null,
        bandages_2x2: null,
        bandages_4x4: null,
        bandages_6x9: null,
        benznidazole: null,
        aspirin: null,
        gluscose: null,
        albuterol: null,
        Fexinidazole: null,
        rifampicin: null,
        ASMQ: null,
        NECT: null
      }]},
    {name: 'Syria',
    requests: [ {
        location: "Syria",
        lastName: "Venturi",
        firstName: "Josh",
        phone: "555-555-5555",
        date: null,
        urgent: true,
        saline_bags: null,
        iv_supplies: null,
        tape: null,
        gauze: null,
        bandages_2x2: null,
        bandages_4x4: null,
        bandages_6x9: null,
        benznidazole: null,
        aspirin: null,
        gluscose: null,
        albuterol: null,
        Fexinidazole: null,
        rifampicin: null,
        ASMQ: null,
        NECT: null
      }]},
    {name: 'Malaysia',
    requests: []},
    {name: 'Venezuela',
    requests: []}
  ];
let count = location.reduce((acc, site) => {
  return site.foo.urgent ? acc : acc + 1;
}, 0);
console.log(count);

//get data organized by site for reporting criteria


      let medicalSupplies = [
        "saline_bags",
        "iv_supplies",
        "tape",
        "gauze",
        "bandages_2x2",
        "bandages_4x4:",
        "bandages_6x9",
        "aspirin",
        "gluscose"
      ];
      let prescriptions = [
        "benznidazole",
        "albuterol",
        "Fexinidazole",
        "rifampicin",
        "ASMQ",
        "NECT"
      ];

}

//1. build urgentcount function

//2. build item count function

//3.loop through prescriptions
    //loop through sites and call item count and then count the item in each one returning the qty to the site 
    
    prescriptions.forEach(item=>{
        site.forEach(site=>{
            site.results.item = sumQty(item, site) 
        })
        let sumQty = (item, arr) 
    })
    
    // site[i].requests.urgent = site.reduce((acc, location) => {
    //     return site[i].requests.urgent ? acc : acc + 1;
    //   }, 0);
    //   let count = location.reduce((acc, site) => {
    //     return site.foo.urgent ? acc : acc + 1;
    //   }, 0);
      
      let item = site[i].request.medicalSupply[j];
      let arr = site[i].requests;
      sumQty(item, arr)
      sumQty = (item, arr)=>{
          let sum = location.reduce((acc, val) => {
            return acc + val.item;
          }, 0);
        
          medicalSupplies.forEach(item=>{
              sumQty(item, site[i]ffds
                )
          })