/**
 * @description user service
 * @author even
 */

const { User } = require('../model');
const { formatUser } = require('../utils/format');

async function getUserInfo(userName, password) {
  
  // 查询条件
  const where = {
    userName
  };
  password && (where.password = password);

  // 查询
  const result = await User.findOne({
    attributes: ['id', 'userName', 'nickName', 'avatar', 'city'],
    where
  });

  // 格式化
  return result ? formatUser(result.dataValues) : result;
}

/**
 * 创建用户
 * @param {string} nickName 昵称
 * @param {string} userName 用户名
 * @param {string} password 密码
 * @param {number} gender 性别：1.男 2.女 3.保密
 */
async function createUser({nickName = userName, userName, password, gender = 3}) {
  const result = await User.create({
    nickName,
    userName,
    gender,
    password,
  });
  return result.dataValues;
}

module.exports = {
  getUserInfo,
  createUser
};