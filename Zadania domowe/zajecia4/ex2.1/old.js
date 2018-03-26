console.log("start");
// RANGE ERROR: tablica nie może mieć -1 elementów
const anArray = new Array(-1);
anArray.push("0");
console.log(anArray);

const width = 12;
// REFERENCE ERROR
console.log(width * height);
// SYNTAX ERROR
let list = ['element 1', 'Element 2'
'Element 3'];
// TYPE ERROR
console.log(list[0].upperCase());
// RANGE ERROR: parametr musi być [0,20]
width.toFixed(30);

const user = {
  // SYNTAX ERROR
    first name: "Bartek",
    lastName: "Nowak",
    age: 25
}
// TYPE ERROR
console.log(user.age.tostring());
