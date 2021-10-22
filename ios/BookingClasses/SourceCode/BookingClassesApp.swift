import SwiftUI

@main
struct BookingClassesApp: App {
  @StateObject var bookingManager = BookingManager()
  private let gym = Gym(name: "EGYM Berlin Office")

  @UIApplicationDelegateAdaptor(AppDelegate.self)
  var appDelegate
  
  var body: some Scene {
    WindowGroup {
      NavigationView {
        BookingListView(
          gym: gym,
          bookingManager: bookingManager
        )
      }
    }
  }
}
