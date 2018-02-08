(function() {
    function HomeCtrl($uibModal, Room, Message) {

        this.getRooms = Room.all;

        this.open = function() {
            console.log('open modal');
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '../templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };

        this.getMessages = function(roomId, roomName) {
            this.messages = Message.getByRoomId(roomId);
            this.activeRoom = roomName;
        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room',  HomeCtrl]);
})();
