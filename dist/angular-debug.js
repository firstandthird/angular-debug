/*!
 * angular-debug - Angular logging service
 * v0.1.0
 * https://github.com/firstandthird/angular-debug
 * copyright First + Third 2013
 * MIT License
*/
(function(w) {
  var debug = w.debug.noConflict();

  angular.module('debug', [])
    .factory('debug', function() {
      return debug;
    });
})(window);
