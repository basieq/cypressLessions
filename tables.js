const names = ["John", "Alice", "Ross"," Rachel"];

console.log(names.length > 2);

console.log(names[3]);

//overwritting values in tables

names[0]="Phoebe"

console.log(names)


//adding value to table at the end of the table

names.push("Chandler")
console.log(names)

//deleting values from end of the table

names.pop();
names.pop();
console.log(names)

//deleting value from the beggining of the table

names.shift();
console.log(names)  

//adding value at the begginig of the table
names.unshift("Monica");
console.log(names);

//delete defined value from table

const index_el = names.indexOf("Alice"); //find index of  and element 
console.log(index_el);
names.splice(index_el, 1); // how much element from the indext we have to delete 
console.log(names)

//convert table into string
const string_table = names.join(", "); //separator (", ")
console.log(string_table);