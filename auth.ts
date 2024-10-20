import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "@/lib/prisma";
import Credentials from "next-auth/providers/credentials";
import { SigninSchema } from "@/lib/zod";
import { compareSync } from "bcrypt-ts";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/signin",
  },
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        const validateFields = SigninSchema.safeParse(credentials);
        if (!validateFields.success) {
          return null;
        }
        const { email, password } = validateFields.data;
        const user = await prisma.user.findUnique({
          where: {
            email,
          },
        });
        if (!user || !user.password) {
          throw new Error("user tidak ditemukan");
        }

        const passwordMatch = compareSync(password, user.password);
        if (!passwordMatch) return null;
        return user;
      },
    }),
  ],

  // callback routing access login & signup
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const ProtectedRoutes = ["/", "/users", "/invoices"];

      // jika tidak login
      if (!isLoggedIn && ProtectedRoutes.includes(nextUrl.pathname)) {
        return Response.redirect(new URL("/signin", nextUrl));
      }

      // jika sudah login redirect ke baseUrl
      if (isLoggedIn && nextUrl.pathname.startsWith("/signin")) {
        return Response.redirect(new URL("/", nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    },

    session({ session, token }) {
      session.user.id = token.sub;
      session.user.role = token.role;
      return session;
    },
  },
});
