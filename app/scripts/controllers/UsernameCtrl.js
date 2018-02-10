(function() {
    function UsernameCtrl($uibModalInstance, $cookies) {

        this.currentUser;

        this.addUser = function() {
            $cookies.put('blocChatCurrentUser', this.name);
            $uibModalInstance.close();
        };
    }

    angular
        .module('blocChat')
        .controller('UsernameCtrl', ['$uibModalInstance', '$cookies',  UsernameCtrl]);
})();
