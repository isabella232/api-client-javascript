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
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.Environment = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.Links);
  }
}(this, function(ApiClient, Links) {
  'use strict';




  /**
   * The Environment model module.
   * @module model/Environment
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>Environment</code>.
   * @alias module:model/Environment
   * @class
   */
  var exports = function() {
    var _this = this;










  };

  /**
   * Constructs a <code>Environment</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Environment} obj Optional instance to populate.
   * @return {module:model/Environment} The populated <code>Environment</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('apiKey')) {
        obj['apiKey'] = ApiClient.convertToType(data['apiKey'], 'String');
      }
      if (data.hasOwnProperty('mobileKey')) {
        obj['mobileKey'] = ApiClient.convertToType(data['mobileKey'], 'String');
      }
      if (data.hasOwnProperty('color')) {
        obj['color'] = ApiClient.convertToType(data['color'], 'String');
      }
      if (data.hasOwnProperty('defaultTtl')) {
        obj['defaultTtl'] = ApiClient.convertToType(data['defaultTtl'], 'Number');
      }
      if (data.hasOwnProperty('secureMode')) {
        obj['secureMode'] = ApiClient.convertToType(data['secureMode'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} apiKey
   */
  exports.prototype['apiKey'] = undefined;
  /**
   * @member {String} mobileKey
   */
  exports.prototype['mobileKey'] = undefined;
  /**
   * @member {String} color
   */
  exports.prototype['color'] = undefined;
  /**
   * @member {Number} defaultTtl
   */
  exports.prototype['defaultTtl'] = undefined;
  /**
   * @member {Boolean} secureMode
   */
  exports.prototype['secureMode'] = undefined;



  return exports;
}));


