angular.module('example-app', ['debug']);

var MainController = function($scope, debug) {

  var log = debug('main');
  log('test log');


};
