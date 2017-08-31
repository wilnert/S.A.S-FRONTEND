'use strict';

(function(){

class AssistanceComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('eventosSasApp')
  .component('assistance', {
    templateUrl: 'app/assistance/assistance.html',
    controller: AssistanceComponent,
    controllerAs: 'assistanceCtrl'
  });

})();
