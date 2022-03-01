// this is when i did it earlier, i ended up doing this nearly twice to learn

// let submissions = [{name: "Jane", score: 95, date: "2020-01-24", passed: true}, 
// {name: "Joe", score: 77, date: "2018-05-14", passed: true}, 
// {name: "Jack", score: 59, date:"2019-07-05", passed: false},
// {name: "Jill", score: 88, date: "2020-04-22", passed: true},
// ]

// function addSubmission(array, newName, newScore, newDate) {
//     array.push({name: newName, score: newScore, date: newDate, passed: newScore >= 60})
// }

// addSubmission(submissions, "Ringo", 81, "2022-07-07");

// // console.log(submissions);

// function deleteSubmissionByIndex(array, index) {
//     array.splice(index, 1);
// }

// // deleteSubmissionByIndex(submissions, 2);
// // console.log(submissions);

// function deleteSubmissionByName(array, name) {
//     let index = array.findIndex(function(named) {
//     return named.name === array.name;
//     })
//     array.splice(index, 1);
// }

// // deleteSubmissionByName(submissions, "Joe");

// function editSubmission(array, index, score) {
//     array[index].score = score;
//     array[index].passed = score >= 60;
// }

// // editSubmission(submissions, 2, 10);

// function findSubmissionByName(array, name) {
//     return array.find(function(named) {
//         return named.name === name;
//     });
// }

// // const findSubmissionByName = (array, name) => array.find((named) = named.name === name)

// // console.log(findSubmissionByName(submissions, "Joe"));

// function findLowestScore(array) {
//     let lowestScore = 100;
//     let lowestScorer;
//     array.forEach(function(named) {
//         if (named.score < lowestScore) {
//             lowestScore = named.score;
//             lowestScorer = named;
//         }
//     })
//     return lowestScorer;
// }

// // console.log(findLowestScore(submissions));

// function findAverageScore(array) {
//     let sum = 0;
//     for (let scorer of array) {
//         // console.log(scorer.score);
//         sum += scorer.score;
//     } 
//     return sum / array.length;
// }

// // console.log(findAverageScore(submissions));

// function filterPassing(array) {

// }


