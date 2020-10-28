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
    define(['ApiClient', 'model/Id', 'model/Links', 'model/Statement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id'), require('./Links'), require('./Statement'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Webhook = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.Statement);
  }
}(this, function(ApiClient, Id, Links, Statement) {
  'use strict';




  /**
   * The Webhook model module.
   * @module model/Webhook
   * @version 3.8.0
   */

  /**
   * Constructs a new <code>Webhook</code>.
   * @alias module:model/Webhook
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Webhook</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Webhook} obj Optional instance to populate.
   * @return {module:model/Webhook} The populated <code>Webhook</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = Id.constructFromObject(data['_id']);
      }
      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('on')) {
        obj['on'] = ApiClient.convertToType(data['on'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('statements')) {
        obj['statements'] = ApiClient.convertToType(data['statements'], [Statement]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/Id} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * The URL of the remote webhook.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * If defined, the webhooks post request will include a X-LD-Signature header whose value will contain an HMAC SHA256 hex digest of the webhook payload, using the secret as the key.
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * Whether this webhook is enabled or not.
   * @member {Boolean} on
   */
  exports.prototype['on'] = undefined;
  /**
   * The name of the webhook.
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Array.<module:model/Statement>} statements
   */
  exports.prototype['statements'] = undefined;
  /**
   * Tags assigned to this webhook.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;



  return exports;
}));


