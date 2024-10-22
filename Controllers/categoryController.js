import * as categoryDao from '../DAO/category.dao.js'
export const getCategoryData = async (req, res) => {
    try {
        const income = await categoryDao.getIncomeCategories()
        const expense = await categoryDao.getExpenseCategories()
        const data = { "income": income, "expense": expense }
        res.status(200).send({ data })
    } catch (error) {
        res.status(401).send({ error: error })
        console.log("Error fetching Data:", error)
    }
}