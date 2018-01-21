(function() {
    function ModalCtrl($uibModalInstance, Room) {

        this.addRoom = function(name) {
            console.log('add room');
            Room.add(name);
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
