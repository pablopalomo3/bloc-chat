(function() {
  function BlocChatCookies($cookies, $uibModal) {
    var currentUser = $cookies.get('blocChatCurrentUser');
    if (!currentUser || currentUser === '') {
    console.log('modal is open');
      $uibModal.open({
        animation: false,
        template: '../templates/username.html',
        controller: 'UsernameCtrl as username',
        size: 'sm'
      })
    }
  }

  angular
    .module('blocChat')
    .run(['$cookies', '$uibModal', BlocChatCookies]);
})();
