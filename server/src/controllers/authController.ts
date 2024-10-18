import { Request, Response } from "express";
import  Jwt  from "jsonwebtoken";
import UserModel from "../model/userModel";
import bcrypt from 'bcrypt'

// interface User {
//     userName? : string;
//     email : string;
//     password : string
// }

const createUser = async (req: Request, res: Response) => {
    const { email, password, name } = req.body

    if(!(email && password && name)) 
        res.status(400).json({message: 'all fields are required', result: null})

    try{
        const user = await UserModel.findOne({email})

        if(user) 
           return res.status(401).json({message: 'user already exist', resutl: null})


        const token = Jwt.sign({email}, process.env.JWT_SECRET || 'jfie' , {expiresIn: '7d'})
        return res.status(200).json({message: 'login successfull', result: {user, token}})
    }
    
    catch(err){
        res.status(500).json({message: 'error', result: null, err})
        console.log(err);
    }
}

const logIn = async (req: Request, res: Response) => {
    const { email, password, userName } = req.body

    if(!(email && password && userName)) 
        res.status(400).json({message: 'all fields are required', result: null})

    try{
        const user = await UserModel.findOne({email})

        if(!user) 
           return res.status(401).json({message: 'user not found', resutl: null})
        else{
            let match = bcrypt.compare(password, user.password) 
            if(!match) throw new Error('invalid credentials')
        }

        const token = Jwt.sign({email}, process.env.JWT_SECRET || 'jfie' , {expiresIn: '7d'})
        return res.status(200).json({message: 'login successfull', result: {user, token}})
    }
    catch(err){
        console.log(err);
        return res.status(500).json({message: 'error', result: null, err})
    }
}

export {
    logIn,
    createUser
}

