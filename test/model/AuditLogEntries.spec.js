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
    instance = new LaunchDarklyRestApi.AuditLogEntries();
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

  describe('AuditLogEntries', function() {
    it('should create an instance of AuditLogEntries', function() {
      // uncomment below and update the code to test AuditLogEntries
      //var instane = new LaunchDarklyRestApi.AuditLogEntries();
      //expect(instance).to.be.a(LaunchDarklyRestApi.AuditLogEntries);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instane = new LaunchDarklyRestApi.AuditLogEntries();
      //expect(instance).to.be();
    });

    it('should have the property items (base name: "items")', function() {
      // uncomment below and update the code to test the property items
      //var instane = new LaunchDarklyRestApi.AuditLogEntries();
      //expect(instance).to.be();
    });

  });

}));
