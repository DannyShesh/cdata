import { db } from "./db";

export async function getProducts(){
    const data = await db.query('SELECT * FROM products')
    return Object.values(JSON.parse(JSON.stringify(data)))
}

export async function getProductsById(id:string){
    const data = await db.query(`SELECT * FROM products WHERE id = ${id}`)
    return Object.values(JSON.parse(JSON.stringify(data)))
}