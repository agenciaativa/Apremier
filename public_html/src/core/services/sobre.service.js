(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('sobreService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api', '_'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api, _) {
        var service = {
            getSobre: getSobre,
            clearCache: clearCache
        };

        return service;

        /**
         * Get sobre page.
         * @return {Promise} A promise that returns data of page sobre content if resolved
         */
        function getSobre() {
            return $http.get(api, { cache: true })
                .then(getSobreSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getSobre')(message);
                    $location.url('/');
                });

            function getSobreSuccess(response) {
                var sobre = response.data.quem_somos;

                return sobre;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();