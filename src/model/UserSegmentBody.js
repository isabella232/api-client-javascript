/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.2
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.UserSegmentBody = factory(root.LaunchDarklyRestApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The UserSegmentBody model module.
   * @module model/UserSegmentBody
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>UserSegmentBody</code>.
   * @alias module:model/UserSegmentBody
   * @class
   * @param name {String} A human-friendly name for the user segment.
   * @param key {String} A unique key that will be used to reference the user segment in feature flags.
   */
  var exports = function(name, key) {
    var _this = this;

    _this['name'] = name;
    _this['key'] = key;


  };

  /**
   * Constructs a <code>UserSegmentBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSegmentBody} obj Optional instance to populate.
   * @return {module:model/UserSegmentBody} The populated <code>UserSegmentBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * A human-friendly name for the user segment.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A unique key that will be used to reference the user segment in feature flags.
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * A description for the user segment.
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * Tags for the user segment.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));

