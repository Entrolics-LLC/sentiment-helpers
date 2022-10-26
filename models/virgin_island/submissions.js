'use strict';
const {
    Model, NOW
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Submission extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Submission.init(
        {
            submission_no:{
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            submission_id: {
                type: DataTypes.STRING,
                allowNull: false
            },
            name: DataTypes.STRING,
            description: DataTypes.STRING,
            user_id:DataTypes.STRING,
            status: DataTypes.STRING,
            created_at: {
                type: DataTypes.DATE
            },
            completed_date: {
                type: DataTypes.DATE
            },
            is_deleted:{ 
                type:DataTypes.BOOLEAN,
                defaultValue: false
            }
        },
        {
            sequelize,
            modelName: 'submissions',
            schema: 'sentiment_analysis',
            createdAt: false,
            updatedAt: false
        });
    return Submission;
};