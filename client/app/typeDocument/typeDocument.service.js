(function () {
  'use strict';
  angular.module('eventosSasApp')
  .factory('typeDocumentService', typeDocumentService);
  // permite injectar unas librerias de angular..
  typeDocumentService.inject =["$resource","API"];
  function typeDocumentService($resource,API) {
    return $resource(API+"/api/types_document/:id",{
      id:'@id'

    },{

    });

  }
})();
