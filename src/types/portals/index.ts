export enum PortalsTopic {
  authToken = 'authToken',
  exerciserInfo = 'exerciserInfo',
  dismiss = 'dismiss',
  openFeature = 'openFeature',
  openUrlExternally = 'openUrlExternally',
  openWebView = 'openWebView',
  trainerInfo = 'trainerInfo',
}

export enum NativeRequestTopic {
  Subscription = 'subscription',
}

export enum NativeRequestType {
  authToken = 'authToken',
  exerciserInfo = 'exerciserInfo',
  dismiss = 'dismiss',
  openFeature = 'openFeature',
  linking = 'linking',
  setWidgetHeight = 'setWidgetHeight',
  contentLoadingDidFinish = 'contentLoadingDidFinish',
}

export enum SubscribeTopic {
  authToken = 'authToken',
  exerciserInfo = 'exerciserInfo',
  linking = 'linking',
  refresh = 'refresh',
}
