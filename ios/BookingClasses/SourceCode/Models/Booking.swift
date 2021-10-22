import Foundation

typealias Bookings = [Booking]

struct Booking: Identifiable {
  var id: String {
    identifier
  }

  let identifier: String
  let name: String
  let createdAt: Date
  
  init(identifier: String, name: String) {
    self.identifier = identifier
    self.name = name
    self.createdAt = Date.current
  }
}

// MARK: - Comparable

extension Booking: Comparable {
  static func < (lhs: Self, rhs: Self) -> Bool {
    lhs.createdAt < rhs.createdAt
  }
  
  static func > (lhs: Self, rhs: Self) -> Bool {
    lhs.createdAt > rhs.createdAt
  }
}
