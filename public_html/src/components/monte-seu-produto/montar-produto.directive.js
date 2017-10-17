(function () {

    'use strict';

    angular.module('app.personalizar')
        .directive('tmplPersonalizar', directiveFunction)
        .controller('PersonalizarController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/monte-seu-produto/montar-produto.html',
            scope: {
            },
            controller: 'PersonalizarController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger'];

    /* @ngInject */
    function ControllerFunction(Title, logger) {
        var vm = this;
        var page = 'Monte Seu Produto';
        vm.checked = "sacola";
        vm.embalagem = {
            qtd_cores: 1,
            quantidade: 1
        };

        vm.add = add;
        vm.sub = sub;

        activate();

        function activate() {
            Title.setTitle(page);
            logger.log('Activated ' + page + ' View');
        }

        function sub() {
            var qtd = vm.embalagem.quantidade;

            if (!qtd)
                qtd = 1;
            else
                if (--qtd < 1)
                    qtd = 1;

            vm.embalagem.quantidade = qtd;
        }

        function add() {
            var qtd = vm.embalagem.quantidade;

            if (!qtd)
                qtd = 1;
            else
                qtd++;

            vm.embalagem.quantidade = qtd;
        }

    }

})();
