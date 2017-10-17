(function() {
    'use strict';

    angular.module('app', [
        // Common (everybody has access to these)
        'app.core',

        // Features (listed alphabetically)
        'app.approot',
        'app.banner',
        'app.clientes',
        'app.footer',
        'app.home',
        'app.localizacao',
        'app.logistica',
        'app.personalizar',
        'app.portfolio',
        'app.produtos',
        'app.sobre',
        'app.topnav'
    ]);
})();
