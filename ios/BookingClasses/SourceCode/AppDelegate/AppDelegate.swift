import UIKit

import IonicPortals

final class AppDelegate: NSObject, UIApplicationDelegate {
  func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions: [UIApplication.LaunchOptionsKey : Any]? = nil) -> Bool {
  
    PortalManager.register("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJzdWIiOiIyODIwMDUxIn0.xN0iUuH2F9bDrsnOv7WPkkT3YNqjF2WXMifHvj5Me8iJHUIPUaNnf1R1-axO7Sl4aVkJQxOH3PPQFLirRVws1fkaCznv84Cek9QVWj9YmIV9g-Or_mRkSJsIPMh-h97SQSATjL7ko8rp4AXUoGMjdPurqWp3ELdjjJHT7NB4FwZ3509vKFXZgrSgkEIuWZaLh4m4eSCYbU9cw3BPZbdI_dVatHLngD761at_IhOJ5Ur_DsayEGoRFqgpdgTQRD5zKLqkwQkFAE4DdMtYj783Mrf2o7W4U_38i9LTHxnN13HyTuGzdY1yOOyTVPw8uPLdgrtV5lzICicOixQ02h74HA")
   
    let classesPortal = Portal("classes", "portals/classes")
    PortalManager.addPortal(classesPortal)
  
    return true
  }
}
