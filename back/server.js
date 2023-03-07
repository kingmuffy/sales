import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import mofe from './routes/auth.route.js'

const app = express()
dotenv.config()
mongoose.set('strictQuery')

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log('good!')
  } catch (error) {
    console.log(error)
  }
}
app.use(express.json())
app.use('/api/auth', mofe)

app.listen(8800, () => {
  connect()
  console.log('backend server is running')
})
