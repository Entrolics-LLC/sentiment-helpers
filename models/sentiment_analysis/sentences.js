'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Sentence extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Sentence.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            document_id: DataTypes.STRING,
            sentence: DataTypes.STRING(2000),
            score: DataTypes.FLOAT,
            magnitude: DataTypes.FLOAT,
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
            modelName: 'documents',
            schema: 'sentiment_analysis',
            createdAt: false,
            updatedAt: false
        });
    return Sentence;
};