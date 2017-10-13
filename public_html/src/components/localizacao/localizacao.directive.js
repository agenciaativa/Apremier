(function () {
    'use strict';

    angular
        .module('app.localizacao')
        .directive('tmplLocalizacao', directiveFunction)
        .controller('LocalizacaoController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/localizacao/localizacao.html',
            scope: {
            },
            controller: 'LocalizacaoController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$preloaded', 'Title', 'logger'];

    /* @ngInject */
    function ControllerFunction($preloaded, Title, logger) {
        var vm = this;
        var page = 'Localização';
        vm.config = $preloaded;

        activate();

        function activate() {
            Title.setTitle(page);
            logger.log('Activated ' + page + ' View');
        }

    }

})();
