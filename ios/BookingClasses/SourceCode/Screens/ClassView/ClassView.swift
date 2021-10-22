import SwiftUI

struct ClassView: View {
  @Environment(\.presentationMode) private var presentationMode
  
  @State private var isPresentingAlert = false
  @State private var message: String = ""
  @State private var shouldPopNavigation = false
  
  @ObservedObject
  private var bookingManager: BookingManager
  private let screen: Screen
  
  var body: some View {
    contentView
      .navigationTitle(screen.title)
      .alert(message, isPresented: $isPresentingAlert) {
        Button("OK", role: .cancel) {
          if shouldPopNavigation {
            presentationMode.wrappedValue.dismiss()
          }
        }
      }
  }
  
  var contentView: some View {
    GeometryReader { geometry in
      PortalView(
        portal: "classes",
        options: screen.options,
        size: geometry.size,
        onContentReceived: content
      )
    }
  }
  
  init(screen: Screen, bookingManager: BookingManager) {
    self.screen = screen
    self.bookingManager = bookingManager
  }
  
  func content(_ data: Any) {
    if
      let dictionary = data as? [String: String],
      let name = dictionary["className"],
      let identifier = dictionary["id"]
    {
      let isBooked = bookingManager.isClassBooked(for: identifier)
      
      if isBooked {
        message = message(using: name, isBooked)
      }
      else {
        let booking = Booking(
          identifier: identifier,
          name: name
        )
        
        bookingManager.add(booking)
        message = message(using: name, isBooked)
        shouldPopNavigation = true
      }
      
      isPresentingAlert = true
    }
  }
  
  func message(using className: String, _ booked: Bool) -> String {
    if booked {
      return "You have a previous booking for the class '\(className)'."
    }
    
    return "Class '\(className)' was booked for you!"
  }
}

struct ClassView_Previews: PreviewProvider {
  static var previews: some View {
    let gym = Gym(name: "Fake Gym")
    let bookingManager = BookingManager()
    
    bookingManager.add(.init(identifier: "01", name: "Class One"))
    bookingManager.add(.init(identifier: "02", name: "Class Two"))
    
    return ClassView(
      screen: .list(gym: gym),
      bookingManager: bookingManager
    )
  }
}

