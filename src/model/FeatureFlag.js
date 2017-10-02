/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/FeatureFlagConfig', 'model/Links', 'model/Member', 'model/Variation'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./FeatureFlagConfig'), require('./Links'), require('./Member'), require('./Variation'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.FeatureFlag = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.FeatureFlagConfig, root.LaunchDarklyRestApi.Links, root.LaunchDarklyRestApi.Member, root.LaunchDarklyRestApi.Variation);
  }
}(this, function(ApiClient, FeatureFlagConfig, Links, Member, Variation) {
  'use strict';




  /**
   * The FeatureFlag model module.
   * @module model/FeatureFlag
   * @version 2.0.0
   */

  /**
   * Constructs a new <code>FeatureFlag</code>.
   * @alias module:model/FeatureFlag
   * @class
   */
  var exports = function() {
    var _this = this;













  };

  /**
   * Constructs a <code>FeatureFlag</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/FeatureFlag} obj Optional instance to populate.
   * @return {module:model/FeatureFlag} The populated <code>FeatureFlag</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('kind')) {
        obj['kind'] = ApiClient.convertToType(data['kind'], 'String');
      }
      if (data.hasOwnProperty('creationDate')) {
        obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Number');
      }
      if (data.hasOwnProperty('includeInSnippet')) {
        obj['includeInSnippet'] = ApiClient.convertToType(data['includeInSnippet'], 'Boolean');
      }
      if (data.hasOwnProperty('temporary')) {
        obj['temporary'] = ApiClient.convertToType(data['temporary'], 'Boolean');
      }
      if (data.hasOwnProperty('maintainerId')) {
        obj['maintainerId'] = ApiClient.convertToType(data['maintainerId'], 'String');
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('variations')) {
        obj['variations'] = ApiClient.convertToType(data['variations'], [Variation]);
      }
      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_maintainer')) {
        obj['_maintainer'] = Member.constructFromObject(data['_maintainer']);
      }
      if (data.hasOwnProperty('environments')) {
        obj['environments'] = ApiClient.convertToType(data['environments'], {'String': FeatureFlagConfig});
      }
    }
    return obj;
  }

  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {String} kind
   */
  exports.prototype['kind'] = undefined;
  /**
   * @member {Number} creationDate
   */
  exports.prototype['creationDate'] = undefined;
  /**
   * @member {Boolean} includeInSnippet
   */
  exports.prototype['includeInSnippet'] = undefined;
  /**
   * @member {Boolean} temporary
   */
  exports.prototype['temporary'] = undefined;
  /**
   * @member {String} maintainerId
   */
  exports.prototype['maintainerId'] = undefined;
  /**
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {Array.<module:model/Variation>} variations
   */
  exports.prototype['variations'] = undefined;
  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/Member} _maintainer
   */
  exports.prototype['_maintainer'] = undefined;
  /**
   * @member {Object.<String, module:model/FeatureFlagConfig>} environments
   */
  exports.prototype['environments'] = undefined;



  return exports;
}));


