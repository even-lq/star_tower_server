/**
 * @description 环境变量
 * @author even
 */

const ENV = process.env.NODE_ENV;

module.exports = {
  isDev: ENV === 'dev',
  notDev: ENV !== 'dev',
  isProd: ENV === 'prd',
  notProd: ENV !== 'prd',
  isTest: ENV === 'test',
  notTest: ENV !== 'test'
};