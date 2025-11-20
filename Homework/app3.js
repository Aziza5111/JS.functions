const grade = function (score) {
  if (score >= 80) {
    return "A'lo";
  } else if (score >= 60 && score < 80) {
    return "Yaxshi";
  } else if (score >= 40 && score < 60) {
    return "Qoniqarli";
  } else {
    return "Qoniqarsiz";
  }
};
console.log(grade(85)); // A'lo
console.log(grade(75));
console.log(grade(50));
console.log(grade(30));
