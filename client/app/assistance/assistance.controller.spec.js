'use strict';

describe('Component: AssistanceComponent', function () {

  // load the controller's module
  beforeEach(module('eventosSasApp'));

  var AssistanceComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    AssistanceComponent = $componentController('assistance', {});
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
