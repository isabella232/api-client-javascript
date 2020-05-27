/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.3.0
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
    root.LaunchDarklyApi.StreamUsageMetadata = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The StreamUsageMetadata model module.
   * @module model/StreamUsageMetadata
   * @version 3.3.0
   */

  /**
   * Constructs a new <code>StreamUsageMetadata</code>.
   * @alias module:model/StreamUsageMetadata
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>StreamUsageMetadata</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamUsageMetadata} obj Optional instance to populate.
   * @return {module:model/StreamUsageMetadata} The populated <code>StreamUsageMetadata</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('sdk')) {
        obj['sdk'] = ApiClient.convertToType(data['sdk'], 'String');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'String');
      }
      if (data.hasOwnProperty('source')) {
        obj['source'] = ApiClient.convertToType(data['source'], 'String');
      }
    }
    return obj;
  }

  /**
   * The language of the sdk
   * @member {String} sdk
   */
  exports.prototype['sdk'] = undefined;
  /**
   * The version of the SDK
   * @member {String} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {String} source
   */
  exports.prototype['source'] = undefined;



  return exports;
}));


