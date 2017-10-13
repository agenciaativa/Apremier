(function () {

    'use strict';

    angular.module('app.produtos')
        .directive('tmplProdutos', directiveFunction)
        .controller('ProdutosController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/produtos/produtos.html',
            scope: {
            },
            controller: 'ProdutosController',
            controllerAs: 'vm'
        };

        return directive;
    }


    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['Title', 'logger', 'produtosService'];

    /* @ngInject */
    function ControllerFunction(Title, logger, produtosService) {
        var vm = this;
        var page = 'O Que Fazemos';
        vm.produtos = null;

        activate();

        function activate() {
            Title.setTitle(page);
            return getProdutos().then(function() {
                logger.log('Activated ' + page + ' View');
            });
        }

        function getProdutos() {
            return produtosService.getProdutos().then(function(data) {
                vm.produtos = data;
                return vm.produtos;
            });
        }
    }

})();
