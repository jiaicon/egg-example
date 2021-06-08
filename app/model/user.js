'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const User = app.model.define('users', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    type: {
      type: INTEGER,
      allowNull: false,
      defaultValue: 5,
    },
    avatar: STRING,
    userName: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    phone: STRING,
    token: STRING,
    password: STRING,
    created_at: DATE,
    updated_at: DATE,
  });
  User.associate = function() {
    User.belongsToMany(app.model.Interface, {
      through: app.model.UserHasInterface,
      foreignKey: 'user_id',
      otherKey: 'interface_id',
    });
  };
  return User;
};
