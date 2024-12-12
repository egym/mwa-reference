export const appflowCIconfig = {
  appId: {
    value: String(``),
    description: "Ionic app's unique ID.",
  },
  appName: {
    value: String(``),
    description: "Ionic app's unique ID.",
  },
  gitCommitSha: {
    value: String(``),
    description: 'The SHA for the commit on which the build was run.',
  },
  gitCommitMsg: {
    value: String(``),
    description: 'The message for the commit on which the build was run.',
  },
  gitRef: {
    value: String(``),
    description: 'The git ref from which the build was created (i.e. master).',
  },
  gitRefType: {
    value: String(``),
    description: 'The git ref type (i.e. branch).',
  },
  isAutomatedBuild: {
    value: String(``),
    description: 'Whether this build occurred as a result of an automation (0 for false, 1 for true).',
  },
  automationId: {
    value: String(``),
    description: 'The unique ID of the automation which created this build.',
  },
  automationName: {
    value: String(``),
    description: 'The name of the automation which created this build.',
  },
  buildId: {
    value: String(``),
    description: 'The globally unique ID of this build.',
  },
  buildNumber: {
    value: String(``),
    description: 'The sequential build number.',
  },
  platform: {
    value: String(``),
    description: 'The platform for the build (ios, android, web).',
  },
};
