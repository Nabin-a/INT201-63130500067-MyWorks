let per = {id: 1, name: 'Joe'};
let per2 = per;

doSometing(per2);

function doSomething(p) {
        p.name = 'Mary';
}

console.log(per);