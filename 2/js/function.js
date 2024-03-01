// длина строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
console.log(checkStringLength('строка', 20));

// палиндром
function checksPalindrome(string) {
  const formattedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = formattedString.length - 1; i >= 0; i--) {
    reversedString += formattedString[i];
  }

  const result = formattedString === reversedString ? 'Это палиндром' : 'Это не палиндром';
  console.log(result);
  return(result);
}
checksPalindrome('Лёша на полке клопа нашёл');

// отделяет
function separatesNumbers(input) {
  const sentance = String(input);
  let onlyNumbers = '';

  for (let i = 0; i < sentance.length; i++) {
    if (!isNaN(sentance[i]) && sentance[i] >= 0 && sentance[i] <= 9) {
      onlyNumbers += sentance[i];
    }
  }

  if (onlyNumbers === '') {
    return NaN;
  }

  return parseInt(onlyNumbers, 10);
}

console.log(separatesNumbers('агент 0097'));
