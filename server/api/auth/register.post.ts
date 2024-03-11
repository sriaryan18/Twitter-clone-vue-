import { createUser } from "~/server/database/users";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const {username,name,email,password,repeatePassword} = body;
   
    if(!username || !name || !email || !password || !repeatePassword){
      return sendError(event,createError({
        statusCode:400,
        statusMessage:'Invalid Params'
      }))
    }
    createUser( {username,name,email,password})
    return {
      body:body
    }
})
