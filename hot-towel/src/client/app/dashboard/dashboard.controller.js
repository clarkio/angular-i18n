(function () {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['$q', 'dataservice', 'logger'];
    /* @ngInject */
    function DashboardController($q, dataservice, logger) {

        var vm = this;
        vm.news = {
            title: 'hot-towel',
            description: 'Hot Towel Angular is a SPA template for Angular developers.'
        };
        vm.name = 'Mike';
        vm.messageCount = 0;
        vm.people = [];
        vm.title = 'Dashboard';
        vm.items = [
            {
                name: 'Beach Towel',
                price: '20.00'
            },
            {
                name: 'Bath Towel',
                price: '15.00'
            },
            {
                name: 'Gym Towel',
                price: '5.00'
            }
        ];
        vm.date = new Date();
        vm.money = 1000;

        activate();

        function activate() {
            var promises = [getMessageCount(), getPeople()];
            return $q.all(promises).then(function () {
                logger.info('Activated Dashboard View');
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
