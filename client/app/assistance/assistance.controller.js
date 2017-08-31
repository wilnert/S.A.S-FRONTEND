'use strict';

(function(){

class AssistanceComponent {
  constructor(userService,$state) {
    this.message = 'Hello';
    this.userService = userService;
  }

  createAssistance(){


    console.log(this.user);
    this.userService.save(this.user).$promise
    .then(response => {
      console.log(alert="Registro exitoso",response);
      // this.$state.go('main');
    })
    .catch(err => console.log("ERROR",err));
  }



}

angular.module('eventosSasApp')
  .component('assistance', {
    templateUrl: 'app/assistance/assistance.html',
    controller: AssistanceComponent,
    controllerAs: 'assistanceCtrl'
  });

})();
