import SwiftUI

struct InitialView: View {
  var body: some View {
    contentView
      .navigationTitle("Native")
  }
  
  var contentView: some View {
    VStack {
      Text("Hello, gym user!")
        .padding()
      
      NavigationLink(destination: ClassesView()) {
        Text("Open Classes")
          .padding()
          .foregroundColor(.primary)
          .background(Color.accentColor.opacity(0.4))
          .cornerRadius(8)
      }
    }
  }
}

struct InitialView_Previews: PreviewProvider {
  static var previews: some View {
    InitialView()
  }
}
