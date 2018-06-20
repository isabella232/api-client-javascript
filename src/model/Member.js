/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.3
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Id', 'model/Links', 'model/Role'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Id'), require('./Links'), require('./Role'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.Member = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.Id, root.LaunchDarklyRestApi.Links, root.LaunchDarklyRestApi.Role);
  }
}(this, function(ApiClient, Id, Links, Role) {
  'use strict';




  /**
   * The Member model module.
   * @module model/Member
   * @version 2.0.3
   */

  /**
   * Constructs a new <code>Member</code>.
   * @alias module:model/Member
   * @class
   */
  var exports = function() {
    var _this = this;








  };

  /**
   * Constructs a <code>Member</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Member} obj Optional instance to populate.
   * @return {module:model/Member} The populated <code>Member</code> instance.
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
      if (data.hasOwnProperty('role')) {
        obj['role'] = Role.constructFromObject(data['role']);
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('_pendingInvite')) {
        obj['_pendingInvite'] = ApiClient.convertToType(data['_pendingInvite'], 'Boolean');
      }
      if (data.hasOwnProperty('isBeta')) {
        obj['isBeta'] = ApiClient.convertToType(data['isBeta'], 'Boolean');
      }
      if (data.hasOwnProperty('customRoles')) {
        obj['customRoles'] = ApiClient.convertToType(data['customRoles'], [Id]);
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
   * @member {module:model/Role} role
   */
  exports.prototype['role'] = undefined;
  /**
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * @member {Boolean} _pendingInvite
   */
  exports.prototype['_pendingInvite'] = undefined;
  /**
   * @member {Boolean} isBeta
   */
  exports.prototype['isBeta'] = undefined;
  /**
   * @member {Array.<module:model/Id>} customRoles
   */
  exports.prototype['customRoles'] = undefined;



  return exports;
}));


