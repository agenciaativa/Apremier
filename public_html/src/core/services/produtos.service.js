(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('produtosService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api', '_'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api, _) {
        var service = {
            getProdutos: getProdutos,
            clearCache: clearCache
        };

        return service;

        /**
         * Get produtos page.
         * @return {Promise} A promise that returns data of page produtos content if resolved
         */
        function getProdutos() {
            return $http.get(api, { cache: true })
                .then(getProdutosSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getProdutos')(message);
                    $location.url('/');
                });

            function getProdutosSuccess(response) {
                var sobre = response.data.produtos;

                return sobre;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();