import SwiftUI

struct ClassesView: View {
  var body: some View {
    contentView
      .navigationTitle("Web")
  }
   
  var contentView: some View {
    GeometryReader { geometry in
      let options = PortalView.Options(
        subscription: "book-class",
        route: "/portals/classes",
        content: ["gymName": "EGYM Berlin Office"]
      )

      PortalView(
        portal: "classes",
        options: options,
        size: geometry.size,
        onReceiveContent: content
      )
    }
  }
  
  func content(_ data: Any) {
    print("Content: \(data)")
  }
}

struct ClassesView_Previews: PreviewProvider {
  static var previews: some View {
    ClassesView()
  }
}
