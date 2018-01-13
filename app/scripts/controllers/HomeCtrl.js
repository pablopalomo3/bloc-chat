(function() {
    function HomeCtrl($uibModal, Room) {
        this.getRooms = Room.getRooms;

        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: '/templates/modal.html',
                controller: 'ModalCtrl',
                controllerAs: 'modal',
                backdrop: 'static'
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
