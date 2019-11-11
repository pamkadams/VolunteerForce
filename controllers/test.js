l
//highest demand site

let sudanUrgent = 0;
let syriaUrgent = 0;
let malaysianUrgent = 0;
let venezuelaUrgent = 0;
urgentPriority.forEach(request => {
  switch (request.location) {
    case "Sudan":
      sudanUrgent++;
      break;
    case "Syria":
      syriaUrgent++;
      break;
    case "Malyasia":
      malaysiaUrgent++;
      break;
    case "Venezuela":
      venezuelaUrgent++;
      break;
    default:
      break;
  }
  let sortUrgent = [
    ["Sudan", sudanUrgent],
    ["Syria", syriaUrgent],
    ["Malyasia", malaysianUrgent],
    ["Venezuela", venezuelaUrgent]
  ];

  
  }
 


function sortNumber(a, b) {
  return a[1] - b[1];
}); 
  sortUrgent.sort(sortNumber);
console.log(sortUrgent);


let benzUrgent = 0;
let albuterolUrgent = 0;
let fexinUrgent = 0;
let rifampUrgent = 0;
let ASMQUrgent = 0;
let NECTUrgent = 0;
let saline_bagsUrgent = 0;
let iv_suppliesUrgent = 0;
let tapeUrgent = 0;
let gauzeUrgent = 0;
let bandages_2x2Urgent = 0;
let bandages_4x4Urgent = 0;
let bandages_6x9Urgent = 0;
let aspirinUrgent = 0;
let gluscoseUrgent = 0;

let rxUrgent = [];
let msUrgent = [];

//sort the data by urgency
allRequests.forEach(request => {
  if (request.urgent) urgentPriority.push(request);
  else regularPriority.push(request);
});

//highest rx
urgentPriority.forEach(request => {
  prescriptions.forEach(rx => {
    console.log("before", request.rx);
    if (request.rx > 0) {
      console.log(reqest.rx);
      switch (request.rx) {
        case "NECT":
          NECTUrgent++;
          break;
        case "ASMQ":
          ASMQUrgent++;
          break;
        case "rifampicin":
          rifampUrgent++;
          break;
        case "Fexinidazole":
          fexinUrgent++;
          break;
        case "albuterol":
          albuterolUrgent++;
          break;
        case "benznidazole":
          benzUrgent++;
          break;
        default:
          break;
      }
    }
  });
});
rxUrgent = [
  ["benznidazole", benzUrgent],
  ["albuterol", albuterolUrgent],
  ["Fexinidazole", fexinUrgent],
  ["rifampicin", rifampUrgent],
  ["ASMQ", ASMQUrgent],
  ["NECT", NECTUrgent]
];
function sortNumber(a, b) {
  return a[1] - b[1];
}
rxUrgent.sort(sortNumber);
console.log("sortrx", rxUrgent);

 //highest demand ms
 urgentPriority.forEach(request => {
  for (let i = 0; i < medicalSupplies.length; i++) {
    if (
      request.medicalSupplies[i] === Null ||
      request.medicalSupplies[i] === undefined
    )
      request.medicalSupplies[i] = 0;
    switch (request.medicalSupplies[i]) {
      case "saline_bags":
        saline_bagsUrgent++;
        break;
      case "iv_supplies":
        iv_suppliesUrgent++;
        break;
      case "tape":
        tapeUrgent++;
        break;
      case "gauze":
        gauzeUrgent++;
        break;
      case "bandages_2x2":
        bandages_2x2Urgent++;
        break;
      case "bandages_4x4:":
        bandages_4x4Urgent++;
        break;
      case "bandages_6x9":
        bandages_6x9Urgent++;
        break;
      case "aspirin":
        aspirinUrgent++;
      case "gluscose":
        gluscoseUrgent++;
        break;
      default:
        break;
    }
  }
});
msUrgent = [
  ["saline_bags", saline_bagsUrgent],
  ["iv_supplies", iv_suppliesUrgent],
  ["tape", tapeUrgent],
  ["gauze", gauzeUrgent],
  ["bandages_2x2", bandages_2x2Urgent],
  ["bandages_4x4:", bandages_4x4Urgent],
  ["bandages_6x9", bandages_6x9Urgent],
  ["aspirin", aspirinUrgent],
  ["gluscose", gluscoseUrgent]
];


msUrgent.sort(sortNumber);
console.log("mssort", msUrgent);
//function to sort by type of urgency and supply type
const requestRatio = (arr, checkArr) => {
  let count = 0;