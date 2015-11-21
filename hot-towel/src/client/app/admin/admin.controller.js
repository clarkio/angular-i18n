(function () {
    'use strict';

    angular
        .module('app.admin')
        .controller('AdminController', AdminController);

    AdminController.$inject = ['logger', '$translatePartialLoader', '$translate'];
    /* @ngInject */
    function AdminController(logger, $translatePartialLoader, $translate) {
        $translatePartialLoader.addPart('admin');
        var lang = window.localStorage.getItem('LANG');
        console.log('Current locale is: ', lang);
        $translate.refresh(lang);

        var vm = this;
        vm.title = 'Admin';

        activate();

        function activate() {
            logger.info('Activated Admin View');
        }
    }
})();
