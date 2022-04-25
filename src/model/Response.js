/**
 * @description response的数据模型
 * @author even
 */

/**
 * 基础模块
 */
class Base {
  constructor({errno, data, message}) {
    this.errno = errno;
    data && (this.data = data);
    message && (this.message = message);
  }
}

/**
 * 成功模块
 */
class Success extends Base {
  constructor(data = {}) {
    super({errno: 0, data});
  }
}

/**
 * 失败模块
 */
class Error extends Base {
  constructor({errno, message}) {
    super({errno, message});
  }
}

module.exports = {
  Success,
  Error
};