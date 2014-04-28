'use strict';

describe('Directive: mlbTeam', function () {

  // load the directive's module
  beforeEach(module('stepByStepApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<mlb-team></mlb-team>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the mlbTeam directive');
  }));
});
