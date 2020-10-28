/**
 * LaunchDarkly REST API
 * Build custom integrations with the LaunchDarkly REST API
 *
 * OpenAPI spec version: 3.8.0
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
    define(['ApiClient', 'model/SemanticPatchInstruction'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SemanticPatchInstruction'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.SemanticPatchOperation = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.SemanticPatchInstruction);
  }
}(this, function(ApiClient, SemanticPatchInstruction) {
  'use strict';




  /**
   * The SemanticPatchOperation model module.
   * @module model/SemanticPatchOperation
   * @version 3.8.0
   */

  /**
   * Constructs a new <code>SemanticPatchOperation</code>.
   * @alias module:model/SemanticPatchOperation
   * @class
   * @param instructions {module:model/SemanticPatchInstruction} 
   */
  var exports = function(instructions) {
    var _this = this;


    _this['instructions'] = instructions;
  };

  /**
   * Constructs a <code>SemanticPatchOperation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SemanticPatchOperation} obj Optional instance to populate.
   * @return {module:model/SemanticPatchOperation} The populated <code>SemanticPatchOperation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('comment')) {
        obj['comment'] = ApiClient.convertToType(data['comment'], 'String');
      }
      if (data.hasOwnProperty('instructions')) {
        obj['instructions'] = SemanticPatchInstruction.constructFromObject(data['instructions']);
      }
    }
    return obj;
  }

  /**
   * @member {String} comment
   */
  exports.prototype['comment'] = undefined;
  /**
   * @member {module:model/SemanticPatchInstruction} instructions
   */
  exports.prototype['instructions'] = undefined;



  return exports;
}));


