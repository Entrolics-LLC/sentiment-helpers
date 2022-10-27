'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Document extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Document.init(
        {
            id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            submission_id: DataTypes.STRING(100000),
            document_no:{
                type: DataTypes.STRING
            },
            comment: DataTypes.STRING(100000),
            notes: DataTypes.STRING(5000),
            reviewed:DataTypes.STRING,
            issue_area:DataTypes.STRING,
            similar_records:DataTypes.INTEGER,
            reviewed_by: DataTypes.STRING,
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
    return Document;
};