(function () {
    'use strict';

    var core = angular.module('app.core');

    core.config(configFunction);

    configFunction.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /* @ngInject */
    function configFunction($locationProvider, $stateProvider, $urlRouterProvider) {

        $locationProvider.html5Mode(true);

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                template: '<div tmpl-home></div>'
            })
            .state('quem-somos', {
                url: '/quem-somos',
                template: '<div tmpl-sobre></div>'
            })
            .state('logistica', {
                url: '/logistica',
                template: '<div tmpl-logistica></div>'
            })
            .state('clientes', {
                url: '/clientes',
                template: '<div tmpl-clientes></div>'
            })
            .state('portfolio', {
                url: '/portfolio',
                template: '<div tmpl-portfolio></div>'
            })
            .state('produtos', {
                url: '/o-que-fazemos',
                template: '<div tmpl-produtos></div>'
            })
            .state('localizacao', {
                url: '/localizacao',
                template: '<div tmpl-localizacao></div>'
            })
            .state('personalizar', {
                url: '/monte-seu-produto',
                template: '<div tmpl-personalizar></div>'
            });
    }
})();
