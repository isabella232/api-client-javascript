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
    define(['ApiClient', 'model/Links', 'model/Token'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Links'), require('./Token'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Tokens = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Links, root.LaunchDarklyApi.Token);
  }
}(this, function(ApiClient, Links, Token) {
  'use strict';




  /**
   * The Tokens model module.
   * @module model/Tokens
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>Tokens</code>.
   * @alias module:model/Tokens
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Tokens</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Tokens} obj Optional instance to populate.
   * @return {module:model/Tokens} The populated <code>Tokens</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [Token]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Array.<module:model/Token>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


