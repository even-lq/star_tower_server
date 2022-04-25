/**
 * @description sequelize同步到数据库
 * @author even
 */

const seq = require('./sequelize');

require('../model/index');

// 测试连接数据库
seq
  .authenticate()
  .then(() => console.log('ok'))
  .catch(err => console.log(err));

// 将所有定义的模型同步到数据库
// 如果force为真，每个Model将在创建自己的表之前运行DROP TABLE If EXISTS
seq
  .sync({force: true})
  .then(() => {
    console.log('sync ok');
    process.exit();
  })
  .catch((e) => {
    console.log('sync fail');
    console.error(e);
    process.exit();
  });