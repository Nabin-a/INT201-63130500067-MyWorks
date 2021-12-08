import subjects2 from "./subjects.js";
let subjects = [
    {id: "INT201", credit: 2,grade: 2.5},
    {id: "INT202", credit: 3,grade: 2},
    {id: "INT207", credit: 3,grade: 3},
    {id: "INT214", credit: 3,grade: 3},
    {id: "INT205", credit: 3,grade: 1.5},
    {id: "GEN231", credit: 2,grade: 4},
    {id: "LNG202", credit: 1,grade: 4}
]

// function scoreLevel(subject) {
//         return subject.credit * subject.grade;
// }

function  avgGrade() {
    let sumScore = 0
    let sumCredit = 0
       for (let i = 0; i < subjects.length; i++) {
            sumScore += scoreLevel
       }
       for (let i = 0; i < subjects.length; i++) {
           sumCredit += subjects[i].credit
           
       }
    const avg = sumScore/sumCredit
    return avg
}

function allTermAvg(subject) {
}

function checkGrade(point) {
        
}

function  checkStatus(params) {
    
}

subjects.forEach((subject) => console.log(scoreLevel(subject)));

console.log(avgGrade());

subjects2.forEach((subject) => console.log(subject));