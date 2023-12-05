const pets = ["dog", "cat", "parrot", "hamster"];

let pet_i3 = pets[3]

console.log("Item of index 3: " + pet_i3); 

let numberItems = pets.length; 

let sum = 0; sum

for (let i = 0; i < numberItems; i++) {
  let pet = pets[i]; 
  sum += pet;
}

const media = sum / numberItems;

pets.reverse();
