// const cart = [54, 56, 151, 235, 845, 12, 5, 100];
// const cart1 = [213, 12, 4235, 656, 775, 89, 999]

// const calculateTotalPrice = function (items) {
//     let total = 0;

//     for (const item of items) {
//         total += item;
//     }

//     return total;
// }

// console.log(`Общая сумма покупок:`, calculateTotalPrice(cart));
// console.log(`Общая сумма покупок:`, calculateTotalPrice(cart1));


// Home Task

const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Dragon breath", price: 780 },
    { name: "Stone skin", price: 520 },
  ],
  // Change code below this line
  getPotions() {
    return this.potions;
  },
  addPotion(newPotion) {
    for (const potion of this.potions) {
      if (potion.name === newPotion.name) {
      return `Error! Potion ${newPotion} is already in your inventory!`;
      }
    }
    this.potions.push(newPotion);
  },
  removePotion(potionName) {
    let potionIndex = -1;
    for (let i = 0; this.potions.length; i++){
      if (this.potions[i].name === potionName) {
        potionIndex = i;
        break;
      }
    }

    if (potionIndex === -1) {
      return `Potion ${potionName} is not in inventory!`;
    }

    this.potions.splice(potionIndex, 1);
  },
  updatePotionName(oldName, newName) {
    // const potionIndex = this.potions.indexOf(oldName);
    // for (const potion of this.potions){
    //    if (potion.name === oldName) {
    //      this.potions.splice(potionIndex, 1, newName);
    //    }
    // }
    
    // if (potionIndex === -1) {
    //   return `Potion ${oldName} is not in inventory!`;
    // }
    

    this.potions.splice(this.potions.indexOf(oldName), 1, newName);
  },
  // Change code above this line
};


console.log(atTheOldToad.updatePotionName("Dragon breath", "Polymorth"))
console.log(atTheOldToad.updatePotionName("Stone skin", "Invulnerability potion"))