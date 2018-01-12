(function() {
    function RoomCtrl(Room) {
        this.getRooms = Room.getRooms;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})();
