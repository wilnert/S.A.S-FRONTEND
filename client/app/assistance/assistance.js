'use strict';

angular.module('eventosSasApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('assistance', {
        url: '/assistance',
        template: '<assistance></assistance>'
      });
  });
