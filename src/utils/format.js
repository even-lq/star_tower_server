/**
 * @description 数据格式化
 */
const { DEFAULT_AVATAR } = require('../conf/constant');

/**
 * 用户默认头像
 * @param {Object} obj 用户对象
 */
function _formatUseravatar(obj) {
  if (!obj.avatar) { 
    obj.avatar = DEFAULT_AVATAR;
  }
  return obj;
}

/**
 * 格式化用户信息
 * @param {Array|Object} list 用户列表或单个用户对象
 */
function formatUser(list) {
  if (!list) {
    return list;
  }
  if (Array.isArray(list)) {

    // 数组，用户列表
    return list.map(_formatUseravatar);
  }
  
  // 单个用户
  return _formatUseravatar(list);
}

module.exports = {
  formatUser
};