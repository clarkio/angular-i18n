(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger', '$translate'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger, $translate) {

        var vm = this;
        vm.news = {
            title: 'hot-towel',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.name = 'Mike';
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function () {
                $translate('Activation_Dash').then(function (translation) {
                    logger.info(translation);
                });
            });
        }

        function getMessageCount() {
            return dataservice.getMessageCount().then(function (data) {
                vm.messageCount = data;
                return vm.messageCount;
            });
        }

        function getPeople() {
            return dataservice.getPeople().then(function (data) {
                vm.people = data;
                return vm.people;
            });
        }
    }
})();
