import { login } from "@/utils/getUsers"

export async function POST(req:Request, res: Response){
    const body = await req.json()
    const response =  await login(body.email, body.password)
    return Response.json(response)
    
}