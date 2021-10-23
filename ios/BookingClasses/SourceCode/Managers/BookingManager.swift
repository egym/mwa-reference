import SwiftUI

final class BookingManager: ObservableObject {
  @Published
  private(set) var bookins: Bookings
 
  var isNotEmpty: Bool {
    bookins.isEmpty == false
  }
  
  init() {
    bookins = []
  }
  
  func isClassBooked(with booking: Booking) -> Bool {
    bookins.contains(booking)
  }
  
  func isClassBooked(for identifier: String) -> Bool {
    bookins.contains(identifier)
  }
  
  func booking(at index: Int) -> Booking? {
    guard index >= 0 && index < bookins.count else {
      return nil
    }

    return bookins[index]
  }
  
  func add(_ booking: Booking) {
    guard bookins.contains(booking) == false else {
      return
    }
    
    bookins.insert(booking, at: 0)
  }
  
  func delete(_ booking: Booking) {
    guard bookins.contains(booking) else {
      return
    }
    
    guard let index = bookins.firstIndex(of: booking) else {
      return
    }

    bookins.remove(at: index)
  }
  
  func delete(at offsets: IndexSet) {
    bookins.remove(atOffsets: offsets)
  }
}
