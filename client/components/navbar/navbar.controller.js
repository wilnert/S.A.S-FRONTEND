'use strict';

class NavbarController {
  //start-non-standard
  menu = [{
    'title': 'Home',
    'state': 'main'
  }];

  isCollapsed = true;
  //end-non-standard


}

angular.module('eventosSasApp')
  .controller('NavbarController', NavbarController);
