//---- Models
import { Client } from '../models/clients.model.js';
import { Shift } from '../models/shifts.model.js';


const getShifts = async (filters={}) => {
    try{
        const { rows,count } = await Shift.findAndCountAll(filters)
        const status = rows.length > 0 ? 200 : 204
        return {
            data:rows, 
            total:count, 
            status
        }
    }
    catch(error){
        return {
            message:"Ocurrio un error al solicitar los objetos",
            status:500,
            error
        }
    }
}

const getShift = async (id, filters={}) => {
    try{
        const data = await Shift.findOne({
            where:{ id },
            ...filters
        })
        const status = data ? 200 : 204
        return {data, status}

    }
    catch(error){
        return {
            message:"Ocurrio un error al solicitar el objeto",
            status:500,
            error
        }
    }
}

const newShift = async body => {
    try{
        const newData = await Shift.create(body)
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

const deleteShift = async id => {
    try{
        const newData = await Shift.destroy({
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

const modifyShift = async (id, body) => {
    try{
        const dataUpdated = await Shift.update(body, { where:{ id } })
        
        return{
            message:"Objeto actualizado correctamente",
            status:200,
            data:newData
        }
    }
    catch(error){
        return {
            message:"Ocurrio un error mientras se actualizaba el objeto",
            status:500,
            error
        }
    }
}


export default {
    getShifts,
    getShift,
    newShift,
    deleteShift,
    modifyShift
}