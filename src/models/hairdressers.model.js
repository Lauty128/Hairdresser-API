//---- Dependencies
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

//---- Models
import { Shift } from "./shifts.model.js";
import { Client } from "./clients.model.js";

//---- Utils
import { createPassword } from "../utils/password.js";


//---- Schema
export const Hairdresser = sequelize.define('hairdressers', {
    id: {
        type: DataTypes.STRING(20),
        defaultValue: createPassword(20),
        primaryKey:true
    },
    name: DataTypes.STRING(50),
    image: DataTypes.STRING,
    owner: DataTypes.STRING(50),
    owner_image: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    instagram: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    phone: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    user: DataTypes.STRING(50),
    password: DataTypes.STRING(50)
})

//---- Refs
Hairdresser.hasMany(Client, { foreignKey:"id_hairdresser" })
Hairdresser.hasMany(Shift, { foreignKey:"id_hairdresser" })

Client.belongsTo(Hairdresser, { foreignKey:"id_hairdresser" })
Shift.belongsTo(Hairdresser, { foreignKey:"id_hairdresser" })



