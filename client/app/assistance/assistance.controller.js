'use strict';

(function(){

class AssistanceComponent {
  constructor(userService) {
    this.userService=userService;
  }

  $onInit(){
    						this.userService.query().$promise
    						.then(response => {
    							this.user = response;
    							console.log(this.user);
    						})
    						.catch(err => console.log("ERROR"));
  }
modify(item){


  				this.userService.update(item).$promise
  				.then(response => {
  					this.user = response;
  				})
  				.catch(err => console.log("ERROR",err));

}


}

angular.module('eventosSasApp')
  .component('assistance', {
    templateUrl: 'app/assistance/assistance.html',
    controller: AssistanceComponent,
    controllerAs: 'vm'
  });

})();
