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
            submission_id: {
                type: DataTypes.STRING,
                primaryKey: true,
                allowNull: false
            },
            user_id:DataTypes.STRING,
            documents: DataTypes.ARRAY(DataTypes.STRING),
            flow: DataTypes.STRING,
            tasks: DataTypes.ARRAY(DataTypes.STRING),
            status: DataTypes.STRING,
            priority: DataTypes.STRING,
            case_status: DataTypes.STRING,
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
            schema: 'virgin_island',
            createdAt: false,
            updatedAt: false
        });
    return Submission;
};