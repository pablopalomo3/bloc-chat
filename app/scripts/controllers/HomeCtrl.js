(function() {
    function HomeCtrl($uibModal, Room) {

        this.getRooms = Room.all;

        this.open = function() {
            console.log('open modal');
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '../templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room',  HomeCtrl]);
})();
