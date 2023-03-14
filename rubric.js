const rubricGrading = (score) => {
    if (score <= 11 && score >= 0) {
      return score === 11
        ? console.log("Perfect")
        : score > 8
        ? console.log("Excellent")
        : score >= 5
        ? console.log(true)
        : console.log(false);
    } else {
      console.log("Cheating is not working, cause the ceiling is limiting!!");
    }
  };
  
  rubricGrading(10);