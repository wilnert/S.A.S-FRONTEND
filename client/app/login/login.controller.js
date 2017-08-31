'use strict';
(function(){

class LoginComponent {
  constructor(AuthService,$state) {
    this.message = 'Hello';
    this.$state = $state;
    this.AuthService = AuthService;
  }
  login(){
			console.log(this.user);
      this.AuthService.login(this.user);
      this.$state.go('main');
    }
    logout(){
  			console.log();
        this.AuthService.logout(this.user);
        this.$state.go('main');
      }

}
LoginComponent.$inject = ['AuthService','$state'];
angular.module('startUpApp')
  .component('login', {
    templateUrl: 'app/login/login.html',
    controller: LoginComponent,
    controllerAs: 'vm'
  });

})();
