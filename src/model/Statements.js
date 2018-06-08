/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 2.0.2
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
    define(['ApiClient', 'model/Statement'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Statement'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.Statements = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.Statement);
  }
}(this, function(ApiClient, Statement) {
  'use strict';




  /**
   * The Statements model module.
   * @module model/Statements
   * @version 2.0.2
   */

  /**
   * Constructs a new <code>Statements</code>.
   * @alias module:model/Statements
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
   * Constructs a <code>Statements</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Statements} obj Optional instance to populate.
   * @return {module:model/Statements} The populated <code>Statements</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      ApiClient.constructFromObject(data, obj, 'Statement');

    }
    return obj;
  }




  return exports;
}));

