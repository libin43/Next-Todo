'use client'
interface TodoItemProps {
    id: string;
    title: string;
    complete: boolean;
    toggleTodo: (id: string, complete: boolean) => void;
  }


export default function TodoItem({id, title, complete, toggleTodo}: TodoItemProps){
    
    return(
        <>
        <li className="bg-slate-500 list-none rounded-md">
            <div className="item-container h-24 flex justify-between items-center px-2 py-2">
                <div className="checkbox-container">
                    <input type="checkbox" name="" id="" className="w-10 h-10" onChange={e=>toggleTodo(id, e.target.checked)} defaultChecked={complete}/>
                </div>
                <div className="description-container">
                    <div className="description text-2xl">{title}</div>
                </div>
                <div className="action-container flex">
                    <div className="pin">p</div>
                    <div className="close">x</div>
                </div>
            </div>
        </li>
        </>
    )
}