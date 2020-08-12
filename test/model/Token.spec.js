/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.4.0
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
    instance = new LaunchDarklyApi.Token();
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

  describe('Token', function() {
    it('should create an instance of Token', function() {
      // uncomment below and update the code to test Token
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be.a(LaunchDarklyApi.Token);
    });

    it('should have the property links (base name: "_links")', function() {
      // uncomment below and update the code to test the property links
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "_id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property ownerId (base name: "ownerId")', function() {
      // uncomment below and update the code to test the property ownerId
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property memberId (base name: "memberId")', function() {
      // uncomment below and update the code to test the property memberId
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property member (base name: "_member")', function() {
      // uncomment below and update the code to test the property member
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property creationDate (base name: "creationDate")', function() {
      // uncomment below and update the code to test the property creationDate
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property lastModified (base name: "lastModified")', function() {
      // uncomment below and update the code to test the property lastModified
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property lastUsed (base name: "lastUsed")', function() {
      // uncomment below and update the code to test the property lastUsed
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property token (base name: "token")', function() {
      // uncomment below and update the code to test the property token
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property role (base name: "role")', function() {
      // uncomment below and update the code to test the property role
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property customRoleIds (base name: "customRoleIds")', function() {
      // uncomment below and update the code to test the property customRoleIds
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property inlineRole (base name: "inlineRole")', function() {
      // uncomment below and update the code to test the property inlineRole
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property serviceToken (base name: "serviceToken")', function() {
      // uncomment below and update the code to test the property serviceToken
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

    it('should have the property defaultApiVersion (base name: "defaultApiVersion")', function() {
      // uncomment below and update the code to test the property defaultApiVersion
      //var instance = new LaunchDarklyApi.Token();
      //expect(instance).to.be();
    });

  });

}));
