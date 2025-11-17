// custom object
const person = {
  name: ["bob", "smith"],
  age: 32,
  gender: "male",
  interests: ["music", "skiing"],
  greeting: function () {
    console.log(`Hi!!! I'm ${this.name[0]}`);
  },
};

console.log(person); //  whole information printed out
console.log(person.name); // [ 'bob', 'smith' ]
console.log(person.name[1]); // smith
console.log(person.age); // 32
person.greeting(); // Hi!!! I'm bob

// // new example
// tv
const tv = new Object();
tv.color = "red";
tv.power = true;
tv.volume = 13;
tv.info = function () {
  console.log("color " + this.color);
  console.log("power " + this.power);
  console.log("volume " + this.volume);
};

console.log(tv); // { color: 'red', power: true, volume: 13, info: [Function (anonymous)] }

// // new example
// person
// Change the value of object
person.age = 40;
console.log(person.age);
person.farewell = function() {
    console.log("bye");
};
person.farewell(); // bye
// question. why do you put () next to farewell? 

// // Deep Copy, Shallow Copy
// Shallow Copy
const person2 = person;

// Modify original
person.name[0] = "tomato";
console.log("After Change of person name ", person.name); // After Change of person name  [ 'tomato', 'smith' ]
console.log(person2.name); // [ 'tomato', 'smith' ]

// Deep Copy
const person3 = {...person, name: [...person.name], interests:[...person.interests]};
person.name[0] = "bob";
person.interests[0] = "book";
console.log("After Change of person name ", person.name); 
console.log("After Change of person interests ", person.interests); 
console.log(person3.name);
console.log(person3.interests);

// If Array copied, then it must be shallow copied.
// name, interest have to use ... 