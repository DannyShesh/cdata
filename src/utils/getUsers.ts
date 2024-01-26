import { db } from "./db"
import { compareSync, genSaltSync, hash, hashSync } from "bcrypt"

type User = {
    id: number,
    name: string,
    email: string,
    password: string
}

export async function login(email:string, password:string){   
    const data:User[] = await db.query('SELECT * FROM users WHERE email = ?' , [email])
    if(data.length !== 0){
        const match = compareSync(password, data[0].password)
        return match
    }
    else{
        return "user not found"
    }

}
    export async function register(email:string, password:string, name:string) {
        const salt = genSaltSync(10)
        const hash = hashSync(password, salt)
        try {
            await db.query("INSERT INTO users(name, email, password) VALUES(?, ?, ?)", [name, email, hash])
            return {msg: "user created"}
        }catch (err){
            return err
        }
        
    }
