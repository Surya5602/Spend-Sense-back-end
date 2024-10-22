import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const createAccount = async (userId, data) => {
    const name = data.accountName
    const balance = parseInt(data.balance)
    const notes = data.notes || null
    return await prisma.account.create({ data: { name: name, initialAmount: balance, notes: notes, user: { connect: { id: userId } } } })
}

export const userAccounts = async (userId) => {
    return await prisma.account.findMany({ where: { userId: userId }, select: { id: true, name: true, initialAmount: true, notes: true } });
}

export const updateAccount = async (accountId, type, amount) => {
    const updateState = type === 'expense' ? { initialAmount: { decrement: amount } } : { initialAmount: { increment: amount } }
    return await prisma.account.update({ where: { id: accountId }, data: updateState });

}

export const deleteAccount = async (accountId) => {
    await prisma.transaction.deleteMany({ where: { accountId: accountId }, });
    return prisma.account.delete({ where: { id: accountId } })
}