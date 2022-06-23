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