(function () {
  'use strict';
  angular.module('eventosSasApp')
  .factory('userService', userService);
  // permite injectar unas librerias de angular..
  userService.inject =["$resource","API"];
  function userService($resource,API) {
    return $resource(API+"/api/users/:id",{
      id:'@id'

    },{
      update:{
        method: 'PUT'
      },
        delete:{
          method: 'DELETE'
      },
      getOp:{
            url:API+'/api/users',
            method:'GET',
            isArray:true
          },
      sendE:{
            url:API+'/api/users/recoverEmail',
            method:'POST',

          },
          getAssis:{
                url:API+'/api/users/assistance',
                method:'GET',
                isArray:true

              }

    });

  }
})();
