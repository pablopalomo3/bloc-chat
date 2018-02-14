(function() {
    function UsernameCtrl($uibModalInstance, $cookies) {

        var currentUser;

        this.addUser = function(currentUser) {
            if (currentUser === undefined) {
                alert("Enter Username!");
            } else if (currentUser.length >= 1){
                $cookies.put('blocChatCurrentUser', currentUser);
                console.log(currentUser);
                $uibModalInstance.close();
            }

        };
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies',  UsernameCtrl]);
})();
