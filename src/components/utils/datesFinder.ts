/**
 * Calculates Easter in the Gregorian/Western (Catholic and Protestant) calendar
 * based on the algorithm by Oudin (1940) from http://www.tondering.dk/claus/cal/easter.php
 * Thanks for this gist for the Easter date calculation code: https://gist.github.com/johndyer/0dffbdd98c2046f41180c051f378f343
 * @returns {array} [int month, int day]
 */
function getEaster(year: number): [month: number, day: number] {
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

const [month, day] = getEaster(currentYear);

const easterDate = new Date(currentYear, month - 1, day);

const getDisplayedDates = (dayToSubscribe: number) => {
  const date = new Date(easterDate);

  const calculatedDate = date.setDate(date.getDate() - dayToSubscribe);
  const formattedDate = new Date(calculatedDate).toLocaleString("fr-FR", {
    day: "numeric",
    month: "long",
  });
  return formattedDate;
};

const dimancheDesRameaux = getDisplayedDates(7);
const lundiSaint = getDisplayedDates(6);
const mardiSaint = getDisplayedDates(5);
const mercrediSaint = getDisplayedDates(4);
const jeudiSaint = getDisplayedDates(3);
const vendrediSaint = getDisplayedDates(2);
const samediSaint = getDisplayedDates(1);
const paques = getDisplayedDates(0);

export const getCurrentYear = (): number => {
  return currentYear;
};

export const getHollyWeekForCurrentYear = (): string[] => {
  return [
    dimancheDesRameaux,
    lundiSaint,
    mardiSaint,
    mercrediSaint,
    jeudiSaint,
    vendrediSaint,
    samediSaint,
    paques,
  ];
};
