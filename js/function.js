// длина строки
function checkStringLength(str, maxLength) {
  return str.length <= maxLength;
}
(checkStringLength('строка', 20));

// палиндром
function checksPalindrome(string) {
  const formattedString = string.replaceAll(' ', '').toLowerCase();
  let reversedString = '';

  for (let i = formattedString.length - 1; i >= 0; i--) {
    reversedString += formattedString[i];
  }

  const result = formattedString === reversedString;
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

(separatesNumbers('агент 0097'));


// время встречи
function timeToMinutes(time) {
  const [hours, minutes] = time.split(':').map(Number);
  return hours * 60 + minutes;
}

function calculatesTime (turnTo, turnOut, meetingStarts, meetingDuration) {
  const turnToWork = timeToMinutes(turnTo);
  const turnOutFromWork = timeToMinutes(turnOut);
  const meetingStartingTime = timeToMinutes(meetingStarts);

  if ((meetingStartingTime + meetingDuration) > turnOutFromWork || turnToWork > meetingStartingTime) {
    return false;
  } else {
    return true;
  }
}

// console.log(calculatesTime('08:00', '17:30', '14:00', 90));
// console.log(calculatesTime('8:0', '10:0', '8:0', 120));
// console.log(calculatesTime('08:00', '14:30', '14:00', 90));
// console.log(calculatesTime('14:00', '17:30', '08:0', 90));
// console.log(calculatesTime('8:00', '17:30', '08:00', 900));
