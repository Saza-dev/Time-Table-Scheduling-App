import {sequelize} from "../config/db.js"
import { DataTypes } from "sequelize"

const LectureHall = sequelize.define("LectureHall",{
    id: {
        primaryKey: true,
        type: DataTypes.STRING,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seating_capacity:{
        type: DataTypes.INTEGER,
        allowNull:false,
      },
      facilities: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      Availability: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },

})

sequelize.sync();
export default LectureHall;