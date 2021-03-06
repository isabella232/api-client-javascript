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
    define(['ApiClient', 'model/Clause'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Clause'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.UserSegmentRule = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Clause);
  }
}(this, function(ApiClient, Clause) {
  'use strict';




  /**
   * The UserSegmentRule model module.
   * @module model/UserSegmentRule
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>UserSegmentRule</code>.
   * @alias module:model/UserSegmentRule
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>UserSegmentRule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/UserSegmentRule} obj Optional instance to populate.
   * @return {module:model/UserSegmentRule} The populated <code>UserSegmentRule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('clauses')) {
        obj['clauses'] = ApiClient.convertToType(data['clauses'], [Clause]);
      }
      if (data.hasOwnProperty('weight')) {
        obj['weight'] = ApiClient.convertToType(data['weight'], 'Number');
      }
      if (data.hasOwnProperty('bucketBy')) {
        obj['bucketBy'] = ApiClient.convertToType(data['bucketBy'], 'String');
      }
    }
    return obj;
  }

  /**
   * @member {Array.<module:model/Clause>} clauses
   */
  exports.prototype['clauses'] = undefined;
  /**
   * @member {Number} weight
   */
  exports.prototype['weight'] = undefined;
  /**
   * @member {String} bucketBy
   */
  exports.prototype['bucketBy'] = undefined;



  return exports;
}));


