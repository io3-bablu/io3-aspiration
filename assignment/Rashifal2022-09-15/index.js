const date = prompt(`enter your birth date`);
const month = prompt(`enter your birth month`);

function zodiac({ month, date }) {
  if (month > 0 && date > 0 && month <= 12 && date <= 31) {
    if ((month == 12 && date >= 22) || (month == 1 && date <= 19)) {
      console.log(`your zodiac is Capricorn`);
    } else if ((month == 1 && date >= 20) || (month == 2 && date <= 17)) {
      console.log(`your zodiac is Aquarius`);
    } else if (
      (month == 2 && date >= 18 && date <= 28) ||
      (month == 3 && date <= 19)
    ) {
      console.log(`your zodiac is Pisces`);
    } else if ((month == 3 && date >= 20) || (month == 4 && date <= 19)) {
      console.log(`your zodiac is Aries`);
    } else if (
      (month == 4 && date >= 20 && date <= 30) ||
      (month == 5 && date <= 20)
    ) {
      console.log(`your zodiac is Taurus`);
    } else if ((month == 5 && date >= 21) || (month == 6 && date <= 20)) {
      console.log(`your zodiac is Gemini`);
    } else if (
      (month == 6 && date >= 21 && date <= 30) ||
      (month == 7 && date <= 22)
    ) {
      console.log(`your zodiac is Cancer`);
    } else if ((month == 7 && date >= 23) || (month == 8 && date <= 22)) {
      console.log(`your zodiac is Leo`);
    } else if (
      (month == 8 && date >= 23 && date <= 30) ||
      (month == 9 && date <= 22)
    ) {
      console.log(`your zodiac is Virgo`);
    } else if ((month == 9 && date >= 23) || (month == 10 && date <= 22)) {
      console.log(`your zodiac is Libra`);
    } else if (
      (month == 10 && date >= 23 && date <= 30) ||
      (month == 11 && date <= 21)
    ) {
      console.log(`your zodiac is Scorpio`);
    } else if ((month == 11 && date >= 22) || (month == 12 && date <= 21)) {
      console.log(`your zodiac is Sagittarius`);
    } else {
      console.log(`check your date of birth and re-enter`);
    }
  } else {
    console.log(`enter valid data and month`);
  }
}
zodiac({ month: month, date: date });
