import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export const signUpUser = async(data)=>{
    return await prisma.user.create({data: {email: data.email , first_name: data.firstname , password: data.hashedPassword}})
}

export const findUser = async (inputEmail) => {
    return await prisma.user.findFirst({ where: { email: inputEmail } })
}
