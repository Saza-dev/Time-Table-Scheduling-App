import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"

const batch = sequelize.define("batch",{

    batchId: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      year: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      noOfStudents:{
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      }
      
})

sequelize.sync();
export default batch;