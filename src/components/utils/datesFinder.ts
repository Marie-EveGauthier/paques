/**
 * Calculates Easter in the Gregorian/Western (Catholic and Protestant) calendar
 * based on the algorithm by Oudin (1940) from http://www.tondering.dk/claus/cal/easter.php
 * Thanks for this gist for the Easter date calculation code: https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
 * @returns {array} [int month, int day]
 */
function getEaster(year) {
  var f = Math.floor,
    // Golden Number - 1
    G = year % 19,
    C = f(year / 100),
    // related to Epact
    H = (C - f(C / 4) - f((8 * C + 13) / 25) + 19 * G + 15) % 30,
    // number of days from 21 March to the Paschal full moon
    I = H - f(H / 28) * (1 - f(29 / (H + 1)) * f((21 - G) / 11)),
    // weekday for the Paschal full moon
    J = (year + f(year / 4) + I + 2 - C + f(C / 4)) % 7,
    // number of days from 21 March to the Sunday on or before the Paschal full moon
    L = I - J,
    month = 3 + f((L + 40) / 44),
    day = L + 28 - 31 * f(month / 4);

  return [month, day];
}

const now = new Date();
const currentYear = now.getFullYear();

const easter = getEaster(currentYear);
// const dimancheDesRameaux = easter.clone().subtract(7, "days");
// const lundiSaint = easter.clone().subtract(6, "days");
// const mardiSaint = easter.clone().subtract(5, "days");
// const mercrediSaint = easter.clone().subtract(4, "days");
// const jeudiSaint = easter.clone().subtract(3, "days");
// const vendrediSaint = easter.clone().subtract(2, "days");
// const samediSaint = easter.clone().subtract(1, "day");
// const paques = easter.clone();

export const getCurrentYear = (): number => {
  return currentYear;
};

// export const getHolyWeekForCurrentYear = () => {
//   return [
//     dimancheDesRameaux,
//     lundiSaint,
//     mardiSaint,
//     mercrediSaint,
//     jeudiSaint,
//     vendrediSaint,
//     samediSaint,
//     paques,
//   ];
// };

export const getPaques = () => {
  return easter;
};
