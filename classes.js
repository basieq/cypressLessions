class Successfull {
   lastText() {
    return console.log("Thank you for your patience")
   }
}
class  Calculation extends Successfull {  //inheritance
    get text() 
    {
        return "Your calculations are: "
    }
    get communicate() 
    {
        return "Your number is less than 10"
    }

    adding ()
    {
        return 2+6
    }

    multiplication () 
    {
        return 2*6
    }

    endResult(results)
    {
        console.log(this.text + " " + results)
        if (results < 10) {
            console.log(this.communicate)
        }
    }

}



const doCalculation = new Calculation();
//console.log(doCalculation.text);
//console.log(doCalculation.communicate);

//console.log(doCalculation.adding());
//console.log(doCalculation.multiplication());

console.log(doCalculation.endResult(doCalculation.adding()));
console.log(doCalculation.endResult(doCalculation.multiplication()));

//inheritance

console.log(doCalculation.lastText());

//
class PrintNAme {
constructor(surname, surname2) {
    this.givenSurname = surname;
    this.givenSurname2 = surname2;
}
 
    lastText() {
     return console.log("Thank you for your patience " +  this.givenSurname + " and " + this.givenSurname2 )
    }
 }

 const renderSurname = new PrintNAme("Johnson", "Wild");
 console.log(renderSurname.lastText());
