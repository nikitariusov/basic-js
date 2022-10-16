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
  if (date) {  
    const SEASONS = ['winter', 'spring', 'summer', 'autumn']
    try {
      const numOfMonth = date.getMonth()
      console.log(numOfMonth);
      console.log(typeof date);
      let month
      if (numOfMonth >= 0) {

        if (numOfMonth === 11 || numOfMonth === 0 || numOfMonth === 1) {
          month = SEASONS[0]
        } else if (numOfMonth === 2 || numOfMonth === 3 || numOfMonth === 4) {
          month = SEASONS[1]
        } else if (numOfMonth === 5 || numOfMonth === 6 || numOfMonth === 7) {
          month = SEASONS[2]
        } else if (numOfMonth === 8 || numOfMonth === 9 || numOfMonth === 10) {
          month = SEASONS[3]
        }

        return month;
      }
    }
    catch {
        return new Error('Invalid date!')
    }
  } else {
    return 'Unable to determine the time of year!';
  }
}

module.exports = {
  getSeason
};

console.log(getSeason(840, 0, 6, 9, 20, 31, 683));