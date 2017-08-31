'use strict';

angular.module('eventosSasApp', ['eventosSasApp.constants', 'ngCookies', 'ngResource', 'ngSanitize',
    'ui.router'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
