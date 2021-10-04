import { Request, Response } from "express"
import { connection } from "../data/connection"

export async function getAllUsers (
    req: Request,
    res: Response
    ): Promise<void> {
    try {
        let name = req.query.name  
        console.log(name)

        if(name === ""){
            throw new Error("O valor de 'name' não foi informado")
        }

       const result = await connection("aula49_exercicio")
       .where('name', 'like', `%${name}%`)
       
 
    //    if(!users.length){
    //       res.statusCode = 404
    //       throw new Error("No users found")
    //    }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }