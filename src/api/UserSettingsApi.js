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
    define(['ApiClient', 'model/UserFlagSetting', 'model/UserFlagSettings', 'model/UserSettingsBody'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/UserFlagSetting'), require('../model/UserFlagSettings'), require('../model/UserSettingsBody'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyRestApi) {
      root.LaunchDarklyRestApi = {};
    }
    root.LaunchDarklyRestApi.UserSettingsApi = factory(root.LaunchDarklyRestApi.ApiClient, root.LaunchDarklyRestApi.UserFlagSetting, root.LaunchDarklyRestApi.UserFlagSettings, root.LaunchDarklyRestApi.UserSettingsBody);
  }
}(this, function(ApiClient, UserFlagSetting, UserFlagSettings, UserSettingsBody) {
  'use strict';

  /**
   * UserSettings service.
   * @module api/UserSettingsApi
   * @version 2.0.0
   */

  /**
   * Constructs a new UserSettingsApi. 
   * @alias module:api/UserSettingsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getUserFlagSetting operation.
     * @callback module:api/UserSettingsApi~getUserFlagSettingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFlagSetting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a user by key.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key
     * @param {String} userKey The user&#39;s key
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {module:api/UserSettingsApi~getUserFlagSettingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFlagSetting}
     */
    this.getUserFlagSetting = function(projectKey, environmentKey, userKey, featureFlagKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getUserFlagSetting");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getUserFlagSetting");
      }

      // verify the required parameter 'userKey' is set
      if (userKey === undefined || userKey === null) {
        throw new Error("Missing the required parameter 'userKey' when calling getUserFlagSetting");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling getUserFlagSetting");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userKey': userKey,
        'featureFlagKey': featureFlagKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserFlagSetting;

      return this.apiClient.callApi(
        '/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUserFlagSettings operation.
     * @callback module:api/UserSettingsApi~getUserFlagSettingsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UserFlagSettings} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists the current flag settings for a given user.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key
     * @param {String} userKey The user&#39;s key
     * @param {module:api/UserSettingsApi~getUserFlagSettingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UserFlagSettings}
     */
    this.getUserFlagSettings = function(projectKey, environmentKey, userKey, callback) {
      var postBody = null;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling getUserFlagSettings");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling getUserFlagSettings");
      }

      // verify the required parameter 'userKey' is set
      if (userKey === undefined || userKey === null) {
        throw new Error("Missing the required parameter 'userKey' when calling getUserFlagSettings");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userKey': userKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = UserFlagSettings;

      return this.apiClient.callApi(
        '/users/{projectKey}/{environmentKey}/{userKey}/flags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the putFlagSetting operation.
     * @callback module:api/UserSettingsApi~putFlagSettingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Specifically enable or disable a feature flag for a user based on their key.
     * @param {String} projectKey The project key, used to tie the flags together under one project so they can be managed together.
     * @param {String} environmentKey The environment key
     * @param {String} userKey The user&#39;s key
     * @param {String} featureFlagKey The feature flag&#39;s key. The key identifies the flag in your code.
     * @param {module:model/UserSettingsBody} userSettingsBody 
     * @param {module:api/UserSettingsApi~putFlagSettingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.putFlagSetting = function(projectKey, environmentKey, userKey, featureFlagKey, userSettingsBody, callback) {
      var postBody = userSettingsBody;

      // verify the required parameter 'projectKey' is set
      if (projectKey === undefined || projectKey === null) {
        throw new Error("Missing the required parameter 'projectKey' when calling putFlagSetting");
      }

      // verify the required parameter 'environmentKey' is set
      if (environmentKey === undefined || environmentKey === null) {
        throw new Error("Missing the required parameter 'environmentKey' when calling putFlagSetting");
      }

      // verify the required parameter 'userKey' is set
      if (userKey === undefined || userKey === null) {
        throw new Error("Missing the required parameter 'userKey' when calling putFlagSetting");
      }

      // verify the required parameter 'featureFlagKey' is set
      if (featureFlagKey === undefined || featureFlagKey === null) {
        throw new Error("Missing the required parameter 'featureFlagKey' when calling putFlagSetting");
      }

      // verify the required parameter 'userSettingsBody' is set
      if (userSettingsBody === undefined || userSettingsBody === null) {
        throw new Error("Missing the required parameter 'userSettingsBody' when calling putFlagSetting");
      }


      var pathParams = {
        'projectKey': projectKey,
        'environmentKey': environmentKey,
        'userKey': userKey,
        'featureFlagKey': featureFlagKey
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
