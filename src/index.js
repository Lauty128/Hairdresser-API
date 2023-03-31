//---- Code
    import {sequelize} from './config/sequelize.js'

//---- Dependencies
    import express from 'express';
    import morgan from 'morgan';
    import cors from 'cors';
    
//---- Config
    const app = express()
    const PORT = process.env.PORT || 4001

//---- Middlewares
    app.use(morgan('dev'));
    app.use(express.json())
    app.use(express.urlencoded({ extended: false }))
    app.use(cors())

//---- Routes
    import { clientsRouter } from './routes/clients.routes.js'
    import { shiftsRouter } from './routes/shifts.routes.js'
    import { hairdressersRouter } from './routes/hairdressers.routes.js'
    
    app.use('/client', clientsRouter )
    app.use('/shift', shiftsRouter )
    app.use('/hairdresser', hairdressersRouter )

    // import './models/clients.model.js';
    // import './models/shifts.model.js';
    // import './models/hairdressers.model.js';

//---- Listen
    async function main(){
        try{
            await sequelize.sync(/*{ alter:true }*/);
            console.log('Connection has been established successfully.');
            app.listen(PORT, ()=>{
                console.log('Server on in port ' + PORT);
            })
        }catch(error){
            console.error('Unable to connect to the database:', error);
        }
    }

    main()