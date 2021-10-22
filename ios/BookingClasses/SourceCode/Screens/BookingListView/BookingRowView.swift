import SwiftUI

struct BookingRowView: View {
  let booking: Booking
  
  var body: some View {
    VStack(alignment: .leading) {
      Text("Class: ")
      +
      Text(booking.name)
        .font(.headline)
     
      Group {
        Text("at ")
        +
        Text(booking.createdAt, style: .date)
          .bold()
        +
        Text(" - ")
        +
        Text(booking.createdAt, style: .time)
          .bold()
      }
      .padding(.top, 2)
    }
    .padding(4)
  }
}

struct BookingRowView_Previews: PreviewProvider {
  static var previews: some View {
    let bookings: Bookings = [
      .init(identifier: "01", name: "EGYM Office Berlin"),
      .init(identifier: "02", name: "EGYM Office Munich"),
      .init(identifier: "03", name: "EGYM Office Kiev")
    ]
    
    return List(bookings) { booking in
      BookingRowView(
        booking: booking
      )
    }
  }
}
