(function () {
  'use strict';
  angular.module('eventosSasApp')
  .factory('rolService', rolService);
  // permite injectar unas librerias de angular..
  rolService.inject =["$resource","API"];
  function rolService($resource,API) {
    return $resource(API+"/api/roles/:id",{
      id:'@id'

    },{

    });

  }
})();
