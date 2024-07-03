"use server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
const prisma = new PrismaClient();
export const AddMessage = async (prevState: any, formData: FormData) => {
    const name = formData.get("name") as string;
    var classroom = formData.get("class") as string;
    const phonenumber = formData.get("phoneNumber") as string;
    const gender = formData.get("gender") as string;
    const role = formData.get("role") as string;
    if(role == "teacher" || role == "etc"){
        classroom = "none";
    }
    console.log(name, classroom, phonenumber);

    const newPost = await prisma.message.create({
        data: {
            name,
            classroom,
            phonenumber,
            //@ts-ignore
            gender,
            role
        },
    });
    redirect('/success')
    return { success: "Create Message Success" };
};
