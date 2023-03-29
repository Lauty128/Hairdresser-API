//---- Dependencies
    import { Router } from "express";

//---- Controllers
    import controller from '../controllers/shifts.controllers.js';

//---- Config
    const router = Router()

//---- Middlewares

//---- Routers

    router.get('/', controller.getShifts)  // get all shifts [ default: sort by Date ('desc') ]
    router.get('/:id', controller.getShift) // get a shift
    
    router.post('/', controller.newShift)  // create a new shift
    
    router.delete('/:id', controller.deleteShift)  // delete a shift
    
    router.put('/:id/finish', controller.toogle_finished_shift) // toogle the 'finished' property between true and false
    router.put('/:id', controller.modifyShift)  // modify a shift
    

export { router as shiftsRouter }