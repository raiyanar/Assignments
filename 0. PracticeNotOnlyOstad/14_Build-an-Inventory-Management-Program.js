//1 (1)
let inventory = [];

//2 (2 - 5)
function findProductIndex(name) {
  let lowerName = name.toLowerCase();

  for (let i = 0; i < inventory.length; i++) {
    if (inventory[i].name.toLowerCase() === lowerName) {
      return i;
    }
  }
  return -1;
}

//3 (6 - 10)
function addProduct(prodObj) {
  const lowerName = prodObj.name.toLowerCase();
  let index = findProductIndex(lowerName);

  if (index !== -1) {
    inventory[index].quantity += prodObj.quantity;
    console.log(`${lowerName} quantity updated`);
  } else {
    inventory.push({ name: lowerName, quantity: prodObj.quantity });
    console.log(`${lowerName} added to inventory`);
  }
}
addProduct({ name: "FLOUR", quantity: 5 });

//6 (11-16)
function removeProduct(name, qty) {
  const lowerName = name.toLowerCase();
  let index = findProductIndex(lowerName);

  if (index === -1) {
    console.log(`${lowerName} not found`);
    return;
  }

  let currentQuantity = inventory[index].quantity;
  if (currentQuantity < qty) {
    console.log(
      `Not enough ${lowerName} available, remaining pieces: ${currentQuantity}`,
    );
    return;
  }

  inventory[index].quantity -= qty;
  console.log(`Remaining ${lowerName} pieces: ${inventory[index].quantity}`);

  if (inventory[index].quantity === 0) {
    inventory.splice(index, 1);
  }
}
