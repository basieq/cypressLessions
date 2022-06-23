//functions in js

function first_one (){
    return console.log("my first function")
}

first_one();


// another ways of functions cannot be executed before it initialization

const second_one = () => {
    return console.log("My second function")
}

second_one();


// next exercise 

function add_num() {
    const adding = 2+5
    return console.log("another day another exercise " + adding)
}

add_num()


//parameter in functions

function with_params(value1, value2) {
    const results = value1 + value2;
    return console.log(results)
}

with_params (10, 20)