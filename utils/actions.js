"use server";
import { revalidatePath } from "next/cache";
import prisma from "./db";
import { redirect } from "next/navigation";
import { z } from "zod";

export const getAllTasks = async () => {
  // 'export const getAllTasks = async ()' is just the default way to
  // write code in  the actions file(has to be named actions)
  // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations
  return await prisma.task.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
};

export const createTask = async (formData) => {
  // React extends the HTML <form>
  // element to allow Server Actions to be invoked with the action prop.
  // When invoked in a form, the action automatically receives the FormData
  // object. You don't need to use React useState to manage fields, instead, you can extract the data using the native FormData methods
  // :export default function Page() {
  //   async function createInvoice(formData) {
  //     'use server'

  //     const rawFormData = {
  //       customerId: formData.get('customerId'),
  //       amount: formData.get('amount'),
  //       status: formData.get('status'),
  //     }
  const content = formData.get("content");
  // "content" comes from  name="content" in <input/>
  console.log(content);
  await prisma.task.create({ data: { content: content } });
  revalidatePath("/tasks");
  // In Next.js, the revalidate option is used within the getStaticProps
  // function to specify how often a page should be re-generated (revalidated)
  // when using Static Site Generation (SSG).
  // it refreshes the page so the newest input will be displayed instantly. otherwise
  //its a static page.
};

export const createTaskCustom = async (prevState, formData) => {
  //prevState is just the needed syntax you have to add on when using useFormState.

  // await new Promise((resolve) => setTimeout(resolve, 2000));
  // just to create a 2 second delay so we can see the pending message we set up
  const content = formData.get("content");
  const task = z.object({
    content: z.string().min(5),
  });
  try {
    task.parse({ content });
    await prisma.task.create({ data: { content: content } });
    revalidatePath("/tasks");
    return { message: "success" };
  } catch (error) {
    return { message: "error" };
  }
};

export const deleteTask = async (formData) => {
  // await new Promise((resolve) => setTimeout(resolve, 2000));
  const id = formData.get("id");

  await prisma.task.delete({ where: { id } });
  revalidatePath("/tasks");
};

export const getTask = async (id) => {
  const task = await prisma.task.findUnique({ where: { id } });
  return task;
};

export const editTask = async (formData) => {
  const id = formData.get("id");
  const content = formData.get("content");
  const completed = formData.get("completed");
  await prisma.task.update({
    where: { id },
    data: { content, completed: completed === "on" ? true : false },
  });
  revalidatePath(`/tasks/${id}`);
  redirect("/tasks");
};
