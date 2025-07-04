import { DataTypes, Sequelize } from "sequelize";

export default {
  up: async (queryInterface: any) => {
    await queryInterface.createTable("Sub_titles", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      main_title_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        length: 100,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        length: 1000,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deletedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      }
    });
  },

  down: async (queryInterface: any) => {
    await queryInterface.dropTable("Sub_titles");
  }
};
