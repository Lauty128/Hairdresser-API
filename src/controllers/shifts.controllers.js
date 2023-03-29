//---- Services
import service from '../services/shifts.services.js';


export const getShifts = (req,res) => {
    res.send('Hola desde Shifts: ' + req.hostname)
}

const getShift = (req,res) => {
    const { id } = req.params
    res.send('Hola desde Shifts: ' + req.hostname)
}

const newShift = (req,res) => {
    res.send('Hola desde Shifts: ' + req.hostname)
}

const deleteShift = (req,res) => {
    const { id } = req.params
    res.send('Hola desde Shifts: ' + req.hostname)
}

const toogle_finished_shift = (req,res) => {
    res.send('Hola desde Shifts: ' + req.hostname)
}

const modifyShift = (req,res) => {
    const { id } = req.params
    res.send('Hola desde Shifts: ' + req.hostname)
}


export default {
    getShifts,
    getShift,
    newShift,
    deleteShift,
    toogle_finished_shift,
    modifyShift
}