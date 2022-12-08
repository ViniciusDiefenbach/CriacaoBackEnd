"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors")); //segurança de rotas, escolher ips que podem acessar determinadas rotas
const client_1 = require("@prisma/client");
const zod_1 = require("zod");
const app = (0, express_1.default)();
const prisma = new client_1.PrismaClient();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/start", (request, response) => {
    return response.status(200).send("Aplicação iniciada com sucesso!");
});
app.get("users", async (request, response) => {
    const users = await prisma.user.findMany();
    return response.status(200).json(users);
});
app.get("tasks", async (request, response) => {
    const tasks = await prisma.user.findMany();
    return response.status(200).json(tasks);
});
app.post("/users", async (request, response) => {
    const userBody = zod_1.z.object({ name: zod_1.z.string(), email: zod_1.z.string() });
    const { name, email } = userBody.parse(request.body);
    await prisma.user.create({
        data: {
            name,
            email
        }
    });
});
app.listen(3333, () => {
    console.log("server is running");
});
