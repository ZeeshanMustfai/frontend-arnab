import React from 'react';
import CustomCheckbox from './custom-checkbox';
import { Trash2 } from 'lucide-react';
import { TodoItemProps } from '@/types/todo';

const TodoItem = ({ item, onDelete, onToggle }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between gap-4 py-4 border-b border-b-gray-200">
      <div className="flex items-center gap-2">
        <CustomCheckbox checked={item.complete} onToggle={onToggle} />
        <div className={`${item?.complete ? 'line-through' : ''}`}>
          {item?.todo}
        </div>
      </div>
      <div className="space-x-4 flex items-center">
        <button onClick={onDelete}>
          <Trash2 color="#a855f7" size={18} />
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
