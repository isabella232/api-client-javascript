/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.13
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
    factory(root.expect, root.LaunchDarklyApi);
  }
}(this, function(expect, LaunchDarklyApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new LaunchDarklyApi.Rule();
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

  describe('Rule', function() {
    it('should create an instance of Rule', function() {
      // uncomment below and update the code to test Rule
      //var instane = new LaunchDarklyApi.Rule();
      //expect(instance).to.be.a(LaunchDarklyApi.Rule);
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new LaunchDarklyApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property variation (base name: "variation")', function() {
      // uncomment below and update the code to test the property variation
      //var instane = new LaunchDarklyApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property rollout (base name: "rollout")', function() {
      // uncomment below and update the code to test the property rollout
      //var instane = new LaunchDarklyApi.Rule();
      //expect(instance).to.be();
    });

    it('should have the property clauses (base name: "clauses")', function() {
      // uncomment below and update the code to test the property clauses
      //var instane = new LaunchDarklyApi.Rule();
      //expect(instance).to.be();
    });

  });

}));
