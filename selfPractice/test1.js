let person = {}; // let person = new Object();
console.log(typeof person)
person.id = 12345678;
person.name = Mack;
console.log(person);
person.email = 'mack@gmail.com';
console.log(person);
delete person.email;
console.log(person)