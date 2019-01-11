/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.13
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
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.WebhookBody = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The WebhookBody model module.
   * @module model/WebhookBody
   * @version 2.0.13
   */

  /**
   * Constructs a new <code>WebhookBody</code>.
   * @alias module:model/WebhookBody
   * @class
   * @param url {String} The URL of the remote webhook.
   * @param sign {Boolean} If sign is false, the webhook will not include a signature header, and the secret can be omitted.
   * @param on {Boolean} Whether this webhook is enabled or not.
   */
  var exports = function(url, sign, on) {
    var _this = this;

    _this['url'] = url;

    _this['sign'] = sign;
    _this['on'] = on;

  };

  /**
   * Constructs a <code>WebhookBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/WebhookBody} obj Optional instance to populate.
   * @return {module:model/WebhookBody} The populated <code>WebhookBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('url')) {
        obj['url'] = ApiClient.convertToType(data['url'], 'String');
      }
      if (data.hasOwnProperty('secret')) {
        obj['secret'] = ApiClient.convertToType(data['secret'], 'String');
      }
      if (data.hasOwnProperty('sign')) {
        obj['sign'] = ApiClient.convertToType(data['sign'], 'Boolean');
      }
      if (data.hasOwnProperty('on')) {
        obj['on'] = ApiClient.convertToType(data['on'], 'Boolean');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
    }
    return obj;
  }

  /**
   * The URL of the remote webhook.
   * @member {String} url
   */
  exports.prototype['url'] = undefined;
  /**
   * If sign is true, and the secret attribute is omitted, LaunchDarkly will automatically generate a secret for you.
   * @member {String} secret
   */
  exports.prototype['secret'] = undefined;
  /**
   * If sign is false, the webhook will not include a signature header, and the secret can be omitted.
   * @member {Boolean} sign
   */
  exports.prototype['sign'] = undefined;
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



  return exports;
}));


