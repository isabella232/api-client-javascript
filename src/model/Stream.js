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
    define(['ApiClient', 'model/StreamUsageLinks', 'model/StreamUsageMetadata', 'model/StreamUsageSeries'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./StreamUsageLinks'), require('./StreamUsageMetadata'), require('./StreamUsageSeries'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Stream = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.StreamUsageLinks, root.LaunchDarklyApi.StreamUsageMetadata, root.LaunchDarklyApi.StreamUsageSeries);
  }
}(this, function(ApiClient, StreamUsageLinks, StreamUsageMetadata, StreamUsageSeries) {
  'use strict';




  /**
   * The Stream model module.
   * @module model/Stream
   * @version 3.4.0
   */

  /**
   * Constructs a new <code>Stream</code>.
   * @alias module:model/Stream
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>Stream</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Stream} obj Optional instance to populate.
   * @return {module:model/Stream} The populated <code>Stream</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = StreamUsageLinks.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('metadata')) {
        obj['metadata'] = ApiClient.convertToType(data['metadata'], [StreamUsageMetadata]);
      }
      if (data.hasOwnProperty('series')) {
        obj['series'] = ApiClient.convertToType(data['series'], [StreamUsageSeries]);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/StreamUsageLinks} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {Array.<module:model/StreamUsageMetadata>} metadata
   */
  exports.prototype['metadata'] = undefined;
  /**
   * @member {Array.<module:model/StreamUsageSeries>} series
   */
  exports.prototype['series'] = undefined;



  return exports;
}));


