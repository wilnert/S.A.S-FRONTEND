'use strict';

(function(){

class AdministrationComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('eventosSasApp')
  .component('administration', {
    templateUrl: 'app/administration/administration.html',
    controller: AdministrationComponent,
    controllerAs: 'administrationCtrl'
  });

})();
