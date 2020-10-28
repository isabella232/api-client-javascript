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
    define(['ApiClient', 'model/Integration', 'model/IntegrationSubscription', 'model/Integrations', 'model/PatchOperation', 'model/SubscriptionBody', 'model/UsageError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Integration'), require('../model/IntegrationSubscription'), require('../model/Integrations'), require('../model/PatchOperation'), require('../model/SubscriptionBody'), require('../model/UsageError'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.IntegrationsApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.Integration, root.LaunchDarklyApi.IntegrationSubscription, root.LaunchDarklyApi.Integrations, root.LaunchDarklyApi.PatchOperation, root.LaunchDarklyApi.SubscriptionBody, root.LaunchDarklyApi.UsageError);
  }
}(this, function(ApiClient, Integration, IntegrationSubscription, Integrations, PatchOperation, SubscriptionBody, UsageError) {
  'use strict';

  /**
   * Integrations service.
   * @module api/IntegrationsApi
   * @version 3.8.0
   */

  /**
   * Constructs a new IntegrationsApi. 
   * @alias module:api/IntegrationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the deleteIntegrationSubscription operation.
     * @callback module:api/IntegrationsApi~deleteIntegrationSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete an integration subscription by ID.
     * @param {String} integrationKey The key used to specify the integration kind.
     * @param {String} integrationId The integration ID.
     * @param {module:api/IntegrationsApi~deleteIntegrationSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteIntegrationSubscription = function(integrationKey, integrationId, callback) {
      var postBody = null;

      // verify the required parameter 'integrationKey' is set
      if (integrationKey === undefined || integrationKey === null) {
        throw new Error("Missing the required parameter 'integrationKey' when calling deleteIntegrationSubscription");
      }

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling deleteIntegrationSubscription");
      }


      var pathParams = {
        'integrationKey': integrationKey,
        'integrationId': integrationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/integrations/{integrationKey}/{integrationId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIntegrationSubscription operation.
     * @callback module:api/IntegrationsApi~getIntegrationSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegrationSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a single integration subscription by ID.
     * @param {String} integrationKey The key used to specify the integration kind.
     * @param {String} integrationId The integration ID.
     * @param {module:api/IntegrationsApi~getIntegrationSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntegrationSubscription}
     */
    this.getIntegrationSubscription = function(integrationKey, integrationId, callback) {
      var postBody = null;

      // verify the required parameter 'integrationKey' is set
      if (integrationKey === undefined || integrationKey === null) {
        throw new Error("Missing the required parameter 'integrationKey' when calling getIntegrationSubscription");
      }

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling getIntegrationSubscription");
      }


      var pathParams = {
        'integrationKey': integrationKey,
        'integrationId': integrationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntegrationSubscription;

      return this.apiClient.callApi(
        '/integrations/{integrationKey}/{integrationId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIntegrationSubscriptions operation.
     * @callback module:api/IntegrationsApi~getIntegrationSubscriptionsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Integration} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all configured integrations of a given kind.
     * @param {String} integrationKey The key used to specify the integration kind.
     * @param {module:api/IntegrationsApi~getIntegrationSubscriptionsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Integration}
     */
    this.getIntegrationSubscriptions = function(integrationKey, callback) {
      var postBody = null;

      // verify the required parameter 'integrationKey' is set
      if (integrationKey === undefined || integrationKey === null) {
        throw new Error("Missing the required parameter 'integrationKey' when calling getIntegrationSubscriptions");
      }


      var pathParams = {
        'integrationKey': integrationKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Integration;

      return this.apiClient.callApi(
        '/integrations/{integrationKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIntegrations operation.
     * @callback module:api/IntegrationsApi~getIntegrationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Integrations} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a list of all configured audit log event integrations associated with this account.
     * @param {module:api/IntegrationsApi~getIntegrationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Integrations}
     */
    this.getIntegrations = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = Integrations;

      return this.apiClient.callApi(
        '/integrations', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the patchIntegrationSubscription operation.
     * @callback module:api/IntegrationsApi~patchIntegrationSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegrationSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Modify an integration subscription by ID.
     * @param {String} integrationKey The key used to specify the integration kind.
     * @param {String} integrationId The integration ID.
     * @param {Array.<module:model/PatchOperation>} patchDelta Requires a JSON Patch representation of the desired changes to the project. &#39;http://jsonpatch.com/&#39;
     * @param {module:api/IntegrationsApi~patchIntegrationSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntegrationSubscription}
     */
    this.patchIntegrationSubscription = function(integrationKey, integrationId, patchDelta, callback) {
      var postBody = patchDelta;

      // verify the required parameter 'integrationKey' is set
      if (integrationKey === undefined || integrationKey === null) {
        throw new Error("Missing the required parameter 'integrationKey' when calling patchIntegrationSubscription");
      }

      // verify the required parameter 'integrationId' is set
      if (integrationId === undefined || integrationId === null) {
        throw new Error("Missing the required parameter 'integrationId' when calling patchIntegrationSubscription");
      }

      // verify the required parameter 'patchDelta' is set
      if (patchDelta === undefined || patchDelta === null) {
        throw new Error("Missing the required parameter 'patchDelta' when calling patchIntegrationSubscription");
      }


      var pathParams = {
        'integrationKey': integrationKey,
        'integrationId': integrationId
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntegrationSubscription;

      return this.apiClient.callApi(
        '/integrations/{integrationKey}/{integrationId}', 'PATCH',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the postIntegrationSubscription operation.
     * @callback module:api/IntegrationsApi~postIntegrationSubscriptionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IntegrationSubscription} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new integration subscription of a given kind.
     * @param {String} integrationKey The key used to specify the integration kind.
     * @param {module:model/SubscriptionBody} subscriptionBody Create a new integration subscription.
     * @param {module:api/IntegrationsApi~postIntegrationSubscriptionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IntegrationSubscription}
     */
    this.postIntegrationSubscription = function(integrationKey, subscriptionBody, callback) {
      var postBody = subscriptionBody;

      // verify the required parameter 'integrationKey' is set
      if (integrationKey === undefined || integrationKey === null) {
        throw new Error("Missing the required parameter 'integrationKey' when calling postIntegrationSubscription");
      }

      // verify the required parameter 'subscriptionBody' is set
      if (subscriptionBody === undefined || subscriptionBody === null) {
        throw new Error("Missing the required parameter 'subscriptionBody' when calling postIntegrationSubscription");
      }


      var pathParams = {
        'integrationKey': integrationKey
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['Token'];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = IntegrationSubscription;

      return this.apiClient.callApi(
        '/integrations/{integrationKey}', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));