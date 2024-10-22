import { decodeToken } from "../utils/decoderToken.js"
import * as TransactionDao from "../DAO/transactions.dao.js"
import { updateAccount } from '../DAO/accounts.dao.js'

export const addTransactions = async (req, res) => {
    const token = req.headers.authorization
    const formData = req.body.formData
    const userDetails = await decodeToken(token);
    try {
        const createTransaction = await TransactionDao.createTransaction(userDetails.id, formData)
        const accountUpdation = await updateAccount(parseInt(formData.accountId), formData.type, parseInt(formData.amount))
        res.status(200).send({ status: true, message: "Transaction created Successfully", data: { transaction: createTransaction, account: accountUpdation } })
    } catch (error) {
        res.status(301).send({ status: false, message: "Problem while creating transaction" })
        console.log(error)
    }
}

export const getTransactionOfUser = async (req, res) => {
    const token = req.headers.authorization
    const userData = await decodeToken(token)
    try {
        const userTransaction = await TransactionDao.getUserTransaction(userData.id)
        res.status(200).send(userTransaction)
    } catch (error) {
        console.log(error, ' ERROR IN ')
        res.status(500).send({ status: false, message: "Error while fetching data" })
    }
}