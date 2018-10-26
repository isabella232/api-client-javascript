/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.10
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
    instance = new LaunchDarklyApi.Clause();
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

  describe('Clause', function() {
    it('should create an instance of Clause', function() {
      // uncomment below and update the code to test Clause
      //var instane = new LaunchDarklyApi.Clause();
      //expect(instance).to.be.a(LaunchDarklyApi.Clause);
    });

    it('should have the property attribute (base name: "attribute")', function() {
      // uncomment below and update the code to test the property attribute
      //var instane = new LaunchDarklyApi.Clause();
      //expect(instance).to.be();
    });

    it('should have the property op (base name: "op")', function() {
      // uncomment below and update the code to test the property op
      //var instane = new LaunchDarklyApi.Clause();
      //expect(instance).to.be();
    });

    it('should have the property values (base name: "values")', function() {
      // uncomment below and update the code to test the property values
      //var instane = new LaunchDarklyApi.Clause();
      //expect(instance).to.be();
    });

    it('should have the property negate (base name: "negate")', function() {
      // uncomment below and update the code to test the property negate
      //var instane = new LaunchDarklyApi.Clause();
      //expect(instance).to.be();
    });

  });

}));
