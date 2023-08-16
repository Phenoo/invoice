import {  User } from "@prisma/client";
import React from "react";

export interface ChildrenProps {
    children: React.ReactNode
}

export type SafeUser = Omit<
    User,
    "createdAt" | "updateAt" | "emailVerified"> 
    & {
        createdAt: string;
        updateAt: string;
        emailVerified: string | null;
        image: string | null;
    }

   