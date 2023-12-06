let instruments = []

instruments.push("Piano")

let others_instruments = ["Guitar", "Electric guitar", "Bass guitar", "Ukelele"]; 

instruments = instruments.concat(others_instruments); 

instruments.pop() //remove the last element

instruments.splice(0,1)

const index = instruments.indexOf("Guitar")

if (index == -1) {
  console.log("Value don't find!")
} else {
  instruments.splice(index, 1)
}

instruments.splice(3,4, "Ocarina")

instruments.reverse();

instruments.sort();

console.log(instruments)