//---- Services
import service from '../services/hairdressers.services.js';

export const getHairdressers = (req,res) => {
    res.send('Hola desde Hairdresser: ' + req.hostname)
}

const getHairdresser = (req,res) => {
    const { id } = req.params
    res.send('Hola desde Hairdresser: ' + req.hostname)
}

const get_shifts_by_hairdresser = (req,res) => {
    const { id } = req.params
    res.send('Hola desde Hairdresser: ' + req.hostname)
}

const get_clients_by_hairdresser = (req,res) => {
    const { id } = req.params
    res.send('Hola desde Hairdresser: ' + req.hostname)
}

const newHairdresser = (req,res) => {
    res.send('Hola desde Hairdresser: ' + req.hostname)
}

const deleteHairdresser = (req,res) => {
    const { id } = req.params
    res.send('Hola desde Hairdresser: ' + req.hostname)
}

export default {
    getHairdresser,
    getHairdressers,
    get_clients_by_hairdresser,
    get_shifts_by_hairdresser,
    newHairdresser,
    deleteHairdresser,
}