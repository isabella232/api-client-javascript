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
    root.LaunchDarklyApi.DestinationBody = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The DestinationBody model module.
   * @module model/DestinationBody
   * @version 3.8.0
   */

  /**
   * Constructs a new <code>DestinationBody</code>.
   * @alias module:model/DestinationBody
   * @class
   * @param name {String} A human-readable name for your data export destination.
   * @param kind {module:model/DestinationBody.KindEnum} The data export destination type. Available choices are kinesis, google-pubsub, mparticle, or segment.
   * @param config {Object} destination-specific configuration.
   */
  var exports = function(name, kind, config) {
    var _this = this;

    _this['name'] = name;
    _this['kind'] = kind;
    _this['config'] = config;

  };

  /**
   * Constructs a <code>DestinationBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/DestinationBody} obj Optional instance to populate.
   * @return {module:model/DestinationBody} The populated <code>DestinationBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('config')) {
        obj['config'] = ApiClient.convertToType(data['config'], Object);
      }
      if (data.hasOwnProperty('on')) {
        obj['on'] = ApiClient.convertToType(data['on'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * A human-readable name for your data export destination.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The data export destination type. Available choices are kinesis, google-pubsub, mparticle, or segment.
   * @member {module:model/DestinationBody.KindEnum} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * destination-specific configuration.
   * @member {Object} config
   */
  exports.prototype['config'] = undefined;
  /**
   * Whether the data export destination is on or not.
   * @member {Boolean} on
   */
  exports.prototype['on'] = undefined;


  /**
   * Allowed values for the <code>kind</code> property.
   * @enum {String}
   * @readonly
   */
  exports.KindEnum = {
    /**
     * value: "google-pubsub"
     * @const
     */
    "google-pubsub": "google-pubsub",
    /**
     * value: "kinesis"
     * @const
     */
    "kinesis": "kinesis",
    /**
     * value: "mparticle"
     * @const
     */
    "mparticle": "mparticle",
    /**
     * value: "segment"
     * @const
     */
    "segment": "segment"  };


  return exports;
}));


