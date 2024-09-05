import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { addToDo } from "@/Redux/features/todoSlice";
import { useAppDispatch } from "@/Redux/Hooks/hook";
import { FormEvent, useState } from "react";

const AddTodoModal = () => {
  const [title, setTitle] = useState("");
  const [priority, setpriority] = useState("high");
  const [description, setdescription] = useState("");

  const dispatch = useAppDispatch();

  const generateId = () => {
    const id = Math.random().toString(36).substring(2);
    return id;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ title, description, priority });
    const id = generateId();
    const data = { id, title, description, priority };

    dispatch(addToDo(data));
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
          variant="outline"
        >
          Add Task
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
          <DialogDescription>
            Fill in the details for your new task. Click save to add it to your
            to-do list.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskName" className="text-right">
                Task Name
              </Label>
              <Input
                onBlur={(e) => setTitle(e.target.value)}
                id="taskName"
                placeholder="e.g., Buy groceries"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="taskName" className="text-right">
                Description
              </Label>
              <Input
                onBlur={(e) => setdescription(e.target.value)}
                id="description"
                placeholder="Description"
                className="col-span-3"
              />
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">
              Priority
            </Label>
            <select
              onBlur={(e) => setpriority(e.target.value)}
              id="priority"
              className="col-span-3 p-2 border rounded-md"
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>

          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="submit" variant="default">
                Submit
              </Button>
            </DialogClose>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddTodoModal;
{
  /* <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="dueDate" className="text-right">
                Due Date
              </Label>
              <Input
                // onBlur={(e) => setTitle(e.target.value)}
                id="dueDate"
                type="date"
                className="col-span-3"
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="priority" className="text-right">
                Priority
              </Label>
              <select
                onSelect={(e: React.ChangeEvent<HTMLSelectElement>) =>
                  setpriority(e.target.value)
                }
                id="priority"
                className="col-span-3 p-2 border rounded-md"
              >
                <option value="low">Low</option>
                <option value="medium">Medium</option>
                <option value="high">High</option>
              </select>
            </div> */
}
