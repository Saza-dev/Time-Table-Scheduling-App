import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"

const timeTable = sequelize.define("timeTable",{

      timeTableId: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement:true,
      },
      Day: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      From: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      To: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      batchId:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      lecturerId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      moduleId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hallId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      }

})


sequelize.sync();
export default timeTable;