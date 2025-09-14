import { PrismaClient } from '../../../generated/prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const todos = await prisma.Todo.findMany();
  return Response.json(todos);
}

export async function POST(req: Request) {
  const { title, description } = await req.json();
  const newTodo = await prisma.Todo.create({
    data: { title, description },
  });
  return Response.json(newTodo);
}

// export async function PUT(req: Request) {
//   const { id, name, email } = await req.json();
//   const newUser = await prisma.user.update({
//     where: {
//       id: id
//     },
//     data: {
//       name: name,
//       email: email
//     }
//   });
//   return Response.json(newUser); 
// }


// export async function DELETE (req: Request) {
//   const {id} = await req.json();
//   const deleteThisUser = await prisma.user.delete({
//     where: {
//       id: id
//     }
//   });
//   return Response.json(deleteThisUser);
// }


