import User from '../models/user.models.js'
import bcrypt from 
export const register = async (req, res) => {
  try {
    const newUser = new User(req.body)

    await newUser.save()
    res.status(201).send('okay created')
  } catch (err) {
    res.status(500).send('something wrong')
  }
}

export const login = async (req, res) => {}

export const logout = async (req, res) => {}
