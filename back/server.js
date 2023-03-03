import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'

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

app.listen(8800, () => {
  connect()
  console.log('backend server is running')
})
