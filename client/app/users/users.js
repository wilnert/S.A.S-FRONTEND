'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        template: '<users></users>'
      });
  });
