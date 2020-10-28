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
    define(['ApiClient', 'model/Id', 'model/Member', 'model/Policy'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id'), require('./Member'), require('./Policy'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.RelayProxyConfig = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.Member, root.LaunchDarklyApi.Policy);
  }
}(this, function(ApiClient, Id, Member, Policy) {
  'use strict';




  /**
   * The RelayProxyConfig model module.
   * @module model/RelayProxyConfig
   * @version 3.8.0
   */

  /**
   * Constructs a new <code>RelayProxyConfig</code>.
   * @alias module:model/RelayProxyConfig
   * @class
   * @param id {module:model/Id} 
   * @param creator {module:model/Member} 
   * @param name {String} A human-friendly name for the relay proxy configuration
   * @param policy {Array.<module:model/Policy>} 
   * @param displayKey {String} The last 4 digits of the unique secret key for this relay proxy configuration
   * @param creationDate {Number} A unix epoch time in milliseconds specifying the creation time of this relay proxy configuration
   * @param lastModified {Number} A unix epoch time in milliseconds specifying the last time this relay proxy configuration was modified
   */
  var exports = function(id, creator, name, policy, displayKey, creationDate, lastModified) {
    var _this = this;

    _this['_id'] = id;
    _this['_creator'] = creator;
    _this['name'] = name;
    _this['policy'] = policy;

    _this['displayKey'] = displayKey;
    _this['creationDate'] = creationDate;
    _this['lastModified'] = lastModified;
  };

  /**
   * Constructs a <code>RelayProxyConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RelayProxyConfig} obj Optional instance to populate.
   * @return {module:model/RelayProxyConfig} The populated <code>RelayProxyConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = Id.constructFromObject(data['_id']);
      }
      if (data.hasOwnProperty('_creator')) {
        obj['_creator'] = Member.constructFromObject(data['_creator']);
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('policy')) {
        obj['policy'] = ApiClient.convertToType(data['policy'], [Policy]);
      }
      if (data.hasOwnProperty('fullKey')) {
        obj['fullKey'] = ApiClient.convertToType(data['fullKey'], 'String');
      }
      if (data.hasOwnProperty('displayKey')) {
        obj['displayKey'] = ApiClient.convertToType(data['displayKey'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Number');
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Id} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {module:model/Member} _creator
   */
  exports.prototype['_creator'] = undefined;
  /**
   * A human-friendly name for the relay proxy configuration
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/Policy>} policy
   */
  exports.prototype['policy'] = undefined;
  /**
   * Full secret key. Only included if creating or resetting the relay proxy configuration
   * @member {String} fullKey
   */
  exports.prototype['fullKey'] = undefined;
  /**
   * The last 4 digits of the unique secret key for this relay proxy configuration
   * @member {String} displayKey
   */
  exports.prototype['displayKey'] = undefined;
  /**
   * A unix epoch time in milliseconds specifying the creation time of this relay proxy configuration
   * @member {Number} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * A unix epoch time in milliseconds specifying the last time this relay proxy configuration was modified
   * @member {Number} lastModified
   */
  exports.prototype['lastModified'] = undefined;



  return exports;
}));


