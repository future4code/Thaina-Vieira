import { Request,  Response }from "express"
import { idGenerator } from "../services/idGenerator"
import { User } from "../entities/User"
import { BaseDatabase } from "../data/BaseDataBase"

export const createUser = (req: Request, res: Response) =>{

    try {
        const {name, email, age} = req.body
        const id = new idGenerator().execute()

        const newUser = new User (
            id,
            name,
            email,
            age
        )
createUser = (user: User) => BaseDatabase.connection()

    } catch (err) {
        
    }
}