/**
 * @description 常量
 * @author even
 */

const { isProd } = require('./env');

let REDIS_CONF = {
  port: 6379,
  host: '127.0.0.1'
};

let MYSQL_CONF = {
  port: '3306',
  user: 'root',
  password: 'liqing',
  database: 'star_tower_db',
  seqConf: {
    host: 'localhost',
    dialect: 'mysql',
  },
  pool: {
    max: 5, // 连接池中最大的连接数量
    min: 0, // 最小
    idle: 10000 // 10s之内没使用则自动释放
  }
};

if (isProd) {
  REDIS_CONF = {
    // 线上的 redis 配置
    port: 6379,
    host: '127.0.0.1'
  };

  MYSQL_CONF = {
    // 线上的 mysql 配置
    port: '3306',
    host: 'localhost',
    user: 'root',
    password: 'liqing',
    database: 'star_tower_db'
  };
}

module.exports = {
  REDIS_CONF,
  MYSQL_CONF
};