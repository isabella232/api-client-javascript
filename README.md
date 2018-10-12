This repository contains a client library for LaunchDarkly's REST API. This client was automatically
generated from our [OpenAPI specification](https://github.com/launchdarkly/ld-openapi).

This REST API is for custom integrations, data export, or automating your feature flag workflows. *DO NOT* use this client library to add feature flags to your web or mobile application. To integrate feature flags with your application, please see the [SDK documentation](https://docs.launchdarkly.com/v2.0/docs)

# launch_darkly_rest_api

LaunchDarklyRestApi - JavaScript client for launch_darkly_rest_api
Build custom integrations with the LaunchDarkly REST API
This SDK is automatically generated by the [Swagger Codegen](https://github.com/swagger-api/swagger-codegen) project:

- API version: 2.0.9
- Package version: 2.0.9
- Build package: io.swagger.codegen.languages.JavascriptClientCodegen
For more information, please visit [https://support.launchdarkly.com](https://support.launchdarkly.com)

## Installation

### For [Node.js](https://nodejs.org/)

#### npm

To publish the library as a [npm](https://www.npmjs.com/),
please follow the procedure in ["Publishing npm packages"](https://docs.npmjs.com/getting-started/publishing-npm-packages).

Then install it via:

```shell
npm install launch_darkly_rest_api --save
```

##### Local development

To use the library locally without publishing to a remote npm registry, first install the dependencies by changing 
into the directory containing `package.json` (and this README). Let's call this `JAVASCRIPT_CLIENT_DIR`. Then run:

```shell
npm install
```

Next, [link](https://docs.npmjs.com/cli/link) it globally in npm with the following, also from `JAVASCRIPT_CLIENT_DIR`:

```shell
npm link
```

Finally, switch to the directory you want to use your launch_darkly_rest_api from, and run:

```shell
npm link /path/to/<JAVASCRIPT_CLIENT_DIR>
```

You should now be able to `require('launch_darkly_rest_api')` in javascript files from the directory you ran the last 
command above from.

#### git
#
If the library is hosted at a git repository, e.g.
https://github.com/GIT_USER_ID/GIT_REPO_ID
then install it via:

```shell
    npm install GIT_USER_ID/GIT_REPO_ID --save
```

### For browser

The library also works in the browser environment via npm and [browserify](http://browserify.org/). After following
the above steps with Node.js and installing browserify with `npm install -g browserify`,
perform the following (assuming *main.js* is your entry file, that's to say your javascript file where you actually 
use this library):

```shell
browserify main.js > bundle.js
```

Then include *bundle.js* in the HTML pages.

### Webpack Configuration

Using Webpack you may encounter the following error: "Module not found: Error:
Cannot resolve module", most certainly you should disable AMD loader. Add/merge
the following section to your webpack config:

```javascript
module: {
  rules: [
    {
      parser: {
        amd: false
      }
    }
  ]
}
```

## Getting Started

Please follow the [installation](#installation) instruction and execute the following JS code:

```javascript
var LaunchDarklyRestApi = require('launch_darkly_rest_api');

var defaultClient = LaunchDarklyRestApi.ApiClient.instance;

// Configure API key authorization: Token
var Token = defaultClient.authentications['Token'];
Token.apiKey = "YOUR API KEY"
// Uncomment the following line to set a prefix for the API key, e.g. "Token" (defaults to null)
//Token.apiKeyPrefix['Authorization'] = "Token"

var api = new LaunchDarklyRestApi.AuditLogApi()

var opts = { 
  'before': 8.14, // {Number} A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have before this timestamp.
  'after': 8.14, // {Number} A timestamp filter, expressed as a Unix epoch time in milliseconds. All entries returned will have occured after this timestamp.
  'q': "q_example", // {String} Text to search for. You can search for the full or partial name of the resource involved or fullpartial email address of the member who made the change.
  'limit': 8.14, // {Number} A limit on the number of audit log entries to be returned, between 1 and 20.
  'spec': "spec_example" // {String} A resource specifier, allowing you to filter audit log listings by resource.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
api.getAuditLogEntries(opts, callback);

```

## Documentation for API Endpoints

All URIs are relative to *https://app.launchdarkly.com/api/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*LaunchDarklyRestApi.AuditLogApi* | [**getAuditLogEntries**](docs/AuditLogApi.md#getAuditLogEntries) | **GET** /auditlog | Get a list of all audit log entries. The query parameters allow you to restrict the returned results by date ranges, resource specifiers, or a full-text search query.
*LaunchDarklyRestApi.AuditLogApi* | [**getAuditLogEntry**](docs/AuditLogApi.md#getAuditLogEntry) | **GET** /auditlog/{resourceId} | Use this endpoint to fetch a single audit log entry by its resouce ID.
*LaunchDarklyRestApi.CustomRolesApi* | [**deleteCustomRole**](docs/CustomRolesApi.md#deleteCustomRole) | **DELETE** /roles/{customRoleKey} | Delete a custom role by key.
*LaunchDarklyRestApi.CustomRolesApi* | [**getCustomRole**](docs/CustomRolesApi.md#getCustomRole) | **GET** /roles/{customRoleKey} | Get one custom role by key.
*LaunchDarklyRestApi.CustomRolesApi* | [**getCustomRoles**](docs/CustomRolesApi.md#getCustomRoles) | **GET** /roles | Return a complete list of custom roles.
*LaunchDarklyRestApi.CustomRolesApi* | [**patchCustomRole**](docs/CustomRolesApi.md#patchCustomRole) | **PATCH** /roles/{customRoleKey} | Modify a custom role by key.
*LaunchDarklyRestApi.CustomRolesApi* | [**postCustomRole**](docs/CustomRolesApi.md#postCustomRole) | **POST** /roles | Create a new custom role.
*LaunchDarklyRestApi.EnvironmentsApi* | [**deleteEnvironment**](docs/EnvironmentsApi.md#deleteEnvironment) | **DELETE** /projects/{projectKey}/environments/{environmentKey} | Delete an environment in a specific project.
*LaunchDarklyRestApi.EnvironmentsApi* | [**getEnvironment**](docs/EnvironmentsApi.md#getEnvironment) | **GET** /projects/{projectKey}/environments/{environmentKey} | Get an environment given a project and key.
*LaunchDarklyRestApi.EnvironmentsApi* | [**patchEnvironment**](docs/EnvironmentsApi.md#patchEnvironment) | **PATCH** /projects/{projectKey}/environments/{environmentKey} | Modify an environment by ID.
*LaunchDarklyRestApi.EnvironmentsApi* | [**postEnvironment**](docs/EnvironmentsApi.md#postEnvironment) | **POST** /projects/{projectKey}/environments | Create a new environment in a specified project with a given name, key, and swatch color.
*LaunchDarklyRestApi.FeatureFlagsApi* | [**deleteFeatureFlag**](docs/FeatureFlagsApi.md#deleteFeatureFlag) | **DELETE** /flags/{projectKey}/{featureFlagKey} | Delete a feature flag in all environments. Be careful-- only delete feature flags that are no longer being used by your application.
*LaunchDarklyRestApi.FeatureFlagsApi* | [**getFeatureFlag**](docs/FeatureFlagsApi.md#getFeatureFlag) | **GET** /flags/{projectKey}/{featureFlagKey} | Get a single feature flag by key.
*LaunchDarklyRestApi.FeatureFlagsApi* | [**getFeatureFlagStatus**](docs/FeatureFlagsApi.md#getFeatureFlagStatus) | **GET** /flag-statuses/{projectKey}/{environmentKey}/{featureFlagKey} | Get the status for a particular feature flag.
*LaunchDarklyRestApi.FeatureFlagsApi* | [**getFeatureFlagStatuses**](docs/FeatureFlagsApi.md#getFeatureFlagStatuses) | **GET** /flag-statuses/{projectKey}/{environmentKey} | Get a list of statuses for all feature flags. The status includes the last time the feature flag was requested, as well as the state of the flag.
*LaunchDarklyRestApi.FeatureFlagsApi* | [**getFeatureFlags**](docs/FeatureFlagsApi.md#getFeatureFlags) | **GET** /flags/{projectKey} | Get a list of all features in the given project.
*LaunchDarklyRestApi.FeatureFlagsApi* | [**patchFeatureFlag**](docs/FeatureFlagsApi.md#patchFeatureFlag) | **PATCH** /flags/{projectKey}/{featureFlagKey} | Perform a partial update to a feature.
*LaunchDarklyRestApi.FeatureFlagsApi* | [**postFeatureFlag**](docs/FeatureFlagsApi.md#postFeatureFlag) | **POST** /flags/{projectKey} | Creates a new feature flag.
*LaunchDarklyRestApi.ProjectsApi* | [**deleteProject**](docs/ProjectsApi.md#deleteProject) | **DELETE** /projects/{projectKey} | Delete a project by key. Caution-- deleting a project will delete all associated environments and feature flags. You cannot delete the last project in an account.
*LaunchDarklyRestApi.ProjectsApi* | [**getProject**](docs/ProjectsApi.md#getProject) | **GET** /projects/{projectKey} | Fetch a single project by key.
*LaunchDarklyRestApi.ProjectsApi* | [**getProjects**](docs/ProjectsApi.md#getProjects) | **GET** /projects | Returns a list of all projects in the account.
*LaunchDarklyRestApi.ProjectsApi* | [**patchProject**](docs/ProjectsApi.md#patchProject) | **PATCH** /projects/{projectKey} | Modify a project by ID.
*LaunchDarklyRestApi.ProjectsApi* | [**postProject**](docs/ProjectsApi.md#postProject) | **POST** /projects | Create a new project with the given key and name.
*LaunchDarklyRestApi.RootApi* | [**getRoot**](docs/RootApi.md#getRoot) | **GET** / | 
*LaunchDarklyRestApi.TeamMembersApi* | [**deleteMember**](docs/TeamMembersApi.md#deleteMember) | **DELETE** /members/{memberId} | Delete a team member by ID.
*LaunchDarklyRestApi.TeamMembersApi* | [**getMember**](docs/TeamMembersApi.md#getMember) | **GET** /members/{memberId} | Get a single team member by ID.
*LaunchDarklyRestApi.TeamMembersApi* | [**getMembers**](docs/TeamMembersApi.md#getMembers) | **GET** /members | Returns a list of all members in the account.
*LaunchDarklyRestApi.TeamMembersApi* | [**patchMember**](docs/TeamMembersApi.md#patchMember) | **PATCH** /members/{memberId} | Modify a team member by ID.
*LaunchDarklyRestApi.TeamMembersApi* | [**postMembers**](docs/TeamMembersApi.md#postMembers) | **POST** /members | Invite new members.
*LaunchDarklyRestApi.UserSegmentsApi* | [**deleteUserSegment**](docs/UserSegmentsApi.md#deleteUserSegment) | **DELETE** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Delete a user segment.
*LaunchDarklyRestApi.UserSegmentsApi* | [**getUserSegment**](docs/UserSegmentsApi.md#getUserSegment) | **GET** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Get a single user segment by key.
*LaunchDarklyRestApi.UserSegmentsApi* | [**getUserSegments**](docs/UserSegmentsApi.md#getUserSegments) | **GET** /segments/{projectKey}/{environmentKey} | Get a list of all user segments in the given project.
*LaunchDarklyRestApi.UserSegmentsApi* | [**patchUserSegment**](docs/UserSegmentsApi.md#patchUserSegment) | **PATCH** /segments/{projectKey}/{environmentKey}/{userSegmentKey} | Perform a partial update to a user segment.
*LaunchDarklyRestApi.UserSegmentsApi* | [**postUserSegment**](docs/UserSegmentsApi.md#postUserSegment) | **POST** /segments/{projectKey}/{environmentKey} | Creates a new user segment.
*LaunchDarklyRestApi.UserSettingsApi* | [**getUserFlagSetting**](docs/UserSettingsApi.md#getUserFlagSetting) | **GET** /users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Fetch a single flag setting for a user by key.
*LaunchDarklyRestApi.UserSettingsApi* | [**getUserFlagSettings**](docs/UserSettingsApi.md#getUserFlagSettings) | **GET** /users/{projectKey}/{environmentKey}/{userKey}/flags | Fetch a single flag setting for a user by key.
*LaunchDarklyRestApi.UserSettingsApi* | [**putFlagSetting**](docs/UserSettingsApi.md#putFlagSetting) | **PUT** /users/{projectKey}/{environmentKey}/{userKey}/flags/{featureFlagKey} | Specifically enable or disable a feature flag for a user based on their key.
*LaunchDarklyRestApi.UsersApi* | [**deleteUser**](docs/UsersApi.md#deleteUser) | **DELETE** /users/{projectKey}/{environmentKey}/{userKey} | Delete a user by ID.
*LaunchDarklyRestApi.UsersApi* | [**getSearchUsers**](docs/UsersApi.md#getSearchUsers) | **GET** /user-search/{projectKey}/{environmentKey} | Search users in LaunchDarkly based on their last active date, or a search query. It should not be used to enumerate all users in LaunchDarkly-- use the List users API resource.
*LaunchDarklyRestApi.UsersApi* | [**getUser**](docs/UsersApi.md#getUser) | **GET** /users/{projectKey}/{environmentKey}/{userKey} | Get a user by key.
*LaunchDarklyRestApi.UsersApi* | [**getUsers**](docs/UsersApi.md#getUsers) | **GET** /users/{projectKey}/{environmentKey} | List all users in the environment. Includes the total count of users. In each page, there will be up to &#39;limit&#39; users returned (default 20). This is useful for exporting all users in the system for further analysis. Paginated collections will include a next link containing a URL with the next set of elements in the collection.
*LaunchDarklyRestApi.WebhooksApi* | [**deleteWebhook**](docs/WebhooksApi.md#deleteWebhook) | **DELETE** /webhooks/{resourceId} | Delete a webhook by ID.
*LaunchDarklyRestApi.WebhooksApi* | [**getWebhook**](docs/WebhooksApi.md#getWebhook) | **GET** /webhooks/{resourceId} | Get a webhook by ID.
*LaunchDarklyRestApi.WebhooksApi* | [**getWebhooks**](docs/WebhooksApi.md#getWebhooks) | **GET** /webhooks | Fetch a list of all webhooks.
*LaunchDarklyRestApi.WebhooksApi* | [**patchWebhook**](docs/WebhooksApi.md#patchWebhook) | **PATCH** /webhooks/{resourceId} | Modify a webhook by ID.
*LaunchDarklyRestApi.WebhooksApi* | [**postWebhook**](docs/WebhooksApi.md#postWebhook) | **POST** /webhooks | Create a webhook.


## Documentation for Models

 - [LaunchDarklyRestApi.Action](docs/Action.md)
 - [LaunchDarklyRestApi.Actions](docs/Actions.md)
 - [LaunchDarklyRestApi.AuditLogEntries](docs/AuditLogEntries.md)
 - [LaunchDarklyRestApi.AuditLogEntry](docs/AuditLogEntry.md)
 - [LaunchDarklyRestApi.AuditLogEntryTarget](docs/AuditLogEntryTarget.md)
 - [LaunchDarklyRestApi.Clause](docs/Clause.md)
 - [LaunchDarklyRestApi.CustomProperties](docs/CustomProperties.md)
 - [LaunchDarklyRestApi.CustomProperty](docs/CustomProperty.md)
 - [LaunchDarklyRestApi.CustomPropertyValues](docs/CustomPropertyValues.md)
 - [LaunchDarklyRestApi.CustomRole](docs/CustomRole.md)
 - [LaunchDarklyRestApi.CustomRoleBody](docs/CustomRoleBody.md)
 - [LaunchDarklyRestApi.CustomRoleKeyOrId](docs/CustomRoleKeyOrId.md)
 - [LaunchDarklyRestApi.CustomRoles](docs/CustomRoles.md)
 - [LaunchDarklyRestApi.Environment](docs/Environment.md)
 - [LaunchDarklyRestApi.EnvironmentBody](docs/EnvironmentBody.md)
 - [LaunchDarklyRestApi.Fallthrough](docs/Fallthrough.md)
 - [LaunchDarklyRestApi.FeatureFlag](docs/FeatureFlag.md)
 - [LaunchDarklyRestApi.FeatureFlagBody](docs/FeatureFlagBody.md)
 - [LaunchDarklyRestApi.FeatureFlagConfig](docs/FeatureFlagConfig.md)
 - [LaunchDarklyRestApi.FeatureFlagStatus](docs/FeatureFlagStatus.md)
 - [LaunchDarklyRestApi.FeatureFlagStatuses](docs/FeatureFlagStatuses.md)
 - [LaunchDarklyRestApi.FeatureFlags](docs/FeatureFlags.md)
 - [LaunchDarklyRestApi.Id](docs/Id.md)
 - [LaunchDarklyRestApi.Link](docs/Link.md)
 - [LaunchDarklyRestApi.Links](docs/Links.md)
 - [LaunchDarklyRestApi.Member](docs/Member.md)
 - [LaunchDarklyRestApi.Members](docs/Members.md)
 - [LaunchDarklyRestApi.MembersBody](docs/MembersBody.md)
 - [LaunchDarklyRestApi.PatchComment](docs/PatchComment.md)
 - [LaunchDarklyRestApi.PatchOperation](docs/PatchOperation.md)
 - [LaunchDarklyRestApi.Policy](docs/Policy.md)
 - [LaunchDarklyRestApi.Prerequisite](docs/Prerequisite.md)
 - [LaunchDarklyRestApi.Project](docs/Project.md)
 - [LaunchDarklyRestApi.ProjectBody](docs/ProjectBody.md)
 - [LaunchDarklyRestApi.Projects](docs/Projects.md)
 - [LaunchDarklyRestApi.Resource](docs/Resource.md)
 - [LaunchDarklyRestApi.Resources](docs/Resources.md)
 - [LaunchDarklyRestApi.Role](docs/Role.md)
 - [LaunchDarklyRestApi.Rollout](docs/Rollout.md)
 - [LaunchDarklyRestApi.Rule](docs/Rule.md)
 - [LaunchDarklyRestApi.Statement](docs/Statement.md)
 - [LaunchDarklyRestApi.Statements](docs/Statements.md)
 - [LaunchDarklyRestApi.Target](docs/Target.md)
 - [LaunchDarklyRestApi.User](docs/User.md)
 - [LaunchDarklyRestApi.UserFlagSetting](docs/UserFlagSetting.md)
 - [LaunchDarklyRestApi.UserFlagSettings](docs/UserFlagSettings.md)
 - [LaunchDarklyRestApi.UserRecord](docs/UserRecord.md)
 - [LaunchDarklyRestApi.UserSegment](docs/UserSegment.md)
 - [LaunchDarklyRestApi.UserSegmentBody](docs/UserSegmentBody.md)
 - [LaunchDarklyRestApi.UserSegmentRule](docs/UserSegmentRule.md)
 - [LaunchDarklyRestApi.UserSegments](docs/UserSegments.md)
 - [LaunchDarklyRestApi.UserSettingsBody](docs/UserSettingsBody.md)
 - [LaunchDarklyRestApi.Users](docs/Users.md)
 - [LaunchDarklyRestApi.Variation](docs/Variation.md)
 - [LaunchDarklyRestApi.Webhook](docs/Webhook.md)
 - [LaunchDarklyRestApi.WebhookBody](docs/WebhookBody.md)
 - [LaunchDarklyRestApi.Webhooks](docs/Webhooks.md)
 - [LaunchDarklyRestApi.WeightedVariation](docs/WeightedVariation.md)


## Documentation for Authorization


### Token

- **Type**: API key
- **API key parameter name**: Authorization
- **Location**: HTTP header

