'use strict';

module.exports = app => {
  const { INTEGER, DATE } = app.Sequelize;
  const UserHasInterface = app.model.define('user_has_interface', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    user_id: {
      type: INTEGER,
      allowNull: false,
    },
    interface_id: {
      type: INTEGER,
      allowNull: false,
    },
    created_at: DATE,
    updated_at: DATE,
  });
  UserHasInterface.associate = function() {
  };
  return UserHasInterface;
};
