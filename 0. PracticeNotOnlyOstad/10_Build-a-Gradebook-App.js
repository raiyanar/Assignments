function getAverage(arr) {
  let added = 0;
  for (let i = 0; i < arr.length; i++) {
    added += arr[i];
  }
  let avg = added / arr.length;
  return avg;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));

function getGrade(stuScore) {
  if (stuScore === 100) {
    return "A+";
  } else if (stuScore >= 90 && stuScore <= 99) {
    return "A";
  } else if (stuScore >= 80 && stuScore <= 89) {
    return "B";
  } else if (stuScore >= 70 && stuScore <= 79) {
    return "C";
  } else if (stuScore >= 60 && stuScore <= 69) {
    return "D";
  } else if (stuScore >= 0 && stuScore <= 59) {
    return "F";
  }
}

console.log(getGrade(60));

function hasPassingGrade(stuScore) {
  if (!(getGrade(stuScore) === "F")) {
    return true;
  } else {
    return false;
  }
}

console.log(hasPassingGrade(3));

function studentMsg(arrOfScores, stuScore) {
  let avg = getAverage(arrOfScores);
  let grade = getGrade(stuScore);
  let isPassed = hasPassingGrade(stuScore);
  if (isPassed) {
    return `Class average: ${avg}. Your grade: ${grade}. You passed the course.`;
  } else {
    return `Class average: ${avg}. Your grade: ${grade}. You failed the course.`;
  }
}

console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37));
