import { prisma } from "@/db";
import { redirect } from "next/navigation";

async function createTodo(data:FormData) {
    "use server"
    console.log('calledfn');
    console.log(data);
    const title = data.get('title')
    console.log(title);

    if(typeof title !== "string" || title === ''){
         throw new Error('Invalid Input')
    }
    
    await prisma.todo.create({data:{title, complete: false}})
    redirect('/')
}

export default function page(){
    console.log('Add page called');
    
    return(
        <div className="create-container container mx-auto py-5 text-center">
            <div className="text-6xl py-5">Add New Todo</div>
            <div className="input-container  py-5">
                <form action={createTodo} className="flex justify-center">

             <input className="border border-slate-700 w-[60%] h-14 text-black text-3xl" type="text" name="title" id="" />
             <button type="submit" className=" w-20 h-14 bg-slate-500 mx-5 animate-bounce">+</button>
                </form>
            
            </div>

        </div>
    )
}