import {prisma} from '.';

export const createUser = async (userData) => {
    await prisma.user.create({data:userData})
}