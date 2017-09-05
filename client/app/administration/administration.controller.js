'use strict';

(function(){

class AdministrationComponent {
  constructor(userService) {
    this.message = 'Hello';
    this.userService=userService;
  }

  $onInit(){
    						this.userService.getAssis().$promise
    						.then(response => {
    							this.user = response;
    							console.log(this.user);
    						})
    						.catch(err => console.log("ERROR"));
  }
}

angular.module('eventosSasApp')
  .component('administration', {
    templateUrl: 'app/administration/administration.html',
    controller: AdministrationComponent,
    controllerAs: 'vm'
  });

})();
