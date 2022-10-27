'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Ai_Document extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Ai_Document.init(
        {
            document_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            topics: DataTypes.ARRAY(DataTypes.STRING),
            redacted_comment: DataTypes.STRING(10000),
            additional_fields:DataTypes.JSON,
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
            modelName: 'ai_documents',
            schema: 'sentiment_analysis',
            createdAt: false,
            updatedAt: false
        });
    return Ai_Document;
};