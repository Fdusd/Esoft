function isValidBrackets(str) {
  const pairs = {
    '(': ')',
    '[': ']',
    '{': '}',
  };
  const stack = [];
  for (const char of str) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char);
    }
    else if (char === ')' || char === ']' || char === '}') {
      if (stack.length === 0) {return false;
    }
    const lastOpened = stack.pop();
    if (pairs[lastOpened] !== char) {
      return false;
    }
    }
  }
  return stack.length === 0;
}
console.log(isValidBrackets(''));        // true  (пустая — правильная)
console.log(isValidBrackets('()'));      // true
console.log(isValidBrackets('()[]{}'));  // true
console.log(isValidBrackets('(]'));      // false — не тот тип
console.log(isValidBrackets('([)]'));    // false — нарушен порядок
console.log(isValidBrackets('{[]}'));    // true  — вложенность ок
console.log(isValidBrackets('((('));     // false — не всё закрыли
console.log(isValidBrackets(']'));       // false — закрытие без открытия
