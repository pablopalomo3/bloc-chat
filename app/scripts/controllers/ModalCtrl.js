(function() {
    function ModalCtrl($uibModalInstance, Room) {

        this.newRoom = function(name) {
            Room.newRoom(name);
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
