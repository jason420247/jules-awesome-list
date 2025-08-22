function encode(inputString) {
  return btoa(inputString);
}

function decode(encodedString) {
  return atob(encodedString);
}

module.exports = {
  encode,
  decode
};
