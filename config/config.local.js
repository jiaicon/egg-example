'use strict';

exports.sequelize = {
  dialect: 'mysql',
  host: '192.168.199.155',
  port: 3306,
  database: 'gis-v2',
  username: 'root',
  password: 'root',
  define: {
    timestamps: true,
    // timestamps: false,
    paranoid: false,
    freezeTableName: true,
    underscored: false,
    createdAt: 'created_at', // 自定义字段名，默认为'createdAt'，将其改为'created_at'
    updatedAt: 'updated_at',
  },
  timezone: '+8:00',
  dialectOptions: {
    dateStrings: true,
    typeCast(field, next) {
      if (field.type === 'DATETIME') {
        return field.string();
      }
      return next();
    },
  },
};

exports.apiHost = {
  v1: 'http://127.0.0.1:7001/api',
};
