import { useNotification } from '@/hooks/use-notification';
import { useTodoStore } from '@/zustand/useTodo';
import { CirclePlus } from 'lucide-react';
import React from 'react';

const TodoInput = () => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const addTodo = useTodoStore((state) => state.addTodo);
  const { notify } = useNotification();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputRef.current && inputRef.current.value === '') {
      notify('Please enter a todo item', 'error');
      return;
    }
    if (inputRef.current && inputRef.current.value.trim() !== '') {
      addTodo(inputRef.current.value);
      inputRef.current.value = '';
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-end justify-between flex-wrap sm:flex-nowrap gap-2 py-4">
        <div className="flex items-center flex-grow">
          <CirclePlus className=" mr-1 cursor-pointer" color="#a855f7" />
          <input
            ref={inputRef}
            placeholder="Enter todo"
            className="p-2 mr-2 w-full flex-grow focus:outline-none border-b border-b-gray-300 focus:ring-primary focus:border-primary"
          />
        </div>
        <button
          type="submit"
          className="bg-primary px-4 py-1 text-white rounded-lg shrink-0"
        >
          Add Item
        </button>
      </div>
    </form>
  );
};

export default TodoInput;
