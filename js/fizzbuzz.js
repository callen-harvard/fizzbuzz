function fizzBuzz(N) {
  for (var index = 1; index <= N; index++) {
    if (index % 3 == 0 && index % 5 == 0) {
      $(".container").append("<p>FizzBuzz</p>");
    }
    else if (index % 3 == 0) {
      $(".container").append("<p>Fizz</p>");
    }
    else if (index % 5 == 0) {
      $(".container").append("<p>Buzz</p>");
    }
    else {
      $(".container").append("<p>" + index + "</p>");
    }
  }
}
