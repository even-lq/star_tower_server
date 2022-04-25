/**
 * @description 数据模型入口文件
 * @author even
 */

const User = require('./User');
const { Success, Error } = require('./Response');
const ErrorInfo = require('./ErrorInfo');

module.exports = {
  User,
  Success,
  Error,
  ...ErrorInfo
};