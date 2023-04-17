const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 *
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 *
 * @example
 *
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 *
 */
function getSeason(date) {
  // throw new NotImplementedError('Not implemented');
  if (!(date instanceof Date) || date.hasOwnProperty('toString')) {
    throw new Error("Invalid date!");
  }
  if (arguments[0] == undefined) {
    throw new Error("Unable to determine the time of year!");
  }
  //return Date.parse(date)
  //return !date.toDateString();
  //return false;
  //return Object.getOwnPropertyNames(date);
  //return arguments[0] === false;
  const MONTH = date.getMonth();
  if (MONTH < 2 || MONTH === 11) {
    return "winter";
  } else if (MONTH >= 2 && MONTH < 5) {
    return "spring";
  } else if (MONTH >= 5 && MONTH < 8) {
    return "summer";
  } else if (MONTH >= 8 && MONTH < 11) {
    return "autumn";
  }

  throw new Error("Unable to determine the time of year!");
}

module.exports = {
  getSeason
};
