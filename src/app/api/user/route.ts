import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { hash } from "bcrypt";
import * as z from "zod";

const UserSchema = z
  .object({
    username: z.string().min(1, 'Username is required').max(100),
    email: z.string().min(1, 'Email is required').email('Invalid email'),
    password: z
      .string()
      .min(1, 'Password is required')
      .min(8, 'Password must have than 8 characters'),
  });


export async function POST(req: Request) {
    try
    {
        const body = await req.json();
        const {email, username, password} = UserSchema.parse(body);

        // check if email already exists
        const existingUserEmail = await db.user.findUnique(
            {
                where: {email: email}
            }
        );

        if(existingUserEmail)
        {
            return NextResponse.json({ user: null, message: "hereglegchin email burtgegdesen baina"}, {status: 409})
        }

         // check if username already exists
         const existingUserName = await db.user.findUnique(
            {
                where: {username: username}
            }
        );

        if(existingUserName)
        {
            return NextResponse.json({ user: null, message: "hereglegchin ner burtgegdesen baina"}, {status: 409});
        }

        const hashPassword = await hash(password, 10);
        const newUser = await db.user.create({
            data: {
                username,
                email,
                password: hashPassword
            }
        });
        const { password: newUserPassword, ...rest} = newUser;

        return NextResponse.json({user: rest, message:"hereglech burtgegdelee"}, {status: 201});
    }
    catch(error)
    {
        return NextResponse.json({message:"aldaa garlaa!"}, {status: 500});
    }
}