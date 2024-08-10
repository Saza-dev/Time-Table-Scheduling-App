import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"


const Student = sequelize.define("Student",{
    studentId: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      department:{
        type: DataTypes.STRING,
        allowNull:false,
      },
      contactDetails: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      batchId : {
        type: DataTypes.STRING,
        allowNull: false,
      }

})


sequelize.sync();
export default Student;