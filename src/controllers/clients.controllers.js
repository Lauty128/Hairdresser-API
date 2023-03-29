//---- Services
import service from '../services/clients.services.js';


const getClients = (req,res) => {
    console.log('Hola desde clients: ' + req.hostname);
}

const getClient = (req,res) => {
    const { id } = req.params
    console.log('Hola desde clients: ' + req.hostname);
}

const get_shifts_by_client = () => {
    const { id } = req.params
    console.log('Hola desde clients: ' + req.hostname);
}

const newClient = (req,res) => {
    const { id } = req.params
    console.log('Hola desde clients: ' + req.hostname);
}

const deleteClient = (req,res) => {
    const { id } = req.params
    console.log('Hola desde clients: ' + req.hostname);
}

const modifyClient = (req,res) => {
    const { id } = req.params
    console.log('Hola desde clients: ' + req.hostname);
}

export default {
    getClients,
    getClient,
    get_shifts_by_client,
    newClient,
    deleteClient,
    modifyClient
}