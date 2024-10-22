import bcrypt from 'bcryptjs'

export const hashPassword = async (plainTextPassword) => {
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(plainTextPassword, saltRounds);
    return hashedPassword;
};

export const verifyPassword = async (plainTextPassword, hashedPassword) => {
    const isMatch = await bcrypt.compare(plainTextPassword, hashedPassword);
    return isMatch;
};