function Animal(name){
    this.name = name;
}

Animal.prototype.eat = function () {
    console.log(`${this.name} is eating.`);
}

let dog = new Animal("Dog");
dog.eat();