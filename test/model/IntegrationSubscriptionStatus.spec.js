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
    instance = new LaunchDarklyApi.IntegrationSubscriptionStatus();
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

  describe('IntegrationSubscriptionStatus', function() {
    it('should create an instance of IntegrationSubscriptionStatus', function() {
      // uncomment below and update the code to test IntegrationSubscriptionStatus
      //var instance = new LaunchDarklyApi.IntegrationSubscriptionStatus();
      //expect(instance).to.be.a(LaunchDarklyApi.IntegrationSubscriptionStatus);
    });

    it('should have the property successCount (base name: "successCount")', function() {
      // uncomment below and update the code to test the property successCount
      //var instance = new LaunchDarklyApi.IntegrationSubscriptionStatus();
      //expect(instance).to.be();
    });

    it('should have the property lastSuccess (base name: "lastSuccess")', function() {
      // uncomment below and update the code to test the property lastSuccess
      //var instance = new LaunchDarklyApi.IntegrationSubscriptionStatus();
      //expect(instance).to.be();
    });

    it('should have the property errorCount (base name: "errorCount")', function() {
      // uncomment below and update the code to test the property errorCount
      //var instance = new LaunchDarklyApi.IntegrationSubscriptionStatus();
      //expect(instance).to.be();
    });

  });

}));
