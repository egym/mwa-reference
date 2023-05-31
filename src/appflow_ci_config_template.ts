export const appflowCIconfig = {
  appId: {
    value: String(`$CI_APP_ID`),
    description: "Ionic app's unique ID.",
  },
  appName: {
    value: String(`$CI_APP_NAME`),
    description: "Ionic app's unique ID.",
  },
  gitCommitSha: {
    value: String(`$CI_GIT_COMMIT_SHA`),
    description: 'The SHA for the commit on which the build was run.',
  },
  gitCommitMsg: {
    value: String(`$CI_GIT_COMMIT_MSG`),
    description: 'The message for the commit on which the build was run.',
  },
  gitRef: {
    value: String(`$CI_GIT_REF`),
    description: 'The git ref from which the build was created (i.e. master).',
  },
  gitRefType: {
    value: String(`$CI_GIT_REF_TYPE`),
    description: 'The git ref type (i.e. branch).',
  },
  isAutomatedBuild: {
    value: String(`$CI_AUTOMATED_BUILD`),
    description: 'Whether this build occurred as a result of an automation (0 for false, 1 for true).',
  },
  automationId: {
    value: String(`$CI_AUTOMATION_ID`),
    description: 'The unique ID of the automation which created this build.',
  },
  automationName: {
    value: String(`$CI_AUTOMATION_NAME`),
    description: 'The name of the automation which created this build.',
  },
  buildId: {
    value: String(`$CI_BUILD_ID`),
    description: 'The globally unique ID of this build.',
  },
  buildNumber: {
    value: String(`$CI_BUILD_NUMBER`),
    description: 'The sequential build number.',
  },
  platform: {
    value: String(`$CI_PLATFORM`),
    description: 'The platform for the build (ios, android, web).',
  },
};
