(function() {
    function RoomCtrl(Room) {
        this.chatRooms = Room;
    }

    angular
        .module('blocChat')
        .controller('RoomCtrl', ['Room', RoomCtrl]);
})
