(function() {
    function HomeCtrl($uibModal, Room, Message) {
        this.messages = null;
        this.getRooms = Room.all;

        this.open = function() {
            var modalInstance = $uibModal.open({
                animation: false,
                templateUrl: '../templates/modal.html',
                controller: 'ModalCtrl as modal'
            });
        };

        this.getMessages = function(room) {
            this.messages = Message.getByRoomId(room.$id);
            this.activeRoom = room.name;
        }

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message',  HomeCtrl]);
})();
