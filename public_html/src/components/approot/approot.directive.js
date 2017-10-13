(function () {

    'use strict';

    angular.module('app.approot')
        .directive('tmplApproot', directiveFunction)
        .controller('AppRootController', ControllerFunction);


    // ----- directiveFunction -----
    directiveFunction.$inject = [];

    /* @ngInject */
    function directiveFunction() {

        var directive = {
            restrict: 'A',
            templateUrl: 'components/approot/approot.html',
            scope: {
            },
            controller: 'AppRootController',
            controllerAs: 'vm'
        };

        return directive;
    }

    // ----- ControllerFunction -----
    ControllerFunction.$inject = ['$document', 'logger', 'configService'];

    /* @ngInject */
    function ControllerFunction($document, logger, configService) {
        var vm = this;
        vm.config = null;
        vm.preloaded = null;

        activate();

        function activate() {
            return getConfig().then(function() {
                vm.preloaded = JSON.stringify(vm.config);
                logger.log('Configuration loaded sucessfully');
            });
        }

        function getConfig() {
            return configService.getConfig().then(function(data) {
                vm.config = data;
                return vm.config;
            });
        }

        function formatToJson(obj) {
            if (obj) {
                var dq = '"';
                var json = "{";
                var last = Object.keys(obj).length;
                var count = 0;
                var x = null;
                for (x in obj) {
                    json += dq + x + dq + ":" + dq + obj[x] + dq;

                    count++;
                    if (count<last)
                        json += ",";
                }
                json += "}";
                return json;
            }
        }
    }

})();
