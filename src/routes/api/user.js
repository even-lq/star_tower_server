/**
 * @description user 路由
 */

const router = require('koa-router')();
const { 
  register
} = require('../../controller/user');
router.prefix('/api/user');
const userValidate = require('../../utils/validator/user');
const { genValidator } = require('../../middlewares/validator');

// 注册路由
router.post('/register', genValidator(userValidate), async (ctx, next) => {
  const { nickName, userName, password, gender } = ctx.request.body;

  // controller
  ctx.body = await register({nickName, userName, password, gender});
});

module.exports = router;
