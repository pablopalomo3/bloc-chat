(function() {
    function HomeCtrl($uibModal, Room, Message, $cookies, $scope ) {
        this.messages = null;
        this.getRooms = Room.all;
        $scope.currentUser = $cookies.get('blocChatCurrentUser');

        $scope.$watch(function() {
            return $cookies.get('blocChatCurrentUser');
        }, function(newValue) {
            $scope.currentUser = $cookies.get('blocChatCurrentUser');
        });

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
            this.currRoom = room;
        };

        this.sendMessage = function(content) {
            console.log(content);
            console.log(this.currRoom.$id);
            console.log(Date());
            console.log($scope.currentUser);
            Message.send({
                content: this.content,
                roomId: this.currRoom.$id,
                sentAt: Date(),
                username: $scope.currentUser
            });
        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', '$scope', HomeCtrl]);
})();
