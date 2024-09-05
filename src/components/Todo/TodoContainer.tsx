import { useAppSelector } from "@/Redux/Hooks/hook";
import AddTodoModal from "./AddTodoModal";
import Filter from "./Filter";
import TodoCard from "./TodoCard";

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between">
        <AddTodoModal></AddTodoModal>
        <Filter></Filter>
      </div>
      {/* Container */}
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 w-full h-full rounded-xl  p-[5px] my-5">
        <div className="bg-white w-full h-full p-5 space-y-3 rounded-lg">
          {todos.map((item) => (
            <TodoCard
              {...item}
              // id={item.id}
              // title={item.title}
              // description={item.description}
            ></TodoCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
