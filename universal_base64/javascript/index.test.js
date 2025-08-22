const { encode, decode } = require('./index');

test('encodes and decodes a string', () => {
  const originalString = "Hello, World!";
  const encodedString = encode(originalString);
  const decodedString = decode(encodedString);

  expect(encodedString).toBe("SGVsbG8sIFdvcmxkIQ==");
  expect(decodedString).toBe(originalString);
});
