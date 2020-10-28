/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.8.0
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
    root.LaunchDarklyApi.DestinationGooglePubSub = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DestinationGooglePubSub model module.
   * @module model/DestinationGooglePubSub
   * @version 3.8.0
   */

  /**
   * Constructs a new <code>DestinationGooglePubSub</code>.
   * @alias module:model/DestinationGooglePubSub
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>DestinationGooglePubSub</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DestinationGooglePubSub} obj Optional instance to populate.
   * @return {module:model/DestinationGooglePubSub} The populated <code>DestinationGooglePubSub</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('project')) {
        obj['project'] = ApiClient.convertToType(data['project'], 'String');
      }
      if (data.hasOwnProperty('topic')) {
        obj['topic'] = ApiClient.convertToType(data['topic'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {String} project
   */
  exports.prototype['project'] = undefined;
  /**
   * @member {String} topic
   */
  exports.prototype['topic'] = undefined;



  return exports;
}));


