require "base64"

module UniversalBase64
  def self.encode(input_string)
    Base64.strict_encode64(input_string)
  end

  def self.decode(encoded_string)
    Base64.strict_decode64(encoded_string)
  end
end
