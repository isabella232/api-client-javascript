/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.12
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
    instance = new LaunchDarklyApi.FeatureFlagsApi();
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

  describe('FeatureFlagsApi', function() {
    describe('copyFeatureFlag', function() {
      it('should call copyFeatureFlag successfully', function(done) {
        //uncomment below and update the code to test copyFeatureFlag
        //instance.copyFeatureFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('deleteFeatureFlag', function() {
      it('should call deleteFeatureFlag successfully', function(done) {
        //uncomment below and update the code to test deleteFeatureFlag
        //instance.deleteFeatureFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatureFlag', function() {
      it('should call getFeatureFlag successfully', function(done) {
        //uncomment below and update the code to test getFeatureFlag
        //instance.getFeatureFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatureFlagStatus', function() {
      it('should call getFeatureFlagStatus successfully', function(done) {
        //uncomment below and update the code to test getFeatureFlagStatus
        //instance.getFeatureFlagStatus(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatureFlagStatuses', function() {
      it('should call getFeatureFlagStatuses successfully', function(done) {
        //uncomment below and update the code to test getFeatureFlagStatuses
        //instance.getFeatureFlagStatuses(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('getFeatureFlags', function() {
      it('should call getFeatureFlags successfully', function(done) {
        //uncomment below and update the code to test getFeatureFlags
        //instance.getFeatureFlags(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('patchFeatureFlag', function() {
      it('should call patchFeatureFlag successfully', function(done) {
        //uncomment below and update the code to test patchFeatureFlag
        //instance.patchFeatureFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('postFeatureFlag', function() {
      it('should call postFeatureFlag successfully', function(done) {
        //uncomment below and update the code to test postFeatureFlag
        //instance.postFeatureFlag(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
