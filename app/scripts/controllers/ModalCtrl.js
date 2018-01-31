(function() {
    function ModalCtrl($uibModalInstance, Room) {

        this.roomName;

        this.submit = function(roomName) {
            console.log('add room');
            Room.add({name: roomName});
            $uibModalInstance.close();
        };
        this.cancel = function() {
            console.log('cancel add');
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room',  ModalCtrl]);
})();
