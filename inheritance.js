Function.prototype.inherits = function (ParentClass) {
  var Surrogate = function() {};
  Surrogate.prototype = ParentClass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
};

function Animal (name) {
  this.name = name;
}

Dog.inherits(Animal);
function Dog (name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}

Animal.prototype.sayHello = function () {
  console.log("Hello, my name is " + this.name);
};

Dog.prototype.sayBreed = function() {
  console.log("I'm a " + this.breed + "!");
};

// var a = new Animal('Bob Johnson');
// var d = new Dog('Blast Thickneck', 'Doberman');
//
// a.sayHello();
// d.sayHello();
// d.sayBreed();
