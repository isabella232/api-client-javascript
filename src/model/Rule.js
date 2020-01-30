/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.26
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
    define(['ApiClient', 'model/Clause', 'model/Rollout'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Clause'), require('./Rollout'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Rule = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Clause, root.LaunchDarklyApi.Rollout);
  }
}(this, function(ApiClient, Clause, Rollout) {
  'use strict';




  /**
   * The Rule model module.
   * @module model/Rule
   * @version 2.0.26
   */

  /**
   * Constructs a new <code>Rule</code>.
   * @alias module:model/Rule
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>Rule</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Rule} obj Optional instance to populate.
   * @return {module:model/Rule} The populated <code>Rule</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_id')) {
        obj['_id'] = ApiClient.convertToType(data['_id'], 'String');
      }
      if (data.hasOwnProperty('variation')) {
        obj['variation'] = ApiClient.convertToType(data['variation'], 'Number');
      }
      if (data.hasOwnProperty('rollout')) {
        obj['rollout'] = Rollout.constructFromObject(data['rollout']);
      }
      if (data.hasOwnProperty('clauses')) {
        obj['clauses'] = ApiClient.convertToType(data['clauses'], [Clause]);
      }
    }
    return obj;
  }

  /**
   * @member {String} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {Number} variation
   */
  exports.prototype['variation'] = undefined;
  /**
   * @member {module:model/Rollout} rollout
   */
  exports.prototype['rollout'] = undefined;
  /**
   * @member {Array.<module:model/Clause>} clauses
   */
  exports.prototype['clauses'] = undefined;



  return exports;
}));


