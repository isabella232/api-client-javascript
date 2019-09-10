/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.19
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
    root.LaunchDarklyApi.Statement = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Statement model module.
   * @module model/Statement
   * @version 2.0.19
   */

  /**
   * Constructs a new <code>Statement</code>.
   * @alias module:model/Statement
   * @class
   */
  var exports = function() {
    var _this = this;






  };

  /**
   * Constructs a <code>Statement</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statement} obj Optional instance to populate.
   * @return {module:model/Statement} The populated <code>Statement</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('resources')) {
        obj['resources'] = ApiClient.convertToType(data['resources'], ['String']);
      }
      if (data.hasOwnProperty('notresources')) {
        obj['notresources'] = ApiClient.convertToType(data['notresources'], ['String']);
      }
      if (data.hasOwnProperty('actions')) {
        obj['actions'] = ApiClient.convertToType(data['actions'], ['String']);
      }
      if (data.hasOwnProperty('notactions')) {
        obj['notactions'] = ApiClient.convertToType(data['notactions'], ['String']);
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
   * Targeted resource will be those resources NOT in this list. The \"resources`\" field must be empty to use this field.
   * @member {Array.<String>} notresources
   */
  exports.prototype['notresources'] = undefined;
  /**
   * @member {Array.<String>} actions
   */
  exports.prototype['actions'] = undefined;
  /**
   * Targeted actions will be those actions NOT in this list. The \"actions\" field must be empty to use this field.
   * @member {Array.<String>} notactions
   */
  exports.prototype['notactions'] = undefined;
  /**
   * @member {module:model/Statement.EffectEnum} effect
   */
  exports.prototype['effect'] = undefined;


  /**
   * Allowed values for the <code>effect</code> property.
   * @enum {String}
   * @readonly
   */
  exports.EffectEnum = {
    /**
     * value: "allow"
     * @const
     */
    "allow": "allow",
    /**
     * value: "deny"
     * @const
     */
    "deny": "deny"  };


  return exports;
}));


