module.exports = function check(str, bracketsConfig) {
  const config = new Map();
  for (const [ open, close ] of bracketsConfig) {
    config.set(close, open);
  }

  const waiting = [];
  for (const char of str) {
    if (config.has(char)) {
      if (char === config.get(char)) {
        if (waiting[waiting.length - 1] === char) {
          waiting.pop();
        } else {
          waiting.push(char);
        }
      } else {
        if (waiting.pop() !== config.get(char)) {
          return false;
        }
      }
    } else {
     waiting.push(char);
    }
  }

  return waiting.length === 0;
}
