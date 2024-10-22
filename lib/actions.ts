"use server";
import { SignupSchema, SigninSchema } from "@/lib/zod";
import { hashSync } from "bcrypt-ts";
import { prisma } from "@/lib/prisma";
import { redirect } from "next/navigation";
import { signIn } from "@/auth";
import { AuthError } from "next-auth";

export const signUpCredentials = async (prevState: unknown, formData: FormData) => {
  const validateFields = SignupSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }
  const {name, email, password} = validateFields.data
  const hashedPassword = hashSync(password, 10);

  try {
    await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: hashedPassword
        }
    })
  } catch (error) {
    return {message: 'failed signup user'}
  }
  redirect('/signin')
};

export const signInCredentials = async (prevState: unknown, formData: FormData) => {
  const validateFields = SigninSchema.safeParse(
    Object.fromEntries(formData.entries())
  );
  if (!validateFields.success) {
    return {
      error: validateFields.error.flatten().fieldErrors,
    };
  }
  const {email, password} = validateFields.data;

  try {
    // Redirect Success Login Route
    await signIn("credentials", {email, password, redirectTo: '/home'})
  } catch (error) {
    if(error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { message: 'invalid credentials.'}
          default:
          return { message: 'ada kesalahan.'}
      }
    }
    throw error;
  }
}
