"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function seed() {
    const user = await prisma.user.create({
        data: {
            name: "Antonio Alves",
            email: "antonio.alves@google.com",
            Task: {
                create: {
                    title: "Estudar Javascript",
                    "description": "Estudar javascript e resolver uma lista de exercicios"
                }
            }
        }
    });
    const user2 = await prisma.user.create({
        data: {
            name: "Fausto Silva",
            email: "olokinhomeu@google.com"
        }
    });
}
seed();
