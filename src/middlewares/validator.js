/**
 * @description json schema 验证中间件
 * @author even
 */
const { Error, jsonSchemaFileInfo } = require('../model');

/**
 * 生成 json schema 验证的中间件
 * @param {function} validateFn 验证函数
 */
function genValidator(validateFn) {
  return async function validator(ctx, next) {
    
    // 数据校验
    const error = validateFn(ctx.request.body);
    if (error) {
      ctx.body = new Error(jsonSchemaFileInfo);
      return;
    }
    await next();
  };
}

module.exports = {
  genValidator
};
