// let person = {}; // let person = new Object();
// console.log(typeof person)
// person.id = 12345678;
// person.name = Mack;
// console.log(person);
// person.email = 'mack@gmail.com';
// console.log(person);
// delete person.email;
// console.log(person)

class Person {

    constructor(id, name) {
        if (id.length != 13)
            this_id = 'unknown';
        this._id = id; 
        this._name = name;
    }

    //getter
    get id() {
        return this._id;
    }

    //setter
    set id(id) {
        this._id = id;
    }

    //method
    getPersonIdLength() {
        return this._id.length;
    }
}

let per1 = new Person('1234567890123', 'SomSri');
console.log(per1);
console.log(per1.getPersonIdLength());
