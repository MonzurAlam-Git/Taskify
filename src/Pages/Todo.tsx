import TodoContainer from "@/components/Todo/TodoContainer";
import Container from "@/components/ui/Container";

const Todo = () => {
  return (
    <Container>
      <h2 className="scroll-m-20  pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-center">
        Taskify: Focused Organized Achieved
      </h2>
      <TodoContainer></TodoContainer>
    </Container>
  );
};

export default Todo;
