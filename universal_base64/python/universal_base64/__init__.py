import base64

def encode(input_string: str) -> str:
  """
  Encodes a string to Base64.

  Args:
    input_string: The string to encode.

  Returns:
    The Base64-encoded string.
  """
  return base64.b64encode(input_string.encode('utf-8')).decode('utf-8')

def decode(encoded_string: str) -> str:
  """
  Decodes a Base64-encoded string.

  Args:
    encoded_string: The Base64-encoded string.

  Returns:
    The decoded string.
  """
  return base64.b64decode(encoded_string.encode('utf-8')).decode('utf-8')
