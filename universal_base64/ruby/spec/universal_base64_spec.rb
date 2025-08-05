require "spec_helper"

RSpec.describe UniversalBase64 do
  it "encodes and decodes a string" do
    original_string = "Hello, World!"
    encoded_string = UniversalBase64.encode(original_string)
    decoded_string = UniversalBase64.decode(encoded_string)

    expect(encoded_string).to eq("SGVsbG8sIFdvcmxkIQ==")
    expect(decoded_string).to eq(original_string)
  end
end
