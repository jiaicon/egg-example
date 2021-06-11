'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;
  const IpNode = app.model.define('ip', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    unit_id: INTEGER,
    lat: {
      type: INTEGER,
    },
    lng: {
      type: INTEGER,
    },
    created_at: {
      allowNull: false,
      type: DATE,
    },
    updated_at: {
      allowNull: false,
      type: DATE,
    },
  }, {
  });
  IpNode.associate = () => {
    // app.model.IpNode.belongsTo(app.model.Units, { foreignKey: 'unit_id', targetKey: 'id' });
  };
  return IpNode;
};
