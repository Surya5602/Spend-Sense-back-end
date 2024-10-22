import { decodeToken } from "../utils/decoderToken.js"
import * as accountDAO from "../DAO/accounts.dao.js"

export const addAccounts = async (req, res) => {
    const token = req.headers.authorization
    const formData = req.body.formData
    const userDetails = await decodeToken(token)
    try {
        const createAccount = await accountDAO.createAccount(userDetails.id, formData)
        res.status(200).send({ status: true, message: "Account Created Successfully", data: createAccount })
    } catch (error) {
        res.status(301).send({ status: false, message: "Problem while creating account" })
        console.log(error)
    }
}

export const getAccountsOfUser = async (req, res) => {
    const token = req.headers.authorization
    const userData = await decodeToken(token)
    try {
        const userAccounts = await accountDAO.userAccounts(userData.id)
        res.status(200).send(userAccounts)
    } catch (error) {
        console.log(error, ' ERROR IN ACC')
        res.status(500).send({ status: false, message: "Error while fetching data" })
    }
}

export const deleteAccount = async (req, res) => {  
    const accountId = req.body.accountId
    try {
        const response = accountDAO.deleteAccount(accountId)
        res.status(200).send({ status: true, message: "Account deleted Successfully", data: response })
    } catch (error) {
        console.log(error)
        res.status(500).send({ status: false, message: "Error while deleting Account" })
    }

}