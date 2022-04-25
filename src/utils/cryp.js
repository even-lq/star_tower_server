/**
 * @description 加密方法
 */

const crypto = require('crypto');
const { CRYPTO_SECRET_KEY } = require('../conf/constant');

// function _md5(content) {
//   return crypto.createHash('md5').update(content).digest('hex');
// }

/**
 * 加密方法
 * @param {string} content 明文
 */
function doCrypto(content) {
  return crypto
    .createHash('md5')
    .update(`password=${content}&key=${CRYPTO_SECRET_KEY}`)
    .digest('hex');
}

module.exports = doCrypto;
