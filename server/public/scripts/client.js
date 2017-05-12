console.log('test');

var myApp = angular.module('myApp', []);

myApp.controller('HighFiveController', function(HighFiveService) {
  console.log('HighFiveController loaded');
  var vm = this;
  vm.test = 'here is a thing';

  var randomNumber = HighFiveService.randomNumber(1, 10);
  console.log('here is randomNumber ->', randomNumber);
  vm.skill = randomNumber;

  vm.getHighFiveQual = function() {
    // get another randomNumber
    // compare to the skill
    // possible update the counter
  }

});
