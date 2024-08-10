import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"

const timeTable = sequelize.define("timeTable",{

    timeTableId: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      timeSlot: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      batchId:{
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      lecturerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      moduleId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      hallId: {
        type: DataTypes.STRING,
        allowNull: false,
      }

})


sequelize.sync();
export default timeTable;