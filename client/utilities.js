export function validateAnswer(answer, acroletters) {
  var acrolength = acroletters.length;
  var theAnswer = answer.replace(/(\s+)/g, " ");
  var answersplit = theAnswer.split(" ");
  var answerlength = answersplit.length;

  if (theAnswer === [""] || theAnswer === ["", ""]) {
    return 1 // answer fail code 1 ("Not feeling inspired?")
  }
  if (acrolength !== answerlength) {
    return 2  // answer fail code 2 ("Incorrect answer length...")
  }
  for (var i = 0; i < acrolength; i++) {
    if (answersplit[i][0].toUpperCase() !== acroletters[i]) {
      return 3 // answer fail code 3 ("Check your letters...")
    }
  }
  return theAnswer
}
