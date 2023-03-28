//---- Dependencies
    import { Sequelize } from "sequelize"

//---- Config
    import { db_name, db_user,db_password,db_host } from './env.js'

    
export const sequelize = new Sequelize(db_name, db_user, db_password,{
    host:db_host,
    dialect:'mysql'
})

