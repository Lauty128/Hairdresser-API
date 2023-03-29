//---- Dependencies
    import { Router } from "express";

//---- Controllers
    import controller from '../controllers/hairdressers.cotrollers.js'

    //---- Config
    const router = Router()

//---- Middlewares

//---- Routers
    router.get('/', controller.getHairdressers)  // Get all hairdresser [ default : sort by Date ]
    router.get('/:id', controller.getHairdresser) // get a hairdresser
    
    router.post('/', controller.newHairdresser)  // Create new hairdresser
    
    router.delete('/', controller.deleteHairdresser)  // Create new hairdresser

    //--- Relational tables
        router.get('/:id/clients', controller.get_clients_by_hairdresser)  // Get relational table of hairdresser and clients
        router.get('/:id/shifts', controller.get_shifts_by_hairdresser)  // Get relational table of hairdresser and shifts



export { router as hairdressersRouter  }
