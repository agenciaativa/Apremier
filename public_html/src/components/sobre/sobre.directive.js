(function () {
    'use strict';

    angular
        .module('app.sobre')
        .directive('tmplSobre', directiveFunction)
        .controller('SobreController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/sobre/sobre.html',
            scope: {
            },
            controller: 'SobreController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'sobreService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, sobreService) {
        var vm = this;
        var page = 'Quem Somos';
        vm.sobre = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getSobre().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getSobre() {
            return sobreService.getSobre().then(function(data) {
                vm.sobre = data;
                return vm.sobre;
            });
        }
    }

})();
