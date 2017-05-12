myApp.service('HighFiveService', function() {
  console.log('HighFiveService loaded');

  var counter = 0;

  // function that returns a random number
  this.randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  // two functions
  // one to increment
  // get count

});
