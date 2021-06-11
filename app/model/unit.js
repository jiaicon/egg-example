'use strict';

module.exports = app => {
  const { INTEGER, DATE, STRING } = app.Sequelize;

  const Units = app.model.define('units', {
    id: { type: INTEGER, primaryKey: true, autoIncrement: true },
    uuid: {
      type: STRING,
      // allowNull: false,
    },
    unit_name: {
      allowNull: false,
      type: STRING,
    },
    unit: {
      allowNull: false,
      type: STRING,
    },
    safety: {
      type: INTEGER,
    },
    lat: {
      type: INTEGER,
    },
    lng: {
      type: INTEGER,
    },
    province: {
      type: STRING,
    },
    city: {
      type: STRING,
    },
    district: {
      type: STRING,
    },
    adcode: {
      type: INTEGER,
    },
    industry: {
      type: STRING,
    },
    type: {
      type: STRING,
    },
    address: {
      type: STRING,
    },
    created_at: {
      allowNull: false,
      type: DATE,
    },
    updated_at: {
      allowNull: false,
      type: DATE,
    },
    unit_code: {
      type: STRING,
    },
  });
  Units.associate = () => {
    // app.model.Units.hasMany(app.model.Domain, {
    //   foreignKey: 'unit_uuid', sourceKey: 'uuid',
    // });
    // app.model.Units.hasMany(app.model.Subdomain, {
    //   foreignKey: 'unit_uuid', sourceKey: 'uuid',
    // });
    // app.model.Units.hasMany(app.model.Ip, {
    //   foreignKey: 'unit_id', sourceKey: 'uuid', as: 'ips',
    // });
    // app.model.Units.hasMany(app.model.IpNode, {
    //   foreignKey: 'unit_uuid', sourceKey: 'uuid',
    // });
    // app.model.Units.hasMany(app.model.Website, {
    //   foreignKey: 'unit_uuid', sourceKey: 'uuid',
    // });
    // app.model.Units.hasMany(app.model.Port, {
    //   foreignKey: 'unit_uuid', sourceKey: 'uuid',
    // });
    // app.model.Units.hasMany(app.model.Event, {
    //   foreignKey: 'unit_uuid', sourceKey: 'uuid',
    // });
  };

  return Units;
};
