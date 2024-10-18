import { object, string } from "zod";

export const SigninSchema = object({
    email: string().email('invalid email'),
    password: string().min(8, 'password minimal 8 karakter').max(32, 'password minimal 32 karakter'),
})

export const SignupSchema = object({
    name: string().min(1, 'name minimal 1 karakter'),
    email: string().email('invalid email'),
    password: string().min(8, 'password minimal 8 karakter').max(32, 'password minimal 32 karakter'),
    ConfirmPassword: string().min(8, 'password minimal 8 karakter').max(32, 'password minimal 32 karakter'),
}).refine((data) => data.password === data.ConfirmPassword, {
message: 'password tidak cocok',
path: ['ConfirmPassword']
})