import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

//---- Utils
import { createPassword } from "../utils/password.js";

const date = new Date()

//---- Schema
export const Shift = sequelize.define('shifts', {
    id: {
        type: DataTypes.STRING(20),
        defaultValue: createPassword(20),
        primaryKey:true
    },
    // client_id: DataTypes.STRING(20),
    // hairdresser_id: DataTypes.STRING(20),
    date: {
        type: DataTypes.DATE,
        defaultValue: date
    },
    time: DataTypes.STRING,
    finished:{
        type : DataTypes.BOOLEAN, 
        defaultValue: false    
    }
})

