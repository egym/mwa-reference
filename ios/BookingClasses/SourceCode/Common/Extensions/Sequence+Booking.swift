extension Sequence where Element == Booking {
  func contains(_ identifier: String) -> Bool {
    contains(
      where: {
        $0.identifier == identifier
      }
    )
  }
  
  func contains(_ booking: Booking) -> Bool {
    contains(
      where: {
        $0.identifier == booking.identifier
      }
    )
  }
}
