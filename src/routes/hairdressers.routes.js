//---- Dependencies
    import { Router } from "express";

//---- Config
    const router = Router()

//---- Middlewares

//---- Routers

    router.get('/', (req,res)=>{
        res.send("Hola desde peluquerias")
    })


export { router as hairdressersRouter  }