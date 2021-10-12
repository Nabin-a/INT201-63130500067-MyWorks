let scores = [96,85,50,60,12,32,65,49];
let passFail = scores.map((score)=>{
    if (score >= 50) {
        return 'passed';
    }
    return 'failed';
})

console.log(scores);
console.log(passFail);

let passScore = scores.filter((score) =>{
    return score >= 50;
})

console.log(passScore);

let sumScore = scores.reduce((sum, score)=>{
    return sum + score;
})

let sumScore1 = scores.reduce((sum, score) => sum + score,0);

console.log(sumScore1);
console.log(sumScore);