'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable('Leads', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaulvalue: Sequelize.UUIDV4
            },
            createAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updateAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            email: {
                allowNull: false,
                type: Sequelize.STRING
            },
            name: {
                allowNull: false,
                type: Sequelize.STRING
            },
        });
    },
    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable('Leads');
    }
}; 
