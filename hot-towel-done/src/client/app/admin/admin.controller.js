(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger', '$translate'];
    /* @ngInject */
    function AdminController(logger, $translate) {
        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            $translate('Activation_Admin').then(function (translation) {
                logger.info(translation);
            });
        }
    }
})();
