import SwiftUI

final class BookingManager: ObservableObject {
  @Published
  private(set) var bookingList: Bookings
 
  var isNotEmpty: Bool {
    bookingList.isEmpty == false
  }
  
  init() {
    bookingList = []
  }
  
  func isClassBooked(with booking: Booking) -> Bool {
    bookingList.contains(booking)
  }
  
  func isClassBooked(for identifier: String) -> Bool {
    bookingList.contains(identifier)
  }
  
  func add(_ booking: Booking) {
    guard bookingList.contains(booking) == false else {
      return
    }
    
    bookingList.insert(booking, at: 0)
  }
}
