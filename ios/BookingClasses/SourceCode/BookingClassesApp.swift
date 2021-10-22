import SwiftUI

@main
struct BookingClassesApp: App {
  
  @UIApplicationDelegateAdaptor(AppDelegate.self)
  var appDelegate
  
  var body: some Scene {
    WindowGroup {
      NavigationView {
        InitialView()
      }
    }
  }
}
