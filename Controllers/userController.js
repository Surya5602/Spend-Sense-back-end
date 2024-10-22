import * as passwordEncrypt from '../utils/passwordEncrypt.js'
import * as userDao from '../DAO/user.dao.js'
import jwt from 'jsonwebtoken'
import { secretKey } from '../config.js'


export const singupUser = async (req, res) => {
    const formData = req.body.formData
    const firstname = formData.firstname
    const email = formData.email
    const password = formData.password
    const hashedPassword = await passwordEncrypt.hashPassword(password)
    try {
        const userDeatils = await userDao.findUser(email);
        if (userDeatils) throw error;
        try {
            const updateUser = await userDao.signUpUser({ firstname, email, hashedPassword })
            res.status(200).send({ status: true, message: 'User Registered', data: updateUser })
        } catch (error) {
            res.status(301).send({ status: false, message: 'Error Occurred. Please try again' })
        }
    } catch (error) {
        res.status(301).send({ status: false, message: 'User already Present. Please login' })
    }

}
export const loginUser = async (req, res) => {
    const formData = req.body.formData
    const email = formData.email
    const password = formData.password
    const userDetail = await userDao.findUser(email)
    if (userDetail) {
        const passwordMatch = await passwordEncrypt.verifyPassword(password, userDetail.password)
        if (passwordMatch) {
            const jsonToken = jwt.sign({ email: email, firstname: userDetail.first_name }, secretKey, { expiresIn: '2d', algorithm: "HS256" })
            res.status(200).send({ status: true, message: 'User loggedIn', data: { token: jsonToken } })
        } else {
            res.status(301).send({ status: false, message: 'Kindly check your password' })
        }
    } else {
        res.status(301).send({ status: false, message: 'New User register First' })
    }
}

export const checkTokenExpiration = async (req, res) => {
    const token = req.body.token
    try {
        const decodedData = jwt.verify(token, secretKey)
        res.status(200).send({ status: true, message: "They Token is not expired" , userData: decodedData })
    } catch (error) {
        res.status(301).send({ status: false, message: error })
    }

}