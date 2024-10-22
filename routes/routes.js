import express from 'express'
const router = express.Router();
import * as userController from '../Controllers/userController.js'
import * as categoryController from '../Controllers/categoryController.js'
import * as accountsController from '../Controllers/accountsController.js'
import { addTransactions, getTransactionOfUser } from '../Controllers/transactionsController.js';

//check the health of the server
router.get('/health', (req, res) => {
    res.status(200).send({
        data: "online"
    });
});

//User routee-------------
// user login and signup part
router.post('/signup', userController.singupUser)
router.post('/login', userController.loginUser)

//Check the token expires or not
router.post('/checkTokenExpiration', userController.checkTokenExpiration)

//Accounts routee-------------
router.post('/addAccounts', accountsController.addAccounts)
router.get('/getUserAccounts', accountsController.getAccountsOfUser)
router.post('/deleteAccount', accountsController.deleteAccount)


//Transactions routee---------
router.post('/addTransactions', addTransactions)
router.get('/getUserTransaction', getTransactionOfUser)


//Category routee-------------
// get categories data

router.get('/getCategoryData', categoryController.getCategoryData)






export default router;