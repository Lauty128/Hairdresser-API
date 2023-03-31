//---- Model
import { Client } from '../models/clients.model.js';
//import { Shift } from '../models/shifts.model.js';


const getClients = async (filters={}) => {
    try{
        const data = await Client.findAll(filters)
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

const getClient = async (id, filters = {}) => {
    try{
        const data = await Client.findOne({
            where:{ id },
            ...filters
        })
        const status = data ? 200 : 204
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

const newClient = async body => {
    try{
        const newData = await Client.create(body)
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

const deleteClient = async id => {
    try{
        const newData = await Client.destroy({
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

const modifyClient = async (id, body) => {
    try{
        const dataUpdated = await Client.update(body, { where:{ id } })
        
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
    getClients,
    getClient,
    newClient,
    deleteClient,
    modifyClient
}