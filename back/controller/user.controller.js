import User from '../models/user.models.js'
import jwt from 'jsonwebtoken'

export const deleteUser = async (req, res) => {
  const token = req.cookies.accessToken
  if (!token) return res.status(401).send('you are not authenticated')

  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    res.send(payload)
  })

  //   await User.findByIdAndDelete(req.params.id)
}
