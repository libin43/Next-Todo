import Header from "@/components/Header";
import Table from "@/components/Table";
import TodoItem from "@/components/TodoItem";
import TodoItemLoad from "@/components/TodoItemLoad";
import { prisma } from "@/db";
import Link from "next/link";
import { Suspense } from "react";

function getTodosWithDelay() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const todos = prisma.todo.findMany();
      resolve(todos);
    }, 2000); // Simulated delay of 2 seconds (adjust as needed)
  });
}

export default async function Home() {
  const todos = await getTodosWithDelay();
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

              <TodoItem key={item.id} title={item.title} status={item.complete}/>
            ))
          }

        </div>
        <div className="todo-all py-5">
          <h1>Todos</h1>
          {
            todos.filter((item)=> item.complete!== true).map((item)=>(

              <TodoItem key={item.id} title={item.title} status={item.complete}/>
            ))
          }
        </div>
      </section>
    </main>
  )
}
