'use client'
interface TodoItemProps {
    key: string;
    title: string;
    status: boolean;
  }

  const handleClick=(e)=>{
    console.log(e.target.value)
  }
export default function TodoItem({key, title, status}: TodoItemProps){
    return(
        <>
        <li className="bg-slate-500 list-none rounded-md">
            <div className="item-container h-24 flex justify-between items-center px-2 py-2">
                <div className="checkbox-container">
                    <input type="checkbox" name="" id="" className="w-10 h-10" onClick={handleClick}/>
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