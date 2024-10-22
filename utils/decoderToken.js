import jwt  from "jsonwebtoken";
import { secretKey } from "../config.js";
import * as userDao from '../DAO/user.dao.js'
export const decodeToken = async(bearerToken)=>{
    if(bearerToken && bearerToken.includes('Bearer') && typeof bearerToken !== "undefined"){
        const token = bearerToken.split(' ')[1];
        try{
            const decodedData = jwt.verify(token , secretKey);
            const userData = await userDao.findUser(decodedData.email)
            return userData
        }catch(error){
            console.log(error);
        }
    }
}