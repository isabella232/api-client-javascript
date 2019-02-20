/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.14
 * Contact: support@launchdarkly.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.0
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Action'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Action'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.Actions = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Action);
  }
}(this, function(ApiClient, Action) {
  'use strict';




  /**
   * The Actions model module.
   * @module model/Actions
   * @version 2.0.14
   */

  /**
   * Constructs a new <code>Actions</code>.
   * @alias module:model/Actions
   * @class
   * @extends Array
   */
  var exports = function() {
    var _this = this;
    _this = new Array();
    Object.setPrototypeOf(_this, exports);

    return _this;
  };

  /**
   * Constructs a <code>Actions</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Actions} obj Optional instance to populate.
   * @return {module:model/Actions} The populated <code>Actions</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Action');

    }
    return obj;
  }




  return exports;
}));


