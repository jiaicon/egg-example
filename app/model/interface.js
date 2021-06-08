'use strict';

module.exports = app => {
  const { INTEGER, STRING, DATE } = app.Sequelize;
  const Interface = app.model.define('interface', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    guard_name: {
      type: STRING,
      unique: true,
      allowNull: false,
    },
    remark: {
      type: STRING,
      allowNull: false,
    },
    created_at: DATE,
    updated_at: DATE,
  });
  Interface.associate = function() {
  };
  return Interface;
};
