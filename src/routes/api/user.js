/**
 * @description user 路由
 */

const router = require('koa-router')();

router.prefix('/api/user');

// 注册路由
router.post('/register', async (ctx, next) => {
  
});

module.exports = router;
