import { prisma } from "@/lib/prisma";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export const getUsers = async () => {
  const session = await auth();

  // Selain Owner jika ingin akses url user back to home
  if (!session || !session.user || session.user.role !== "owner")
    redirect("/home");

  try {
    const users = await prisma.user.findMany();
    return users;
  } catch (error) {
    console.log(error);
  }
};

export const getInvoicesByUser = async () => {
  const session = await auth();

  // Selain Owner jika ingin akses url user back to home
  if (!session || !session.user) redirect("/home");

  const role = session.user.role;
  if (role === "owner") {
    try {
      const invoices = await prisma.invoice.findMany({
        include: { user: { select: { name: true } } },
      });
      return invoices;
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const invoices = await prisma.invoice.findMany({
        where: { userId: session.user.id },
        include: { user: { select: { name: true } } },
      });
      return invoices;
    } catch (error) {
      console.log(error);
    }
  }
};
