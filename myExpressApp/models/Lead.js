'use strict';
module.exports = (sequlize, DataTypes) => {
    var Lead = sequlize.define('Lead', {
        id: {
            type: DataTypes.UUID,
            defaulvalue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    });
    return Lead;
};
