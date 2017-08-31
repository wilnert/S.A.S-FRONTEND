'use strict';

angular.module('eventosSasApp', [
  'eventosSasApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'satellizer'
])
 .constant("API","http://localhost:8080/S.A.S-BACKEND")
 .config(function($urlRouterProvider, $locationProvider,$authProvider,API) {
   $urlRouterProvider.otherwise('/');
   //configurar satellizer

   $authProvider.loginUrl = API + '/api/auth/login';
   $authProvider.tokenName = 'token';
   $authProvider.tokenPredix = 'eventosSas';

   $locationProvider.html5Mode(true);
 });
