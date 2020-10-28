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
    define(['ApiClient', 'model/IntegrationSubscription'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IntegrationSubscription'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Integrations = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.IntegrationSubscription);
  }
}(this, function(ApiClient, IntegrationSubscription) {
  'use strict';




  /**
   * The Integrations model module.
   * @module model/Integrations
   * @version 3.8.0
   */

  /**
   * Constructs a new <code>Integrations</code>.
   * @alias module:model/Integrations
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>Integrations</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Integrations} obj Optional instance to populate.
   * @return {module:model/Integrations} The populated <code>Integrations</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = ApiClient.convertToType(data['_links'], Object);
      }
      if (data.hasOwnProperty('items')) {
        obj['items'] = ApiClient.convertToType(data['items'], [IntegrationSubscription]);
      }
    }
    return obj;
  }

  /**
   * A mapping of integration types to their respective API endpoints.
   * @member {Object} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Array.<module:model/IntegrationSubscription>} items
   */
  exports.prototype['items'] = undefined;



  return exports;
}));


