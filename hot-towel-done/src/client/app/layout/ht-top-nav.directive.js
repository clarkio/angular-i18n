(function() {
    'use strict';

    angular
        .module('app.layout')
        .directive('htTopNav', htTopNav);

    /* @ngInject */
    function htTopNav () {
        var directive = {
            bindToController: true,
            controller: TopNavController,
            controllerAs: 'vm',
            restrict: 'EA',
            scope: {
                'navline': '=',
                'author': '='
            },
            templateUrl: 'app/layout/ht-top-nav.html'
        };

        /* @ngInject */
        function TopNavController($translate) {
            var vm = this;
            vm.changeLanguage = changeLanguage;

            function changeLanguage(langKey) {
                $translate.use(langKey);
            }
        }

        return directive;
    }
})();
