import express from 'express';
import mainRouter from './routes/main.route.js';
import sequelize from './db.js';
import cors from 'cors'

const PORT = process.env.PORT || 5000

const app = express()


app.use(cors())
app.use(express.json())
app.use('/', mainRouter)

const start = async () => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        
        app.listen(PORT, () => console.log(`server started at port ${PORT}`))
        console.log('Соединение с БД было успешно установлено')
    } catch (e) {
        console.log('Невозможно выполнить подключение к БД: ', e)
    }
}

start()
