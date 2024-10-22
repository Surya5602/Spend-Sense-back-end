import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const createTransaction = async (userId, data) => {
    const accountId = parseInt(data.accountId)
    const name = data.detail
    const subCateogryId = parseInt(data.categoryId)
    const amount = parseInt(data.amount)
    const type = data.type
    const date = data.Date
    return await prisma.transaction.create({ data: { name: name, amountSpend: amount, type: type,createdAt: date , user: { connect: { id: userId } }, account: { connect: { id: accountId } }, subCategory: { connect: { id: subCateogryId } } } })
}

export const getUserTransaction = async (userId) => {
    return await prisma.transaction.findMany({ where: { userId: userId }, select: { id: true, name: true, amountSpend: true, type: true, createdAt: true, subCategory: true, account: true } });
}