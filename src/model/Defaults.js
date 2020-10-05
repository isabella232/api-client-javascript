/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.6.0
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
    root.LaunchDarklyApi.Defaults = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The Defaults model module.
   * @module model/Defaults
   * @version 3.6.0
   */

  /**
   * Constructs a new <code>Defaults</code>.
   * Default values to be used when a new environment is created.
   * @alias module:model/Defaults
   * @class
   * @param onVariation {Number} The index of the variation to be served when a flag's targeting is on (default variation).
   * @param offVariation {Number} The index of the variation to be served when a flag is off.
   */
  var exports = function(onVariation, offVariation) {
    var _this = this;

    _this['onVariation'] = onVariation;
    _this['offVariation'] = offVariation;
  };

  /**
   * Constructs a <code>Defaults</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Defaults} obj Optional instance to populate.
   * @return {module:model/Defaults} The populated <code>Defaults</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('onVariation')) {
        obj['onVariation'] = ApiClient.convertToType(data['onVariation'], 'Number');
      }
      if (data.hasOwnProperty('offVariation')) {
        obj['offVariation'] = ApiClient.convertToType(data['offVariation'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The index of the variation to be served when a flag's targeting is on (default variation).
   * @member {Number} onVariation
   */
  exports.prototype['onVariation'] = undefined;
  /**
   * The index of the variation to be served when a flag is off.
   * @member {Number} offVariation
   */
  exports.prototype['offVariation'] = undefined;



  return exports;
}));


