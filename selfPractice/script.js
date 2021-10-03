function  PlayerConstructor(firstName, lastName, Sex) {
    this._firstName = firstName;
    this._lastName = lastName;
    if (Sex === 'F') {
        this.title = 'MS'
    }
    this.title = 'MR';
}

let p1 = new Player('av','M','F');
console.log(p1);



