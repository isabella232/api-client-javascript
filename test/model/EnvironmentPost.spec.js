/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.8.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.8
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.LaunchDarklyApi);
  }
}(this, function(expect, LaunchDarklyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LaunchDarklyApi.EnvironmentPost();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('EnvironmentPost', function() {
    it('should create an instance of EnvironmentPost', function() {
      // uncomment below and update the code to test EnvironmentPost
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be.a(LaunchDarklyApi.EnvironmentPost);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property defaultTtl (base name: "defaultTtl")', function() {
      // uncomment below and update the code to test the property defaultTtl
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property secureMode (base name: "secureMode")', function() {
      // uncomment below and update the code to test the property secureMode
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property defaultTrackEvents (base name: "defaultTrackEvents")', function() {
      // uncomment below and update the code to test the property defaultTrackEvents
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property requireComments (base name: "requireComments")', function() {
      // uncomment below and update the code to test the property requireComments
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

    it('should have the property confirmChanges (base name: "confirmChanges")', function() {
      // uncomment below and update the code to test the property confirmChanges
      //var instance = new LaunchDarklyApi.EnvironmentPost();
      //expect(instance).to.be();
    });

  });

}));
