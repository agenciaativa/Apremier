(function () {

    'use strict';

    angular.module('app.logistica')
        .directive('tmplLogistica', directiveFunction)
        .controller('LogisticaController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/logistica/logistica.html',
            scope: {
            },
            controller: 'LogisticaController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'logisticaService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, logisticaService) {
        var vm = this;
        var page = 'Logística';
        vm.logistica = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getLogistica().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getLogistica() {
            return logisticaService.getLogistica().then(function(data) {
                vm.logistica = data;
                return vm.logistica;
            });
        }
    }

})();
