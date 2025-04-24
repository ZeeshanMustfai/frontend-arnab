import { TodoFilterProps } from '@/types/todo';
import { useTodoStore } from '@/zustand/useTodo';
import React, { use } from 'react';
const FILTERS = ['all', 'active', 'done'] as const;

const TodoFilter = () => {
  const filter = useTodoStore((state) => state.filter);
  const setFilter = useTodoStore((state) => state.setFilter);
  return (
    <div className="flex justify-end items-center gap-2 ">
      {FILTERS.map((f: TodoFilterProps) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`px-3 py-1 rounded text-xs ${
            filter === f ? 'bg-primary text-white' : 'bg-gray-200'
          }`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default TodoFilter;
