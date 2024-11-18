// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {
  // TODO: real code goes here!
  const times = time.split(':');
  let hour = Number(times[0]);
  let minutes = Number(times[1]);
  const toOrPast = minutes > 30 ? 'to' : 'past';

  const hourMappings = {
    0: 'midnight',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'midday'
  };

  const textMappings = {
    15: 'quarter past',
    30: 'half past',
    45: 'quarter to'
  };

  const numberConversions = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'quarter',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    21: 'twenty one',
    22: 'twenty two',
    23: 'twenty three',
    24: 'twenty four',
    25: 'twenty five',
    26: 'twenty six',
    27: 'twenty seven',
    28: 'twenty eight',
    29: 'twenty nine',
    30: 'half'
  };

  if (time === '0:00') {
    return 'midnight';
  }

  if (time === '12:00') return 'midday';

  if (minutes === 0) return `${numberConversions[hour]} o'clock`;

  if (minutes > 30) {
    hour = hour + 1;
    minutes = 60 - minutes;
  } 

  if (hour > 12) hour = hour - 12;

  return `${numberConversions[minutes]} ${toOrPast} ${hourMappings[hour]}`;
}

module.exports = { convertTimeToWords };