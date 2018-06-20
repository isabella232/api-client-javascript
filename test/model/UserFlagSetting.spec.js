/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.3
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
    instance = new LaunchDarklyRestApi.UserFlagSetting();
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

  describe('UserFlagSetting', function() {
    it('should create an instance of UserFlagSetting', function() {
      // uncomment below and update the code to test UserFlagSetting
      //var instane = new LaunchDarklyRestApi.UserFlagSetting();
      //expect(instance).to.be.a(LaunchDarklyRestApi.UserFlagSetting);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new LaunchDarklyRestApi.UserFlagSetting();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "_value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new LaunchDarklyRestApi.UserFlagSetting();
      //expect(instance).to.be();
    });

    it('should have the property setting (base name: "setting")', function() {
      // uncomment below and update the code to test the property setting
      //var instane = new LaunchDarklyRestApi.UserFlagSetting();
      //expect(instance).to.be();
    });

  });

}));
