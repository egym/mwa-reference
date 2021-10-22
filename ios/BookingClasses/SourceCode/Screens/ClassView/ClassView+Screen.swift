extension ClassView {
  enum Screen {
    case list(gym: Gym)
    case detail(booking: Booking, gym: Gym)
    
    var gym: Gym {
      switch self {
        case .list(let gym):
          return gym
        case .detail(_, let gym):
          return gym
      }
    }
    
    var booking: Booking? {
      switch self {
        case .detail(let booking, _):
          return booking
        default:
          return nil
      }
    }
    
    var options: PortalView.Options {
      var gymName = ""
      var route = ""
      
      switch self {
        case .list(let gym):
          gymName = gym.name
          route = "/portals/classes"
          
        case .detail(let booking, let gym):
          gymName = gym.name
          route = "/portals/classes/\(booking.identifier)"
      }
      
      let options = PortalView.Options(
        route: route,
        content: [
          "gymName": gymName
        ],
        subscriptionKey: "book-class"
      )
      
      return options
    }
    
    var title: String {
      switch self {
        case .list:
          return "Web"
        case .detail(let booking, _):
          return booking.name
      }
    }
  }
}
