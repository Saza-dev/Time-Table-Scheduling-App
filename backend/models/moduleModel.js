import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"

const Module = sequelize.define("Module",{
    moduleid: {
        primaryKey: true,
        type: DataTypes.STRING,
    },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      
      department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    credits:{
        type:DataTypes.INTEGER,
        allowNull:false

    },
    lectureid:{
        type:DataTypes.INTEGER,
        allowNull:false  
    }

})

sequelize.sync();
export default Module;