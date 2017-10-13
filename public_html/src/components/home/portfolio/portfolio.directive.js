(function () {

    'use strict';

    angular.module('app.home')
        .directive('tmplPortfolioHome', directiveFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/home/portfolio/portfolio.html',
            scope: {
                slides: '='
            }
        };

        return directive;
    }

})();