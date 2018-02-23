(function() {
    function HomeCtrl($uibModal, Room, Message, $cookies, $scope ) {
        this.messages = null;
        this.content = '';
        this.getRooms = Room.all;
        $scope.currentUser = $cookies.get('blocChatCurrentUser');

        $scope.$watch(function() {
            return $cookies.get('blocChatCurrentUser');
        }, function(newValue) {
            $scope.currentUser = $cookies.get('blocChatCurrentUser');
        });

        var formatDate = function(date) {
            var hours = date.getHours();
            var minutes = date.getMinutes();
            var ampm = hours >= 12 ? 'pm' : 'am';
            hours = hours % 12;
            hours = hours ? hours : 12; // the hour '0' should be '12'
            minutes = minutes < 10 ? '0'+minutes : minutes;
            var strTime = hours + ':' + minutes + ' ' + ampm;
            return date.getMonth()+1 + "/" + date.getDate() + "/" + date.getFullYear() + " " + strTime;
        };
        var getDate = new Date();
        var myDate = formatDate(getDate);

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
            //console.log(content, this.currRoom.$id, myDate,$scope.currentUser);
            if(content === undefined) {
                return false;
            } else {
                Message.send({
                    content: content,
                    roomId: this.currRoom.$id,
                    sentAt: myDate,
                    username: $scope.currentUser
                });
            }

        };

    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['$uibModal', 'Room', 'Message', '$cookies', '$scope', HomeCtrl]);
})();
