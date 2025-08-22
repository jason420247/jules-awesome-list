package universal_base64

import "encoding/base64"

func Encode(inputString string) string {
	return base64.StdEncoding.EncodeToString([]byte(inputString))
}

func Decode(encodedString string) (string, error) {
	decodedBytes, err := base64.StdEncoding.DecodeString(encodedString)
	if err != nil {
		return "", err
	}
	return string(decodedBytes), nil
}
