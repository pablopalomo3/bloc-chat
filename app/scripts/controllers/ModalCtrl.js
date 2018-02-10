(function() {
    function ModalCtrl($uibModalInstance, Room) {

        this.roomName;

        this.submit = function(roomName) {
            Room.add({name: roomName});
            $uibModalInstance.close();
        };
        this.cancel = function() {
            $uibModalInstance.dismiss();
        };
    }

    angular
        .module('blocChat')
        .controller('ModalCtrl', ['$uibModalInstance', 'Room',  ModalCtrl]);
})();
