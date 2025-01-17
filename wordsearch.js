const transpose = require('./thereIsNoSpoon');

const wordSearch = (letters, word, callback) => {
  if (letters.length === 0) {
    return false;
  }
  const horizontalJoin = letters.map(ls => ls.join(''));
  if (callback(horizontalJoin, word)) {
    return true;
  } else {
    let vertical = transpose(letters);
    const verticalJoin = vertical.map(ls => ls.join(''));
    console.log(verticalJoin)
    if (callback(verticalJoin, word))
      return true;
  }
  return false;
};

// callback -> string, word

const checkString = (string, word) => {
  for (let l of string) {
    if (l.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = { wordSearch, checkString };