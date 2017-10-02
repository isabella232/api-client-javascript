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
    root.LaunchDarklyRestApi.FeatureFlagStatus = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.Links);
  }
}(this, function(ApiClient, Links) {
  'use strict';




  /**
   * The FeatureFlagStatus model module.
   * @module model/FeatureFlagStatus
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>FeatureFlagStatus</code>.
   * @alias module:model/FeatureFlagStatus
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>FeatureFlagStatus</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagStatus} obj Optional instance to populate.
   * @return {module:model/FeatureFlagStatus} The populated <code>FeatureFlagStatus</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lastRequested')) {
        obj['lastRequested'] = ApiClient.convertToType(data['lastRequested'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} lastRequested
   */
  exports.prototype['lastRequested'] = undefined;
  /**
   * @member {Boolean} default
   */
  exports.prototype['default'] = undefined;



  return exports;
}));


