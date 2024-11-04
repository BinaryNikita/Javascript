let car = {
    name: "toyata",
    model: "camry",
    year:2002,
    start: function(){
        console.log("The car has started");
    }

}

car.start();

let person = new Object();
person.name = "nikita";
person.age = 21;
console.log(person);


let user = {
    name: "Nikita",
    greet: function(){
        console.log("Welcome back, " + this.name);
    }
}

user.greet();

console.log(this);



//this in nested function

