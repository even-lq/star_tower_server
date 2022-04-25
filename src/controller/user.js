/**
 * @description user controller
 * @author even
 */

const { getUserInfo, createUser } = require('../service/user');
const { Success, Error } = require('../model');
const {
  user: {
    registerUserNameExistInfo,
    registerFailInfo
  }
} = require('../model');
const doCrypto = require('../utils/cryp');

/**
 * 注册
 * @param {string} nickName 昵称
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别：1.男 2.女 3.保密
 */
async function register({nickName, userName, password, gender}) {
  
  // service
  const userInfo = await getUserInfo(userName);
  if (userInfo) {
    return new Error(registerUserNameExistInfo);
  }

  // service
  try {
    await createUser({
      nickName,
      userName,
      password: doCrypto(password),
      gender
    });
    return new Success();
  } catch (error) {
    console.error(error.message, error.stack);
    return new Error(registerFailInfo);
  }
};

module.exports = {
  register
};