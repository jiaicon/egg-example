# 基于 egg 的用户注册登录实例



## QuickStart
1. 新建`mysql`数据库`gis-v2`
2. 运行`/db/users.sql`文件
3. 修改`/config/config.local.js`文件
4. npm i
5. npm run dev

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

### Deploy

```bash
$ npm start
$ npm stop
```

### npm scripts

- Use `npm run lint` to check code style.
- Use `npm test` to run unit test.
- Use `npm run autod` to auto detect dependencies upgrade, see [autod](https://www.npmjs.com/package/autod) for more detail.


[egg]: https://eggjs.org

### 特色
- [ ] 使用`egg-sequelize`orm数据库管理
- [ ] `egg-logger`日志管理
- [ ] `egg-validate`数据验证
- [ ] `egg-jwt`数据加密
- [ ] 使用`session`储存用户token，前后端使用`cookie`换取用户信息。
