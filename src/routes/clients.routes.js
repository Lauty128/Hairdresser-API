//---- Dependencies
import { Router } from "express";

//---- Config
    const router = Router()

//---- Middlewares

//---- Routers

    router.get('/', (req,res)=>{
        res.send("Hola desde clientes")
    })


export { router as clientsRouter }