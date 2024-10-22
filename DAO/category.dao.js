import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const getIncomeCategories = async () => {
    return prisma.category.findMany({
        where: { type: "income" },
        select: {
            id: true, name: true, picture: true,
            subCategories: {
                select: {id: true , name: true , picture: true}
            }
        }
    })
}
export const getExpenseCategories = async () => {
    return prisma.category.findMany({
        where: { type: "expense" },
        select: {
            id: true, name: true, picture: true,
            subCategories: {
                select: {id: true , name: true , picture: true}
            }
        }
    })
}