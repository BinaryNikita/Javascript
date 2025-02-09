let animal =  {
    eat: function (){
        console.log("Eating");
    }
}

let dog = {
    bark: function (){
        console.log("barking");
    }
}

dog.__proto__ = animal;
dog.eat();