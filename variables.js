// var  before EC6 now it is not used - bad practise
// let can be change later in code 
// const  cannot be changed

//string
let name = "Basia";
let firstName = "Bolek";

const drugie_imie = "John";

console.log(name);
console.log(firstName);
console.log(drugie_imie);

//number

let age = 29;
console.log(typeof(firstName+age));

let myAge = 37;

console.log(typeof(age+myAge))

console.log("Wiecie ze " + name + " ma obecnie " + age + " lat");

//boolean
const isTrue = true;
const  isFalse = false;

console.log(isTrue)

//undefined

const undef =  undefined;

console.log(typeof(undef));

//array
const tablica = ["John", "Doe", "Alie"];
console.log(typeof(tablica));
console.log(tablica);
console.log(tablica[1]);

//object
const car = {
    model: "fiat",
    rocznik: 2002,
    color: "blue"
};
console.log(car);
console.log(car.color);

car.color = "yellow";

console.log(car.color);