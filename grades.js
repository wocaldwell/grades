var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

//Operation to tally the letter grades of student
var letterA = 0;
var letterB = 0;
var letterC = 0;
var letterD = 0;
var letterF = 0;

for (var i = 0; i < scores.length; i++) {
    if (scores[i] >= 50 && scores[i] <= 60) {
        letterF += 1;
    } else if (scores[i] >= 61 && scores[i] <= 70) {
        letterD += 1;
    } else if (scores[i] >= 71 && scores[i] <= 80) {
        letterC += 1;
    } else if (scores[i] >= 81 && scores[i] <= 90) {
        letterB += 1;
    } else {
        letterA += 1;
    }
}
console.log("This student scored " + letterA + " A, " + letterB + " B, " + letterC + " C, " + letterD + " D and " + letterF + " F grades.");

//Operation to find the lowest grade
var lowestGrade = 100; // start with the maximum value for grade

function findLowestGrade() {
    if (scores.length === 0) { // make sure the are grades, if not the output would be incorrect (100)
        return " No grades to evaluate.";
    } else {
        for (var i = 0; i < scores.length; i++) {
            if (scores[i] < lowestGrade) {
                lowestGrade = scores[i]; // if a lower grade is found update value
            }
        }
    }
    return lowestGrade;
}

console.log("This student's lowest grade is: " + findLowestGrade());

//Operation to find the Highest grade
var highestGrade = 50; // start with the minimum value for grade

function findHighestGrade() {
    if (scores.length === 0) { // make sure the are grades, if not the output would be incorrect (50)
        return " No grades to evaluate.";
    } else {
        for (var i = 0; i < scores.length; i++) {
            if (scores[i] > highestGrade) {
                highestGrade = scores[i]; // if a higher grade is found update value
            }
        }
    }
    return highestGrade;
}

console.log("This student's highest grade is: " + findHighestGrade());








