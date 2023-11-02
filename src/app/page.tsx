import Header from "@/components/Header";
import Table from "@/components/Table";
import TodoItem from "@/components/TodoItem";
import TodoItemLoad from "@/components/TodoItemLoad";
import { prisma } from "@/db";
import Link from "next/link";
import { Suspense } from "react";

type todos = {
  id: string;
  title: string;
  complete: boolean;
}

function getTodosWithDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = prisma.todo.findMany();
      
      resolve(todos);
    }, 2000); // Simulated delay of 2 seconds (adjust as needed)
  });
}

async function toggleTodo(id:string, complete: boolean) {
  'use server'
  console.log(id, complete)
  await prisma.todo.update({where: {id}, data: {complete}})
}


export default async function Home() {
  const todos: todos[] = await getTodosWithDelay() as todos[]
  console.log(todos);
  
  return (
    <main className=''>
      <Header />
      {/* <Table/> */}
      <section className="todo-new container flex justify-end mx-auto my-5">
        <Link href={'/add'} className="">
        <div className="bg-slate-400 flex justify-center items-center rounded-md w-20 h-10 animate-pulse">
          Add
        </div>
        </Link>
      </section>
      <section className="todo-container container mx-auto my-5">
        <div className="todo-done py-5">
          <h6>Completed</h6>
          {
            todos.filter((item)=> item.complete!== false).map((item)=>(

              <TodoItem key={item.id} {...item} toggleTodo={toggleTodo}/>
            ))
          }

        </div>
        <div className="todo-all py-5">
          <h1>Todos</h1>
          {
            todos.filter((item)=> item.complete!== true).map((item)=>(

              <TodoItem key={item.id} {...item} toggleTodo={toggleTodo}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}
