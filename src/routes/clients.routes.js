//---- Dependencies
    import { Router } from "express";

//---- Controllers
    import controller from '../controllers/clients.controllers.js'

//---- Config
    const router = Router()

//---- Middlewares

//---- Routers
    router.get('/', controller.getClients)  // Get all clients [ default : sort by Date ]
    router.get('/:id', controller.getClients) // get a client
    
    router.post('/', controller.newClient)  // Create a new client
    
    router.delete('/:id', controller.deleteClient) // delete a client
    
    router.put('/:id', controller.modifyClient) // modify a client

    //--- Relational tables
    router.get('/:id/shifts', controller.get_shifts_by_client) // Get relational table of client and shifts


export { router as clientsRouter }
