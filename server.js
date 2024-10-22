import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
dotenv.config({ path: './config.env' })
import routes from './routes/routes.js'
const app = express()
app.use(express.json());


const port = process.env.PORT;
app.use(cors()); 

app.use('/', routes);
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));

app.listen(port, (err) => {
    if (err) { console.error(err) }
    console.log(`Server is running in port ${port}`)
})