package universal_base64

import "testing"

func TestEncodeDecode(t *testing.T) {
	originalString := "Hello, World!"
	encodedString := Encode(originalString)
	decodedString, err := Decode(encodedString)

	if err != nil {
		t.Errorf("Decode returned an error: %v", err)
	}

	if encodedString != "SGVsbG8sIFdvcmxkIQ==" {
		t.Errorf("Encode returned an incorrect value: got %v want %v", encodedString, "SGVsbG8sIFdvcmxkIQ==")
	}

	if decodedString != originalString {
		t.Errorf("Decode returned an incorrect value: got %v want %v", decodedString, originalString)
	}
}
