'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('administration', {
        url: '/administration',
        template: '<administration></administration>'
      });
  });
