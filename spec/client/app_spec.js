'use strict';

describe('App Routes', function() {

  var $route;

  beforeEach(module('myApp'));

  beforeEach(inject(
    function(_$route_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $route = _$route_;
  }));

  describe('New Certification Selection Route', function(){
    it('Uses the correct Route and Controller', function(){
        expect($route.routes['/certificationSelection'].controller).toBe('NewApplicationController');
        expect($route.routes['/certificationSelection'].templateUrl).toBe('client/views/applications/certificationSelection.html');
    });
  });

  describe('New Application Route', function(){
    it('Uses the correct Route and Controller', function(){
      expect($route.routes['/application/new'].controller).toBe('NewApplicationController');
      expect($route.routes['/application/new'].templateUrl).toBe('client/views/applications/newApplication.html');
    });
  });

  describe('New Profile Route', function(){
    it('Uses the correct Route and Controller', function(){
      expect($route.routes['/'].controller).toBe('ProfileController');
      expect($route.routes['/'].templateUrl).toBe('client/views/applications/profile.html');
    });
  });

  describe('New Inbox Route', function(){
    it('Uses the correct Route and Controller', function(){
      expect($route.routes['/inbox'].controller).toBe('InboxController');
      expect($route.routes['/inbox'].templateUrl).toBe('client/views/applications/inbox.html');
    });
  });

  describe('New Search Route', function(){
    it('Uses the correct Route and Controller', function(){
      expect($route.routes['/search'].controller).toBe('SearchController');
      expect($route.routes['/search'].templateUrl).toBe('client/views/applications/search.html');
    });
  });

  describe('New Facilities Route', function(){
    it('Uses the correct Route and Controller', function(){
      expect($route.routes['/facilities'].controller).toBe('FacilitiesController');
      expect($route.routes['/facilities'].templateUrl).toBe('client/views/applications/facilities.html');
    });
  });
});
