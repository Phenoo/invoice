import { NextResponse } from "next/server";

import bcrypt from "bcrypt"

import prisma from "@/lib/prismadb"

export async function POST(request: Request){
    const body = await request.json()

    const { email, name, passowrd} = body;
    const hashedPassword  = await bcrypt.hash(passowrd, 12)

    const user  = await prisma.user.create({
        data: {
            email, name, hashedPassword
        }
    });

    return NextResponse.json(user);
}