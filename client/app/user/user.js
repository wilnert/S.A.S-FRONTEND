(function() {
    'use strict';

    angular.module('eventosSasApp')
    .config(config);

    config.$inject = ['$stateProvider'];

    function config($stateProvider) {
        $stateProvider
            .state('user-create', {
                url: '/user-create',
                template: '<user-create></user-create>'
              })
            .state('user-list',{
                url:'/user-list',
                template:'<user-list></user-list>',
                authenticate: ['ADMIN'],

            })
            .state('user-delete',{
                url:'/user-delete',
                template:'<user-delete></user-delete>'
            })
            .state('user-update',{
                url:'/user-update',
                template:'<user-update></user-update>',
                authenticate: ["ADMIN","USR"],
            })
            .state('user-view',{
                url:'/user-view/:id',
                template:'<user-view></user-view>'
            });
    }

})();
