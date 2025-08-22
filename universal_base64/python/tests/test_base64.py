import unittest
from universal_base64 import encode, decode

class TestBase64(unittest.TestCase):

    def test_encode_decode(self):
        original_string = "Hello, World!"
        encoded_string = encode(original_string)
        decoded_string = decode(encoded_string)

        self.assertEqual(encoded_string, "SGVsbG8sIFdvcmxkIQ==")
        self.assertEqual(decoded_string, original_string)

if __name__ == '__main__':
    unittest.main()
