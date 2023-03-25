//---- Dependencies
    import express from 'express';
    import morgan from 'morgan';
    import cors from 'cors';
    
//---- Config
    import 'dotenv/config';
    const app = express()
    const PORT = process.env.PORT || 4001

//---- Middlewares
    app.use(morgan('dev'));
    app.use(cors())

//---- Routes
    import { clientsRouter } from './routes/clients.routes.js'
    import { shiftsRouter } from './routes/shifts.routes.js'
    import { hairdressersRouter } from './routes/hairdressers.routes.js'
    
    app.use('/client', clientsRouter )
    app.use('/shift', shiftsRouter )
    app.use('/hairdresser', hairdressersRouter )

//---- Listen
    app.listen(PORT, ()=>{
        console.log('Server on in port ' + PORT);
    })
