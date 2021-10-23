import SwiftUI

struct ClassView: View {
  @Environment(\.presentationMode) private var presentationMode
  
  @State private var isBookingInProgress = false
  @State private var isPresentingAlert = false
  @State private var shouldPopNavigation = false
  @State private var message: String = ""
  
  @ObservedObject
  private var bookingManager: BookingManager
  private let screen: Screen
  
  var body: some View {
    contentView
      .navigationTitle(screen.title)
      .navigationBarTitleDisplayMode(.inline)
      .alert(message, isPresented: $isPresentingAlert) {
        Button("OK", role: .cancel) {
          if shouldPopNavigation {
            presentationMode.wrappedValue.dismiss()
          }
          
          isBookingInProgress = false
        }
      }
      .toolbar {
        if case .detail = screen {
          Button(action: deleteBooking) {
            Text("Delete Booking")
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
    guard isBookingInProgress == false else {
      return
    }
    
    if
      let dictionary = data as? [String: String],
      let name = dictionary["className"],
      let identifier = dictionary["id"]
    {
      isBookingInProgress = true
      let isBooked = bookingManager.isClassBooked(for: identifier)
      
      if isBooked {
        message = message(for: name, isBooked)
      }
      else {
        let booking = Booking(
          identifier: identifier,
          name: name
        )
        
        bookingManager.add(booking)
        message = message(for: name, isBooked)
        shouldPopNavigation = true
      }
      
      isPresentingAlert = true
    }
  }
  
  func message(for className: String, _ booked: Bool = false) -> String {
    if booked {
      return "You have a previous booking for the class '\(className)'."
    }
    
    return "Class '\(className)' was booked for you!"
  }
  
  func deleteBooking() {
    if let booking = screen.booking {
      bookingManager.delete(booking)
      
      message = "You booking for class '\(booking.name)' was removed"
      shouldPopNavigation = true
      isPresentingAlert = true
    }
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

