/**
 * @description sequelize实例
 * @author even
 */

const Sequelize = require('sequelize');
const { 
  MYSQL_CONF:{ 
    seqConf,
    user,
    password,
    database,
    pool
  } 
} = require('../conf/db');
const { isTest, isProd } = require('../conf/env');

isTest && (seqConf.logging = () => {});
isProd && (seqConf.pool = pool);

const seq = new Sequelize(database, user, password, seqConf);

module.exports = seq;