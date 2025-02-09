let animal =  {
    eat: function (){
        console.log("eating");
    }
}

let dog = {
    bark: function (){
        console.log("barking");
    }
}

dog.__proto__ = animal;

let puppy = {
    cry: function (){
        console.log("crying");
    }
}
puppy.__proto__ = dog;
puppy.bark();
puppy.cry();
puppy.eat();