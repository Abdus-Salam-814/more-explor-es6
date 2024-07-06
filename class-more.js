class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Mammal extends Animal {
    constructor(name, hasFur) {
      super(name);
      this.hasFur = hasFur;
    }
  
    describe() {
      console.log(`${this.name} is a mammal and it ${this.hasFur ? 'has' : 'does not have'} fur.`);
    }
  }
  
  class Dog extends Mammal {
    constructor(name, breed, hasFur) {
      super(name, hasFur);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name} the ${this.breed} barks.`);
    }
  
    describe() {
      super.describe(); // Calls the describe method of the parent class (Mammal)
      console.log(`${this.name} is specifically a ${this.breed}.`);
    }
  }
  
  class Puppy extends Dog {
    constructor(name, breed, hasFur, age) {
      super(name, breed, hasFur);
      this.age = age;
    }
  
    speak() {
      super.speak(); // Calls the speak method of the parent class (Dog)
      console.log(`It's a young puppy.`);
    }
  
    describe() {
      super.describe(); // Calls the describe method of the parent class (Dog)
      console.log(`${this.name} is a ${this.age} months old puppy.`);
    }
  }
  
  const puppy1 = new Puppy('Buddy', 'Labrador', true, 3);
  puppy1.speak();
  // Output: 
  // Buddy the Labrador barks.
  // It's a young puppy.
  
  puppy1.describe();
  // Output: 
  // Buddy is a mammal and it has fur.
  // Buddy is specifically a Labrador.
  // Buddy is a 3 months old puppy.
  