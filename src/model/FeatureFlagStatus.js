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
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagStatus = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links);
  }
}(this, function(ApiClient, Links) {
  'use strict';




  /**
   * The FeatureFlagStatus model module.
   * @module model/FeatureFlagStatus
   * @version 3.4.0
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

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('lastRequested')) {
        obj['lastRequested'] = ApiClient.convertToType(data['lastRequested'], 'String');
      }
      if (data.hasOwnProperty('default')) {
        obj['default'] = ApiClient.convertToType(data['default'], Object);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
    }
    return obj;
  }

  /**
   * | Name     | Description | | --------:| ----------- | | new      | the feature flag was created within the last 7 days, and has not been requested yet | | active   | the feature flag was requested by your servers or clients within the last 7 days | | inactive | the feature flag was created more than 7 days ago, and hasn't been requested by your servers or clients within the past 7 days | | launched | one variation of the feature flag has been rolled out to all your users for at least 7 days | 
   * @member {module:model/FeatureFlagStatus.NameEnum} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} lastRequested
   */
  exports.prototype['lastRequested'] = undefined;
  /**
   * @member {Object} default
   */
  exports.prototype['default'] = undefined;
  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;


  /**
   * Allowed values for the <code>name</code> property.
   * @enum {String}
   * @readonly
   */
  exports.NameEnum = {
    /**
     * value: "new"
     * @const
     */
    "new": "new",
    /**
     * value: "active"
     * @const
     */
    "active": "active",
    /**
     * value: "inactive"
     * @const
     */
    "inactive": "inactive",
    /**
     * value: "launched"
     * @const
     */
    "launched": "launched"  };


  return exports;
}));


