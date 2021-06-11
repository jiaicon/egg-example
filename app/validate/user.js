'use strict';

module.exports = app => {

  const { validator } = app;

  // 校验用户名是否正确
  validator.addRule('userName', (rule, value) => {
    if (/^\d+$/.test(value)) {
      return '用户名应该是字符串';
    } else if (value.length < 5 || value.length > 10) {
      return '用户名的长度应该在5-10之间';
    }
    return true;
  });
  // 校验密码是否正确
  // validator.addRule('passWord', (rule, value) => {
  //   if (/^\d+$/.test(value)) {
  //     return '密码应该是字符串';
  //   } else if (value.length < 5 || value.length > 10) {
  //     return '密码的长度应该在5-10之间';
  //   }
  //   return true;
  // });
};
