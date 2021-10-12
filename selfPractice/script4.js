let greeting = 'hello';
let someone = 'Nabin';

const say = (sentence) => {
    // local scope sentence, word
    // greeting = 'Hi'; //free variable
    let word = 'Good bye';
    // console.log(`${greeting} ${someone}`);
    // console.log(`${sentence}`);
    console.log(`$${sentence} ${word}`);
}

// let num = 10;

// console.log(word);
say('Today is Tuesday');
// pure function 
//non-pure function
someone = 'Yamin Ameenee'
say('Today is Tuesday'); 