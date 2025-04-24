interface TodoProps {
    id: number
    todo: string;
    complete: boolean;
}

interface CustomCheckboxProps {
    checked: boolean;
    onToggle: () => void;
}

interface TodoItemProps {
    item: TodoProps;
    onToggle: () => void;
    onDelete: () => void;
}
interface LayoutProviderProps {
    children: React.ReactNode;  
}
type TodoFilterProps = 'all' | 'active' | 'done';

export type {TodoProps, CustomCheckboxProps, TodoItemProps, LayoutProviderProps, TodoFilterProps}