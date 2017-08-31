'use strict';

(function(){

class UsersComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('eventosSasApp')
  .component('users', {
    templateUrl: 'app/users/users.html',
    controller: UsersComponent,
    controllerAs: 'usersCtrl'
  });

})();
