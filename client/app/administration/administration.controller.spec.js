'use strict';

describe('Component: AdministrationComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var AdministrationComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AdministrationComponent = $componentController('administration', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
