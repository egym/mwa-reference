import SwiftUI

struct BookingListView: View {
  let gym: Gym
  
  @ObservedObject
  var bookingManager: BookingManager
  
  var body: some View {
    contentView
      .toolbar {
        NavigationLink(destination: classListView) {
          Text("Classes")
        }
      }
      .navigationTitle(gym.name)
  }
  
  @ViewBuilder
  var contentView: some View {
    if bookingManager.isNotEmpty {
      bookingsListView
    }
    else {
      Text("You do not have classes booked")
    }
  }
  
  var bookingsListView: some View {
    List {
      Section("Your bookings") {
        ForEach(bookingManager.bookingList) { booking in
          NavigationLink(destination: classDetailView(for: booking)) {
            BookingRowView(
              booking: booking
            )
          }
        }
      }
    }
  }
  
  var classListView: some View {
    ClassView(
      screen: .list(
        gym: gym
      ),
      bookingManager: bookingManager
    )
  }
  
  func classDetailView(for booking: Booking) -> some View {
    ClassView(
      screen: .detail(
        booking: booking,
        gym: gym
      ),
      bookingManager: bookingManager
    )
  }
  
}

struct BookingListView_Previews: PreviewProvider {
  static var previews: some View {
    let gym = Gym(name: "Fake Gym")
    let bookingManager = BookingManager()
    
    bookingManager.add(.init(identifier: "01", name: "Class One"))
    bookingManager.add(.init(identifier: "02", name: "Class Two"))
    
    return NavigationView {
      BookingListView(
        gym: gym,
        bookingManager: bookingManager
      )
    }
  }
}
