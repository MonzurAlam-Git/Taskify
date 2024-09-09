import { removeToDo, toggleState } from "@/Redux/features/todoSlice";
import { Button } from "../ui/button";

import { useDeleteToDoMutation, useUpdateToDoMutation } from "@/Redux/API/api";
import UpdateTodo from "./UpdateTodo";

type ComponentProps = {
  id: string;
  title: string;
  description: string;
  priority: string;
  isCompleted?: boolean;
};

const TodoCard = ({
  id,
  title,
  description,
  isCompleted,
  priority,
}: ComponentProps) => {
  const [updateTodo, { data }] = useUpdateToDoMutation();

  const [deleteTodo, { deleteData }] = useDeleteToDoMutation();

  const updateData = {
    id,
    title,
    description,
    priority,
    isCompleted: !isCompleted,
  };

  const options = {
    id: id,
    updateData,
  };

  return (
    <div className="bg-white flex justify-between items-center p-3 border rounded ">
      <input
        onChange={() => updateTodo(options)}
        className="size-3 mr-3"
        type="checkbox"
        name="checklist"
        id=""
        defaultChecked={isCompleted}
      />
      <p className="flex-1 font-bold">{title}</p>
      <div className="flex flex-1 items-center gap-2">
        <div
          className={`size-3 rounded-full 
            ${priority === "high" ? "bg-red-500" : null}
            ${priority === "medium" ? "bg-yellow-500" : null}
            ${priority === "low" ? "bg-green-500" : null}
            `}
        ></div>
        <p>{priority}</p>
      </div>
      <div className="flex-1">
        {isCompleted ? (
          <p className="text-green-500">Done</p>
        ) : (
          <p className="text-red-500">Pending</p>
        )}
      </div>
      <p className="flex-[2]">{description}</p>
      <div className="flex space-x-3">
        <Button onClick={() => deleteTodo(id)} className="bg-red-500">
          <svg
            className="size-5"
            data-slot="icon"
            fill="none"
            strokeWidth="1.5"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
            ></path>
          </svg>
        </Button>
        {/* Update Button */}
        <UpdateTodo id={id}></UpdateTodo>
      </div>
    </div>
  );
};

export default TodoCard;
