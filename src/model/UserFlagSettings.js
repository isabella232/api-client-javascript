/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.9
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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Links', 'model/UserFlagSetting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./UserFlagSetting'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.UserFlagSettings = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.Links, root.LaunchDarklyRestApi.UserFlagSetting);
  }
}(this, function(ApiClient, Links, UserFlagSetting) {
  'use strict';




  /**
   * The UserFlagSettings model module.
   * @module model/UserFlagSettings
   * @version 2.0.9
   */

  /**
   * Constructs a new <code>UserFlagSettings</code>.
   * @alias module:model/UserFlagSettings
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UserFlagSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserFlagSettings} obj Optional instance to populate.
   * @return {module:model/UserFlagSettings} The populated <code>UserFlagSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], {'String': UserFlagSetting});
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Object.<String, module:model/UserFlagSetting>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


