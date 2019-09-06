/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.18
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/WeightedVariation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./WeightedVariation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Rollout = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.WeightedVariation);
  }
}(this, function(ApiClient, WeightedVariation) {
  'use strict';




  /**
   * The Rollout model module.
   * @module model/Rollout
   * @version 2.0.18
   */

  /**
   * Constructs a new <code>Rollout</code>.
   * @alias module:model/Rollout
   * @class
   */
  var exports = function() {
    var _this = this;


  };

  /**
   * Constructs a <code>Rollout</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rollout} obj Optional instance to populate.
   * @return {module:model/Rollout} The populated <code>Rollout</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], [WeightedVariation]);
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/WeightedVariation>} variations
   */
  exports.prototype['variations'] = undefined;



  return exports;
}));


