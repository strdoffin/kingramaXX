"use server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import { redirect } from "next/navigation";
export const AddMessage = async (prevState: any, formData: FormData) => {
    const name = formData.get("name") as string;
    const classroom = formData.get("class") as string;
    const phonenumber = formData.get("phoneNumber") as string;
    console.log(name, classroom, phonenumber);

    const newPost = await prisma.message.create({
        data: {
            name,
            classroom,
            phonenumber,
        },
    });
    redirect("/success");
    return { success: "Create Message Success" };
};
