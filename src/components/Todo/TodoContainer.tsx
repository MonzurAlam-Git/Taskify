import AddTodoModal from "./AddTodoModal";
import Filter from "./Filter";
import TodoCard from "./TodoCard";
import { useGetToDosQuery } from "@/Redux/API/api";
import { useState } from "react";

const TodoContainer = () => {
  // const { todos } = useAppSelector((state) => state.todos);
  const [priority, setPriority] = useState("");
  const { data, error, isLoading } = useGetToDosQuery(priority);
  console.log(data);

  if (error) {
    console.log(error);
  }
  if (isLoading) {
    <p>Loading ... </p>;
  }

  // const tasks = data?.data;

  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <Filter priority={priority} setPriority={setPriority}></Filter>
      </div>
      {/* Container */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-full rounded-xl  p-[5px] my-5">
        <div className="bg-white w-full h-full p-5 space-y-3 rounded-lg">
          {data?.data.map((item) => (
            <TodoCard
              key={item._id}
              id={item._id}
              title={item.title}
              description={item.description}
              priority={item.priority}
              isCompleted={item.isCompleted}
            ></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
