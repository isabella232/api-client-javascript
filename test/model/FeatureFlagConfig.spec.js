/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.14
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
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
    instance = new LaunchDarklyApi.FeatureFlagConfig();
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

  describe('FeatureFlagConfig', function() {
    it('should create an instance of FeatureFlagConfig', function() {
      // uncomment below and update the code to test FeatureFlagConfig
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be.a(LaunchDarklyApi.FeatureFlagConfig);
    });

    it('should have the property on (base name: "on")', function() {
      // uncomment below and update the code to test the property on
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property archived (base name: "archived")', function() {
      // uncomment below and update the code to test the property archived
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property salt (base name: "salt")', function() {
      // uncomment below and update the code to test the property salt
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property sel (base name: "sel")', function() {
      // uncomment below and update the code to test the property sel
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property version (base name: "version")', function() {
      // uncomment below and update the code to test the property version
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property targets (base name: "targets")', function() {
      // uncomment below and update the code to test the property targets
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property rules (base name: "rules")', function() {
      // uncomment below and update the code to test the property rules
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property fallthrough (base name: "fallthrough")', function() {
      // uncomment below and update the code to test the property fallthrough
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property offVariation (base name: "offVariation")', function() {
      // uncomment below and update the code to test the property offVariation
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property prerequisites (base name: "prerequisites")', function() {
      // uncomment below and update the code to test the property prerequisites
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

    it('should have the property trackEvents (base name: "trackEvents")', function() {
      // uncomment below and update the code to test the property trackEvents
      //var instance = new LaunchDarklyApi.FeatureFlagConfig();
      //expect(instance).to.be();
    });

  });

}));
