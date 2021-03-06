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
    define(['ApiClient', 'model/Fallthrough', 'model/Prerequisite', 'model/Rule', 'model/Target'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Fallthrough'), require('./Prerequisite'), require('./Rule'), require('./Target'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.FeatureFlagConfig = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Fallthrough, root.LaunchDarklyApi.Prerequisite, root.LaunchDarklyApi.Rule, root.LaunchDarklyApi.Target);
  }
}(this, function(ApiClient, Fallthrough, Prerequisite, Rule, Target) {
  'use strict';




  /**
   * The FeatureFlagConfig model module.
   * @module model/FeatureFlagConfig
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>FeatureFlagConfig</code>.
   * @alias module:model/FeatureFlagConfig
   * @class
   */
  var exports = function() {
    var _this = this;














  };

  /**
   * Constructs a <code>FeatureFlagConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlagConfig} obj Optional instance to populate.
   * @return {module:model/FeatureFlagConfig} The populated <code>FeatureFlagConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('on')) {
        obj['on'] = ApiClient.convertToType(data['on'], 'Boolean');
      }
      if (data.hasOwnProperty('archived')) {
        obj['archived'] = ApiClient.convertToType(data['archived'], 'Boolean');
      }
      if (data.hasOwnProperty('salt')) {
        obj['salt'] = ApiClient.convertToType(data['salt'], 'String');
      }
      if (data.hasOwnProperty('sel')) {
        obj['sel'] = ApiClient.convertToType(data['sel'], 'String');
      }
      if (data.hasOwnProperty('lastModified')) {
        obj['lastModified'] = ApiClient.convertToType(data['lastModified'], 'Number');
      }
      if (data.hasOwnProperty('version')) {
        obj['version'] = ApiClient.convertToType(data['version'], 'Number');
      }
      if (data.hasOwnProperty('targets')) {
        obj['targets'] = ApiClient.convertToType(data['targets'], [Target]);
      }
      if (data.hasOwnProperty('rules')) {
        obj['rules'] = ApiClient.convertToType(data['rules'], [Rule]);
      }
      if (data.hasOwnProperty('fallthrough')) {
        obj['fallthrough'] = Fallthrough.constructFromObject(data['fallthrough']);
      }
      if (data.hasOwnProperty('offVariation')) {
        obj['offVariation'] = ApiClient.convertToType(data['offVariation'], 'Number');
      }
      if (data.hasOwnProperty('prerequisites')) {
        obj['prerequisites'] = ApiClient.convertToType(data['prerequisites'], [Prerequisite]);
      }
      if (data.hasOwnProperty('trackEvents')) {
        obj['trackEvents'] = ApiClient.convertToType(data['trackEvents'], 'Boolean');
      }
      if (data.hasOwnProperty('trackEventsFallthrough')) {
        obj['trackEventsFallthrough'] = ApiClient.convertToType(data['trackEventsFallthrough'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * @member {Boolean} on
   */
  exports.prototype['on'] = undefined;
  /**
   * @member {Boolean} archived
   */
  exports.prototype['archived'] = undefined;
  /**
   * @member {String} salt
   */
  exports.prototype['salt'] = undefined;
  /**
   * @member {String} sel
   */
  exports.prototype['sel'] = undefined;
  /**
   * @member {Number} lastModified
   */
  exports.prototype['lastModified'] = undefined;
  /**
   * @member {Number} version
   */
  exports.prototype['version'] = undefined;
  /**
   * @member {Array.<module:model/Target>} targets
   */
  exports.prototype['targets'] = undefined;
  /**
   * @member {Array.<module:model/Rule>} rules
   */
  exports.prototype['rules'] = undefined;
  /**
   * @member {module:model/Fallthrough} fallthrough
   */
  exports.prototype['fallthrough'] = undefined;
  /**
   * @member {Number} offVariation
   */
  exports.prototype['offVariation'] = undefined;
  /**
   * @member {Array.<module:model/Prerequisite>} prerequisites
   */
  exports.prototype['prerequisites'] = undefined;
  /**
   * Set to true to send detailed event information for this flag.
   * @member {Boolean} trackEvents
   */
  exports.prototype['trackEvents'] = undefined;
  /**
   * Set to true to send detailed event information when targeting is enabled but no individual targeting rule is matched.
   * @member {Boolean} trackEventsFallthrough
   */
  exports.prototype['trackEventsFallthrough'] = undefined;



  return exports;
}));


