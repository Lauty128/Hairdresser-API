//---- Dependencies
import { DataTypes } from "sequelize";
import { sequelize } from "../config/sequelize.js";

//---- Models
import { Shift } from "./shifts.model.js";

//---- Utils
import { createPassword } from "../utils/password.js";


//---- Schema
export const Client = sequelize.define('clients', {
    id: {
        type: DataTypes.STRING(20),
        defaultValue: createPassword(20),
        primaryKey:true
    },
    // hairdresser_id: DataTypes.STRING(20),
    name: DataTypes.STRING(50),
    instagram: {
        type: DataTypes.STRING,
        defaultValue: null
    },
    phone: {
        type: DataTypes.STRING,
        defaultValue: null
    },
})

Client.hasMany(Shift, { foreignKey: "id_client" })

Shift.belongsTo(Client, { foreignKey: "id_client" })