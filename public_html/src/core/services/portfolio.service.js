(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('portfolioService', serviceFunction);

    serviceFunction.$inject = ['$http', '$location', '$cacheFactory', 'exception', 'api', '_'];

    /* @ngInject */
    function serviceFunction($http, $location, $cacheFactory, exception, api, _) {
        var service = {
            getPortfolio: getPortfolio,
            clearCache: clearCache
        };

        return service;

        /**
         * Get portfolio page.
         * @return {Promise} A promise that returns data of page portfolio content if resolved
         */
        function getPortfolio() {
            return $http.get(api, { cache: true })
                .then(getPortfolioSuccess)
                .catch(function(message) {
                    exception.catcher('XHR Failed for getPortfolio')(message);
                    $location.url('/');
                });

            function getPortfolioSuccess(response) {
                var portfolio = response.data.portfolio;

                return portfolio;
            }
        }

        function clearCache() {
            var cache = $cacheFactory.get('$http');
            cache.remove(api);
        }
    }
})();