// some might have two examples like an arrow and a normal functionc

const submissions = [
    {
        name:"Jane",
        score: 95,
        date: "2020-01-24",
        passed: true
    },
    {
        name:"Joe",
        score: 77,
        date: "2018-05-14",
        passed: true
    },
    {
        name:"Jack",
        score: 59,
        date: "2019-07-25",
        passed: false
    },
    {
        name:"Jill",
        score: 88,
        date: "2020-04-22",
        passed: true
    }
];

// function addSubmission(array, newName, newScore, newDate) {
//     array.push({name: newName, score: newScore, date: newDate, passed: newScore >= 60})
// }

// // addSubmission(submissions, "Holt", 99, "2022-02-24")
// // console.log(submissions);

// const deleteSubmissionByIndex = (array, index) => {
//     array.splice(index, 1)
// }

// // deleteSubmissionByIndex(submissions, 0);
// // console.log(submissions);

// function deleteSubmissionByName (array, name) {
//     let index = array.findIndex(student => 
//         student.name === name
//     )
//     array.splice(index, 1);
// }

// // deleteSubmissionByName(submissions, "Jack");
// // console.log(submissions);

// const editSubmission = (array, index, score) => {
//     array[index].score = score;
//     array[index].passed = score >= 60;
// }

// // or const editSubmission = (array, index, score) => array[index].score = score

// editSubmission(submissions, 2, 90);
// // console.log(submissions);

// function sample (a, b) {
//     return a + b;
// }

// let sample = (a, b) => a + b;

// two above do the same thing, arrow is just neater

// sample(3,4) // 7

// function findSubmissionByName (array, name) {
//     return array.find(function(student) {
//         return student.name === name
//     })
// }

// // console.log(findSubmissionByName(submissions, "Jack"))

// const findSubmissionByName = (array, name) => {
//     array.find(student => student.name === name) 
// }

// console.log(findSubmissionByName(submissions, "Jill"));

// const findLowestScore = array => {
//     let lowestScore = 100;
//     let lowestScoreStudent;

//     array.forEach(student => {
//         // console.log(student);
//         if (student.score < lowestScore) {
//             lowestScore = student.score;
//             lowestScoreStudent = student;
//         }
//     })
//     // when the loop is done
//     return lowestScoreStudent;
// }

// console.log(findLowestScore(submissions));

// const findAverageScore = array => {
//     let total = 0;
//     for (let student of array) {
//         // console.log(student.score);
//         total += student.score;
//     }
//     return total / array.length;
// }

// console.log(findAverageScore(submissions));

// const filterPassing = (array) => array.filter(student => student.score >= 60)

// console.log(filterPassing(submissions));

// OR

// function filterPassing(array) {
//     return array.filter(function(student){
//         return student.score >= 60;
//     })
// }

// console.log(filterPassing(submissions));

// function filter90AndAbove(array) {
//     let passingGrade = array.filter(function(people) {
//         return people.score >= 90
//     })
//     return passingGrade
// }

// console.log(filter90AndAbove(submissions))

// const filter90AndAbove = array => array.filter(people => people.score >= 90)

// console.log(filter90AndAbove(submissions))



// EXTENDED

const createRange = (start, end) => {
    let answer = [];
    for (let i = start; i <= end; i++) {
        answer.push(i);
    }
    return answer;
}

console.log(createRange(7, 20));