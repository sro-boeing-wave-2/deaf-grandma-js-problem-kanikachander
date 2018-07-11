/**
 * @fileOverview Checks if the string is in uppercase
 */

/**
 * Checks if the string is in uppercase
 * @param {string} s The string to be checked
 * @returns {boolean}
 */
const isUppercase = (s) => {
  const upperCase = s.toUpperCase();
  let check = false;
  if (s === upperCase) {
    check = true;
  }
  return check;
};

module.exports = isUppercase;
