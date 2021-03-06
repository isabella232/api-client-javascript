/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.9.0
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
    define(['ApiClient', 'model/UnboundedSegmentTargetChanges'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./UnboundedSegmentTargetChanges'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UnboundedSegmentTargetsBody = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.UnboundedSegmentTargetChanges);
  }
}(this, function(ApiClient, UnboundedSegmentTargetChanges) {
  'use strict';




  /**
   * The UnboundedSegmentTargetsBody model module.
   * @module model/UnboundedSegmentTargetsBody
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>UnboundedSegmentTargetsBody</code>.
   * @alias module:model/UnboundedSegmentTargetsBody
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>UnboundedSegmentTargetsBody</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UnboundedSegmentTargetsBody} obj Optional instance to populate.
   * @return {module:model/UnboundedSegmentTargetsBody} The populated <code>UnboundedSegmentTargetsBody</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('included')) {
        obj['included'] = UnboundedSegmentTargetChanges.constructFromObject(data['included']);
      }
      if (data.hasOwnProperty('excluded')) {
        obj['excluded'] = UnboundedSegmentTargetChanges.constructFromObject(data['excluded']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/UnboundedSegmentTargetChanges} included
   */
  exports.prototype['included'] = undefined;
  /**
   * @member {module:model/UnboundedSegmentTargetChanges} excluded
   */
  exports.prototype['excluded'] = undefined;



  return exports;
}));


