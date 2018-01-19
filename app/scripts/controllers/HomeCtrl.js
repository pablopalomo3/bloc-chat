(function() {
    function HomeCtrl($uibModal, Room) {
        var vm = this;

        vm.getRooms = Room.getRooms;

        vm.open = function() {
            console.log('open modal');
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '../templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal'
            });
            modalInstance.result.then(function(name) {
                Room.addRoom(name);
            });
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room',  HomeCtrl]);
})();
