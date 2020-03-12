/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.31
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Role = factory(root.LaunchDarklyApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';


  /**
   * Enum class Role.
   * @enum {}
   * @readonly
   */
  var exports = {
    /**
     * value: "writer"
     * @const
     */
    "writer": "writer",
    /**
     * value: "reader"
     * @const
     */
    "reader": "reader",
    /**
     * value: "admin"
     * @const
     */
    "admin": "admin",
    /**
     * value: "owner"
     * @const
     */
    "owner": "owner"  };

  /**
   * Returns a <code>Role</code> enum value from a Javascript object name.
   * @param {Object} data The plain JavaScript object containing the name of the enum value.
   * @return {module:model/Role} The enum <code>Role</code> value.
   */
  exports.constructFromObject = function(object) {
    return object;
  }

  return exports;
}));


