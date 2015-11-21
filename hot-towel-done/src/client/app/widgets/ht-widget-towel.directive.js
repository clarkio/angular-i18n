(function() {
    'use strict';

    angular
        .module('app.widgets')
        .directive('htWidgetTowel', htWidgetTowel);

    /* @ngInject */
    function htWidgetTowel() {
        //Usage:
        //<div ht-widget-towel name="vm.map.name"></div>
        // Creates:
        // <div ht-widget-towel=""
        //      name="Beach Towel"
        //      price="10.00"
        //      allow-collapse="true" </div>
        var directive = {
            scope: {
                name: '@',
                price: '@'
            },
            templateUrl: 'app/widgets/widget-ht-towel.html',
            restrict: 'EA'
        };
        return directive;
    }
})();
