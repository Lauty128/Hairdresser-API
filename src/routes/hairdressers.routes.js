//---- Dependencies
    import { Router } from "express";

//---- Controllers
    import controller from '../controllers/hairdressers.controllers.js'

    //---- Config
    const router = Router()

//---- Middlewares

//---- Routers
    router.get('/', controller.getHairdressers)  // Get all hairdresser [ default : sort by Date ]

    //--- Relational tables
    router.get('/:id/clients', controller.get_clients_by_hairdresser)  // Get relational table of hairdresser and clients
    router.get('/:id/shifts', controller.get_shifts_by_hairdresser)  // Get relational table of hairdresser and shifts

    router.get('/:id', controller.getHairdresser) // get a hairdresser
    
    router.post('/', controller.newHairdresser)  // Create new hairdresser
    
    router.delete('/:id', controller.deleteHairdresser)  // Create new hairdresser

    



export { router as hairdressersRouter  }
