import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

export async function POST(req, res) {
    const { email, password, name } = await req.json()
    const prisma = new PrismaClient();

    try {
        const userResponse = await prisma.user.create({
            data: {
                email,
                password,
                name
            }
        })
        return NextResponse.json(userResponse, { status: 201 })
    } catch (error) {
        return NextResponse.json({ error: 'Failed to register user' },{status:500});

    }




}