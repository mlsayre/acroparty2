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

export function timer(seconds, container) {
  $("." + container).text(":" + seconds);
  $("." + container).css("display", "inline-block");

  setTimeout(function() {
    var count = seconds;
    var counter = setInterval(tock, 1000);

    function tock() {
      count=count-1;
      if (count <= 0) {
         clearInterval(counter);
         playtimerflag = "notrunning"
         return;
      }

      $("." + container).text(":" + count);
      if (count < 6) {
        $("." + container).css("color", "red");
      }
    }
  }, 4000);
}

$.fn.animateRotate = function(angle, duration, easing, complete) {
  var args = $.speed(duration, easing, complete);
  var step = args.step;
  return this.each(function(i, e) {
    args.complete = $.proxy(args.complete, e);
    args.step = function(now) {
      $.style(e, 'transform', 'rotateY(' + now + 'deg)');
      if (step) return step.apply(e, arguments);
    };

    $({deg: 0}).animate({deg: angle}, args);
  });
};
