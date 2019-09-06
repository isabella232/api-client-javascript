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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Policy = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Policy model module.
   * @module model/Policy
   * @version 2.0.18
   */

  /**
   * Constructs a new <code>Policy</code>.
   * @alias module:model/Policy
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Policy</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Policy} obj Optional instance to populate.
   * @return {module:model/Policy} The populated <code>Policy</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], ['String']);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
      }
      if (data.hasOwnProperty('effect')) {
        obj['effect'] = ApiClient.convertToType(data['effect'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<String>} resources
   */
  exports.prototype['resources'] = undefined;
  /**
   * @member {Array.<String>} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * Effect of the policy - allow or deny.
   * @member {String} effect
   */
  exports.prototype['effect'] = undefined;



  return exports;
}));


