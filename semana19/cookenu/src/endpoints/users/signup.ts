import { Request, Response } from "express"
import connection from "../../commection"
import generateId from "../../services/idGenerator"
import { userTableName } from "../../types"
import { generateHash } from "../../services/hashManager"
import { generateToken } from "../../services/authenticator"

export default async function signup(
    req: Request,
    res: Response
): Promise <void>{
    try {
        const { name, email, password } = req.body
        const id: string = generateId()
        const cypherPassword: string = generateHash(password)
        const token: string = generateToken({id})

        await connection(userTableName).insert({id, name, email, password: cypherPassword})

        res.send({token})

    } catch (error) {
        console.log(error.message)
        res.status(500).send("Internal server error")
    }
}