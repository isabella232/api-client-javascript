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
    define(['ApiClient', 'model/ClientSideAvailability', 'model/Environment', 'model/Id', 'model/Links'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ClientSideAvailability'), require('./Environment'), require('./Id'), require('./Links'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Project = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.ClientSideAvailability, root.LaunchDarklyApi.Environment, root.LaunchDarklyApi.Id, root.LaunchDarklyApi.Links);
  }
}(this, function(ApiClient, ClientSideAvailability, Environment, Id, Links) {
  'use strict';




  /**
   * The Project model module.
   * @module model/Project
   * @version 3.9.0
   */

  /**
   * Constructs a new <code>Project</code>.
   * @alias module:model/Project
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Project</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Project} obj Optional instance to populate.
   * @return {module:model/Project} The populated <code>Project</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('_links')) {
        obj['_links'] = Links.constructFromObject(data['_links']);
      }
      if (data.hasOwnProperty('_id')) {
        obj['_id'] = Id.constructFromObject(data['_id']);
      }
      if (data.hasOwnProperty('key')) {
        obj['key'] = ApiClient.convertToType(data['key'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('includeInSnippetByDefault')) {
        obj['includeInSnippetByDefault'] = ApiClient.convertToType(data['includeInSnippetByDefault'], 'Boolean');
      }
      if (data.hasOwnProperty('environments')) {
        obj['environments'] = ApiClient.convertToType(data['environments'], [Environment]);
      }
      if (data.hasOwnProperty('tags')) {
        obj['tags'] = ApiClient.convertToType(data['tags'], ['String']);
      }
      if (data.hasOwnProperty('defaultClientSideAvailability')) {
        obj['defaultClientSideAvailability'] = ClientSideAvailability.constructFromObject(data['defaultClientSideAvailability']);
      }
    }
    return obj;
  }

  /**
   * @member {module:model/Links} _links
   */
  exports.prototype['_links'] = undefined;
  /**
   * @member {module:model/Id} _id
   */
  exports.prototype['_id'] = undefined;
  /**
   * @member {String} key
   */
  exports.prototype['key'] = undefined;
  /**
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * @member {Boolean} includeInSnippetByDefault
   */
  exports.prototype['includeInSnippetByDefault'] = undefined;
  /**
   * @member {Array.<module:model/Environment>} environments
   */
  exports.prototype['environments'] = undefined;
  /**
   * An array of tags for this project.
   * @member {Array.<String>} tags
   */
  exports.prototype['tags'] = undefined;
  /**
   * @member {module:model/ClientSideAvailability} defaultClientSideAvailability
   */
  exports.prototype['defaultClientSideAvailability'] = undefined;



  return exports;
}));


