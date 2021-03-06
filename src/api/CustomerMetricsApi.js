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
    define(['ApiClient', 'model/EvaluationUsageError', 'model/Events', 'model/MAU', 'model/MAUbyCategory', 'model/Stream', 'model/StreamBySDK', 'model/StreamSDKVersion', 'model/StreamUsageError', 'model/Streams', 'model/Usage', 'model/UsageError'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/EvaluationUsageError'), require('../model/Events'), require('../model/MAU'), require('../model/MAUbyCategory'), require('../model/Stream'), require('../model/StreamBySDK'), require('../model/StreamSDKVersion'), require('../model/StreamUsageError'), require('../model/Streams'), require('../model/Usage'), require('../model/UsageError'));
  } else {
    // Browser globals (root is window)
    if (!root.LaunchDarklyApi) {
      root.LaunchDarklyApi = {};
    }
    root.LaunchDarklyApi.CustomerMetricsApi = factory(root.LaunchDarklyApi.ApiClient, root.LaunchDarklyApi.EvaluationUsageError, root.LaunchDarklyApi.Events, root.LaunchDarklyApi.MAU, root.LaunchDarklyApi.MAUbyCategory, root.LaunchDarklyApi.Stream, root.LaunchDarklyApi.StreamBySDK, root.LaunchDarklyApi.StreamSDKVersion, root.LaunchDarklyApi.StreamUsageError, root.LaunchDarklyApi.Streams, root.LaunchDarklyApi.Usage, root.LaunchDarklyApi.UsageError);
  }
}(this, function(ApiClient, EvaluationUsageError, Events, MAU, MAUbyCategory, Stream, StreamBySDK, StreamSDKVersion, StreamUsageError, Streams, Usage, UsageError) {
  'use strict';

  /**
   * CustomerMetrics service.
   * @module api/CustomerMetricsApi
   * @version 3.9.0
   */

  /**
   * Constructs a new CustomerMetricsApi. 
   * @alias module:api/CustomerMetricsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getEvaluations operation.
     * @callback module:api/CustomerMetricsApi~getEvaluationsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamSDKVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get events usage by event id and the feature flag key.
     * @param {String} envId The environment id for the flag evaluations in question.
     * @param {String} flagKey The key of the flag we want metrics for.
     * @param {module:api/CustomerMetricsApi~getEvaluationsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamSDKVersion}
     */
    this.getEvaluations = function(envId, flagKey, callback) {
      var postBody = null;

      // verify the required parameter 'envId' is set
      if (envId === undefined || envId === null) {
        throw new Error("Missing the required parameter 'envId' when calling getEvaluations");
      }

      // verify the required parameter 'flagKey' is set
      if (flagKey === undefined || flagKey === null) {
        throw new Error("Missing the required parameter 'flagKey' when calling getEvaluations");
      }


      var pathParams = {
        'envId': envId,
        'flagKey': flagKey
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
      var returnType = StreamSDKVersion;

      return this.apiClient.callApi(
        '/usage/evaluations/{envId}/{flagKey}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEvent operation.
     * @callback module:api/CustomerMetricsApi~getEventCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamSDKVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get events usage by event type.
     * @param {String} type The type of event we would like to track.
     * @param {module:api/CustomerMetricsApi~getEventCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamSDKVersion}
     */
    this.getEvent = function(type, callback) {
      var postBody = null;

      // verify the required parameter 'type' is set
      if (type === undefined || type === null) {
        throw new Error("Missing the required parameter 'type' when calling getEvent");
      }


      var pathParams = {
        'type': type
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
      var returnType = StreamSDKVersion;

      return this.apiClient.callApi(
        '/usage/events/{type}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEvents operation.
     * @callback module:api/CustomerMetricsApi~getEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Events} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get events usage endpoints.
     * @param {module:api/CustomerMetricsApi~getEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Events}
     */
    this.getEvents = function(callback) {
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
      var returnType = Events;

      return this.apiClient.callApi(
        '/usage/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMAU operation.
     * @callback module:api/CustomerMetricsApi~getMAUCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MAU} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get monthly active user data.
     * @param {module:api/CustomerMetricsApi~getMAUCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MAU}
     */
    this.getMAU = function(callback) {
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
      var returnType = MAU;

      return this.apiClient.callApi(
        '/usage/mau', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getMAUByCategory operation.
     * @callback module:api/CustomerMetricsApi~getMAUByCategoryCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MAUbyCategory} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get monthly active user data by category.
     * @param {module:api/CustomerMetricsApi~getMAUByCategoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MAUbyCategory}
     */
    this.getMAUByCategory = function(callback) {
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
      var returnType = MAUbyCategory;

      return this.apiClient.callApi(
        '/usage/mau/bycategory', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStream operation.
     * @callback module:api/CustomerMetricsApi~getStreamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Stream} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a stream endpoint and return timeseries data.
     * @param {String} source The source of where the stream comes from.
     * @param {module:api/CustomerMetricsApi~getStreamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Stream}
     */
    this.getStream = function(source, callback) {
      var postBody = null;

      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling getStream");
      }


      var pathParams = {
        'source': source
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
      var returnType = Stream;

      return this.apiClient.callApi(
        '/usage/streams/{source}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStreamBySDK operation.
     * @callback module:api/CustomerMetricsApi~getStreamBySDKCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamBySDK} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a stream timeseries data by source show sdk version metadata.
     * @param {String} source The source of where the stream comes from.
     * @param {module:api/CustomerMetricsApi~getStreamBySDKCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamBySDK}
     */
    this.getStreamBySDK = function(source, callback) {
      var postBody = null;

      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling getStreamBySDK");
      }


      var pathParams = {
        'source': source
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
      var returnType = StreamBySDK;

      return this.apiClient.callApi(
        '/usage/streams/{source}/bysdkversion', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStreamSDKVersion operation.
     * @callback module:api/CustomerMetricsApi~getStreamSDKVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/StreamSDKVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a stream timeseries data by source and show all sdk version associated.
     * @param {String} source The source of where the stream comes from.
     * @param {module:api/CustomerMetricsApi~getStreamSDKVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/StreamSDKVersion}
     */
    this.getStreamSDKVersion = function(source, callback) {
      var postBody = null;

      // verify the required parameter 'source' is set
      if (source === undefined || source === null) {
        throw new Error("Missing the required parameter 'source' when calling getStreamSDKVersion");
      }


      var pathParams = {
        'source': source
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
      var returnType = StreamSDKVersion;

      return this.apiClient.callApi(
        '/usage/streams/{source}/sdkversions', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getStreams operation.
     * @callback module:api/CustomerMetricsApi~getStreamsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Streams} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns a list of all streams.
     * @param {module:api/CustomerMetricsApi~getStreamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Streams}
     */
    this.getStreams = function(callback) {
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
      var returnType = Streams;

      return this.apiClient.callApi(
        '/usage/streams', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getUsage operation.
     * @callback module:api/CustomerMetricsApi~getUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Usage} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Returns of the usage endpoints available.
     * @param {module:api/CustomerMetricsApi~getUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Usage}
     */
    this.getUsage = function(callback) {
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
      var returnType = Usage;

      return this.apiClient.callApi(
        '/usage', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
