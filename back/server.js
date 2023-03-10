import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
// import userRoute from './routes/user.routes.js'
// import gigRoute from './routes/gig.route.js'
// import orderRoute from './routes/order.route.js'
// import conversationRoute from './routes/conversation.route.js'
// import messageRoute from './routes/message.route.js'
// import reviewRoute from './routes/review.route.js'

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
app.use('/api/auth', authRoute)
// app.use('/api/users', userRoute)
// app.use('/api/gigs', gigRoute)
// app.use('/api/order', orderRoute)
// app.use('/api/conversations', conversationRoute)
// app.use('/api/messages', messageRoute)
// app.use('/api/reviews', reviewRoute)

app.listen(8800, () => {
  connect()
  console.log('backend server is running')
})
