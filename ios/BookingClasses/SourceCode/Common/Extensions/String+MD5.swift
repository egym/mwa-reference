import CryptoKit

extension String {
  enum Error: Swift.Error {
    case convertStringToData
  }
  
  func convertToMD5() throws -> String {
    guard let data = data(using: .utf8) else {
      throw Error.convertStringToData
    }
    
    let digest = Insecure.MD5.hash(data: data)
    
    let value = digest.map {
      String(format: "%02hhx", $0)
    }
    .joined()
    
    return value
  }
}
