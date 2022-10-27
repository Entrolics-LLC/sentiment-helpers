'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Entity extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Entity.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            document_id: DataTypes.STRING,
            entity: DataTypes.STRING,
            magnitude: DataTypes.FLOAT,
            salience: DataTypes.FLOAT,
            score: DataTypes.FLOAT,
            entity_type:DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            },
            is_deleted:{ 
                type:DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: 'entities',
            schema: 'sentiment_analysis',
            createdAt: false,
            updatedAt: false
        });
    return Entity;
};