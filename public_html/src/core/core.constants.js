(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('_', _)
        .constant('api', 'http://localhost:3000/src/api/data.json')
        .constant('$preloaded', {});
})();
