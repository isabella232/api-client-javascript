/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.9
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
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
    factory(root.expect, root.LaunchDarklyRestApi);
  }
}(this, function(expect, LaunchDarklyRestApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LaunchDarklyRestApi.Environment();
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

  describe('Environment', function() {
    it('should create an instance of Environment', function() {
      // uncomment below and update the code to test Environment
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be.a(LaunchDarklyRestApi.Environment);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property apiKey (base name: "apiKey")', function() {
      // uncomment below and update the code to test the property apiKey
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property mobileKey (base name: "mobileKey")', function() {
      // uncomment below and update the code to test the property mobileKey
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property color (base name: "color")', function() {
      // uncomment below and update the code to test the property color
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property defaultTtl (base name: "defaultTtl")', function() {
      // uncomment below and update the code to test the property defaultTtl
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property secureMode (base name: "secureMode")', function() {
      // uncomment below and update the code to test the property secureMode
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property defaultTrackEvents (base name: "defaultTrackEvents")', function() {
      // uncomment below and update the code to test the property defaultTrackEvents
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new LaunchDarklyRestApi.Environment();
      //expect(instance).to.be();
    });

  });

}));
