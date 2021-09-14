let per1 = { id: 1, name: 'Joe' };
let per2 = per1;
doSomething(per2);

function doSomething(p) {
    p.name = 'Mary';
}
console.log(per1);