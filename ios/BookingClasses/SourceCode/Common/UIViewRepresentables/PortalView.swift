import SwiftUI
import WebKit

import IonicPortals

struct PortalView: UIViewRepresentable {
  struct Options {
    var subscription: String
    var route: String
    var content: [String: String] = [:]
  }
  
  var portal: String
  var options: Options
  var size: CGSize
  
  var onReceiveContent: (Any) -> Void = { _ in }
  
  func makeCoordinator() -> PortalView.Coordinator {
    Coordinator(self)
  }
  
  func makeUIView(context: Context) -> PortalWebView {
    guard let portal = try? PortalManager.getPortal(portal) else {
      fatalError("Error trying to load Portal name: '\(portal)'")
    }
    
    var content: [String: String] = [:]
    content["startingRoute"] = options.route
    
    if options.content.isEmpty == false {
      content.merge(options.content) { (current, _) in current }
    }

    portal.initialContext = content
    
    let portalWebView = PortalWebView(
      frame: CGRect(
        origin: .zero,
        size: size
      ),
      portal: portal
    )
    
    return portalWebView
  }

  func updateUIView(_ view: PortalWebView, context: Context) {}
}

extension PortalView {
  final class Coordinator {
    var contentReference: Int = -1
    var parent: PortalView
    
    var options: PortalView.Options {
      parent.options
    }
    
    init(_ parent: PortalView) {
      self.parent = parent
      self.contentReference = PortalsPlugin.subscribe(
        parent.options.subscription,
        contentReceived
      )
    }
    
    deinit {
      PortalsPlugin.unsubscribe(
        options.subscription,
        contentReference
      )
    }

    private func contentReceived(result: SubscriptionResult) {
      guard result.topic == options.subscription else {
        return
      }
      
      parent.onReceiveContent(result.data)
    }
  }
}
