(function() {
    function HomeCtrl($uibModal, Room) {
        var vm = this;

        vm.getRooms = Room.getRooms;

        vm.open = function() {
            console.log('open modal');
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '../templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
            });
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room',  HomeCtrl]);
})();
