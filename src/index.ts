import express from "express"
import cors from "cors" //segurança de rotas, escolher ips que podem acessar determinadas rotas
import { PrismaClient } from "@prisma/client"
import { z } from "zod"
const app = express()

const prisma = new PrismaClient()

app.use(cors())
app.use(express.json())
app.get("/start", (request, response) => {
    return response.status(200).send("Aplicação iniciada com sucesso!")
})

app.get("users", async (request, response) => {
    const users = await prisma.user.findMany()
    return response.status(200).json(users)
})

app.get("tasks", async (request, response) => {
    const tasks = await prisma.user.findMany()
    return response.status(200).json(tasks)
})

app.post("/users", async (request, response) => {
    const userBody = z.object({ name: z.string(), email: z.string() })
    const { name, email } = userBody.parse(request.body)
    await prisma.user.create({
        data: {
            name,
            email
        }
    })
})

app.listen(3333, () => {
    console.log("server is running")
})