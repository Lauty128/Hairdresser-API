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
    Image: DataTypes.STRING,
    owner: DataTypes.STRING(50),
    owner_image: DataTypes.STRING,
    instagram: DataTypes.STRING,
    phone: DataTypes.INTEGER,
    user: DataTypes.STRING(50),
    password: DataTypes.STRING(50)
})

//---- Refs
Hairdresser.hasMany(Client)
Hairdresser.hasMany(Shift)

