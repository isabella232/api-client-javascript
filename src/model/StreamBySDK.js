/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.6.0
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
    define(['ApiClient', 'model/StreamBySDKLinks', 'model/StreamBySDKLinksMetadata', 'model/StreamUsageSeries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StreamBySDKLinks'), require('./StreamBySDKLinksMetadata'), require('./StreamUsageSeries'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.StreamBySDK = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.StreamBySDKLinks, root.LaunchDarklyApi.StreamBySDKLinksMetadata, root.LaunchDarklyApi.StreamUsageSeries);
  }
}(this, function(ApiClient, StreamBySDKLinks, StreamBySDKLinksMetadata, StreamUsageSeries) {
  'use strict';




  /**
   * The StreamBySDK model module.
   * @module model/StreamBySDK
   * @version 3.6.0
   */

  /**
   * Constructs a new <code>StreamBySDK</code>.
   * @alias module:model/StreamBySDK
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>StreamBySDK</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/StreamBySDK} obj Optional instance to populate.
   * @return {module:model/StreamBySDK} The populated <code>StreamBySDK</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = StreamBySDKLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], [StreamBySDKLinksMetadata]);
      }
      if (data.hasOwnProperty('series')) {
        obj['series'] = ApiClient.convertToType(data['series'], [StreamUsageSeries]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StreamBySDKLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Array.<module:model/StreamBySDKLinksMetadata>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Array.<module:model/StreamUsageSeries>} series
   */
  exports.prototype['series'] = undefined;



  return exports;
}));


