// store/todoStore.ts
import { TodoFilterProps, TodoProps } from '@/types/todo';
import { create } from 'zustand';


type TodoState = {
  todos: TodoProps[];
  addTodo: (text: string) => void;
  toggleTodo: (id: number) => void;
  removeTodo: (id: number) => void;
  filteredTodos?: () => TodoProps[];
  filter: TodoFilterProps
  setFilter: (f:TodoFilterProps) => void
};

export const useTodoStore = create<TodoState>((set, get) => ({
  todos: [],
  addTodo: (text) =>
    set((state) => ({
      todos: [...state.todos, { id: Date.now(), todo:text, complete: false }],
    })),
  toggleTodo: (id) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      ),
    })),
  removeTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),
    filter: 'all',
    setFilter: (f) => set({ filter: f }),
}));
