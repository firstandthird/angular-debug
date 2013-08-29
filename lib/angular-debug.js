(function(w) {
  var debug = w.debug.noConflict();

  angular.module('debug', [])
    .factory('debug', function() {
      return debug;
    });
})(window);
