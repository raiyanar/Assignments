const pantry = [
  {
    sku: "A10",
    name: "Tomatoes",
    qty: 4,
    expires: "2027-01-01",
    zone: "fridge",
  },
  {
    sku: "D43",
    name: "Pineapples",
    qty: 2,
    expires: "2020-01-01",
    zone: "general",
  },
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge",
];

function parseShipment(rawData) {
  let parts = [];
  let seenSku = [];
  for (let i = 0; i < rawData.length; i++) {
    let output = rawData[i].split("|");

    if (seenSku.includes(output[0])) {
      continue;
    } else {
      seenSku.push(output[0]);
      parts.push({
        sku: output[0],
        name: output[1],
        qty: Number(output[2]),
        expires: output[3],
        zone: output[4] || "general",
      });
    }
  }

  return parts;
}

// console.log(parseShipment(rawData));
let shipment = parseShipment(rawData);

function planRestock(pantry, shipment) {
  let arr = [];

  let pantrySku = [];
  for (let i = 0; i < pantry.length; i++) {
    pantrySku.push(pantry[i].sku);
  }

  for (let i = 0; i < shipment.length; i++) {
    if (shipment[i].qty <= 0) {
      arr.push({
        type: "discard",
        item: shipment[i],
      });
    } else if (pantrySku.includes(shipment[i].sku)) {
      arr.push({
        type: "restock",
        item: shipment[i],
      });
    } else if (!pantrySku.includes(shipment[i].sku)) {
      arr.push({
        type: "donate",
        item: shipment[i],
      });
    }
  }
  return arr;
}

// console.log(planRestock(pantry, shipment));
let actions = planRestock(pantry, shipment);

function groupByZone(actions) {
  let obj = {};

  for (let i = 0; i < actions.length; i++) {
    let zone = actions[i].item.zone;

    if (!obj.hasOwnProperty(zone)) {
      obj[zone] = [];
    }
    obj[zone].push(actions[i]);
  }

  return obj;
}

console.log(groupByZone(actions));

function clonePantry(pantry) {
  return structuredClone(pantry);
}
console.log(clonePantry(pantry));
