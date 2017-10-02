/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
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
    instance = new LaunchDarklyRestApi.FeatureFlagBody();
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

  describe('FeatureFlagBody', function() {
    it('should create an instance of FeatureFlagBody', function() {
      // uncomment below and update the code to test FeatureFlagBody
      //var instane = new LaunchDarklyRestApi.FeatureFlagBody();
      //expect(instance).to.be.a(LaunchDarklyRestApi.FeatureFlagBody);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new LaunchDarklyRestApi.FeatureFlagBody();
      //expect(instance).to.be();
    });

    it('should have the property key (base name: "key")', function() {
      // uncomment below and update the code to test the property key
      //var instane = new LaunchDarklyRestApi.FeatureFlagBody();
      //expect(instance).to.be();
    });

    it('should have the property variations (base name: "variations")', function() {
      // uncomment below and update the code to test the property variations
      //var instane = new LaunchDarklyRestApi.FeatureFlagBody();
      //expect(instance).to.be();
    });

    it('should have the property temporary (base name: "temporary")', function() {
      // uncomment below and update the code to test the property temporary
      //var instane = new LaunchDarklyRestApi.FeatureFlagBody();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new LaunchDarklyRestApi.FeatureFlagBody();
      //expect(instance).to.be();
    });

    it('should have the property includeInSnippet (base name: "includeInSnippet")', function() {
      // uncomment below and update the code to test the property includeInSnippet
      //var instane = new LaunchDarklyRestApi.FeatureFlagBody();
      //expect(instance).to.be();
    });

  });

}));
