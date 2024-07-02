import NextAuth, { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
            profile(profile) {
                return {
                    id: profile.sub,
                    name: `${profile.given_name} ${profile.family_name}`,
                    email: profile.email,
                    image: profile.picture,
                };
            },
        }),
    ],
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.role = user.role; // Assuming user.role is defined
            }
            return token;
        },
        async session({ session, token }) {
            if (token) {
                session.user = token;
            }
            return session;
        },
        async redirect({ baseUrl }) {
            return `${baseUrl}/`;
        },
    },
};

export default (req, res) => NextAuth(req, res, options);
