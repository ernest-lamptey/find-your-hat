const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(fieldArr){
    this.field = fieldArr
  }
  print(){
    // console.log(this.field)
    this.field.forEach(item => console.log(item.join('')));
  }
  static generateField (width, height, holes) {
    let newField = [];
    // field with fieldCharacter
    for (let i = 0; i < height; i++){
      const row = []
      for (let j = 0; j < width; j++){
        row.push(fieldCharacter)
      }
      newField.push(row)
    }
    // add random holes
    const numberOfHoles = Math.floor((holes / 100) * (width * height));
    for (let i = 0; i < numberOfHoles; i++) {
      const rand1 = Math.floor(Math.random() * height)
      const rand2 = Math.floor(Math.random() * width)
      if (rand1 === 0 && rand2 === 0) {
        continue
      } else {
        newField[rand1][rand2] = hole
      }
    }
    // add hat
    const rand1 = Math.floor(Math.random() * height)
    const rand2 = Math.floor(Math.random() * width)
    if (rand1 === 0 && rand2 === 0){
      pass
    } else {
      newField[rand1][rand2] = hat
    }
    // add starting position
    newField[0][0] = pathCharacter;
    return newField  
  }
};

const startingField = Field.generateField(15, 7, 20);
const field = new Field(startingField);

field.print();
console.log('Welcome to "Find your hat"!');
console.log(field.field[0].length)
let gameOn = true;

//gameplay
let heightPsn = 0
let widthPsn = 0
while (gameOn) {
  let choice = prompt('Which way?:');
  //checks input and increases array position
  if (choice.toLowerCase() === 'r'){
    widthPsn += 1
  } else if (choice.toLowerCase() === 'l'){
    widthPsn -= 1
  } else if (choice.toLowerCase() === 'u'){
    heightPsn -= 1
  } else if (choice.toLowerCase() === 'd'){
    heightPsn += 1
  } else {
    console.log('Enter a valid direction: "r", "l", "u" or "d".')
    continue
  }

  // checks in position is in range of game field
  if (heightPsn < 0 || widthPsn < 0 || (heightPsn > field.field.length -1) || (widthPsn > field.field[0].length - 1)){
    console.log('Out of bounds! Game over!')
    gameOn = false;
    continue
    // checks if you fell in a hole
  } else if (field.field[heightPsn][widthPsn] === hole){
    console.log('You fell in a hole! Game Over')
    gameOn = false;
    continue
    // checks if you found your hat
  } else if (field.field[heightPsn][widthPsn] === hat){
    console.log('Congratulations you found your hat!')
    gameOn = false
    continue
    // clears screen and updates location
  } else {
    //Why does this work?
    process.stdout.write('\x1Bc'); 
    field.field[heightPsn][widthPsn] = pathCharacter
    field.print()
  }
};
