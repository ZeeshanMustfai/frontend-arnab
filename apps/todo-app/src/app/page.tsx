'use client';
import TodoFilter from '@/components/todo-filter';
import TodoInput from '@/components/todo-input';
import TodoItem from '@/components/todo-item';
import { TodoProps } from '@/types/todo';
import { useTodoStore } from '@/zustand/useTodo';

export default function Index() {
  const todos = useTodoStore((state) => state.todos);
  const deleteTodo = useTodoStore((state) => state.removeTodo);
  const toogleTodo = useTodoStore((state) => state.toggleTodo);
  const filter = useTodoStore((state) => state.filter);

  const filtered = todos.filter((todo) => {
    if (filter === 'active') return !todo.complete;
    if (filter === 'done') return todo.complete;
    return true;
  });
  return (
    <div>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome todo 👋
            </h1>
          </div>

          <div id="middle-content">
            <div id="learning-materials" className="rounded shadow p-4 sm:p-6">
              <div
                className={`flex ${
                  todos.length > 0 ? 'justify-between' : 'justify-start'
                }  items-center border-b border-b-gray-200 pb-2`}
              >
                <div className="p-0 text-lg md:text-2xl font-bold  text-center">
                  Todo List
                </div>
                <div className="mt-4">{todos.length > 0 && <TodoFilter />}</div>
              </div>

              {filtered?.map((todo: TodoProps, index) => {
                return (
                  <TodoItem
                    item={todo}
                    onDelete={() => deleteTodo(todo.id)}
                    onToggle={() => toogleTodo(todo.id)}
                    key={todo.id}
                  />
                );
              })}
              <div className="flex justify-center items-center mt-4">
                {todos.length === 0 && (
                  <div className="text-center text-gray-500">
                    No todos available
                  </div>
                )}
              </div>
              <TodoInput />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
