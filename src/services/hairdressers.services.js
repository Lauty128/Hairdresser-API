//---- Dependencies
import { Op } from "sequelize";

//---- Model
import { Hairdresser } from '../models/hairdressers.model.js';


const getHairdressers = async (filters={}) => {
    try{
        const data = await Hairdresser.findAll(filters)
        const status = data.length > 0 ? 200 : 204
        return {data, status}

    }
    catch(error){
        return {
            message:"Ocurrio un error al solicitar los objetos",
            status:500,
            error
        }
    }
}

const getHairdresser = async (id, filters={}) => {
    try{
        const data = await Hairdresser.findOne({
            where: { id },
            ...filters
        }) 
        return data
    }
    catch(error){
        return {
            message:"Ocurrio un error al solicitar el objeto",
            status:500,
            error
        }
    }
}

const newHairdresser = async body => {
    try{
        const newData = await Hairdresser.create(body)
        return{
            message:"Objeto creado correctamente",
            status:201,
            data:newData
        }
    }
    catch(error){
        return {
            message:"Ocurrio un error mientras se creaba el objeto",
            status:500,
            error
        }
    }
}

const deleteHairdresser = async id => {
    try{
        const newData = await Hairdresser.destroy({
            where:{ id }
        })
        return{
            message:"Objeto eliminado correctamente",
            status:200,
            data:newData
        }
    }
    catch(error){
        return {
            message:"Ocurrio un error mientras se eliminaba el objeto",
            status:500,
            error
        }
    }
}

export default {
    getHairdressers,
    getHairdresser,
    newHairdresser,
    deleteHairdresser,
}

