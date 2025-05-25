

import { useTodoContext } from "../../contexts/TodoContext";
import { AddTodo } from "../../components/organisms/AddTodo";

export const TodoCreateTemplate = () => {
    const {
        originalText,
        handleSetOriginalText,
        createTodo
    } = useTodoContext();

    return (
        <div>
            {/* TodoListの追加 */}
            <h1>Create Todo</h1>
            <AddTodo
                inputValue={originalText}
                onChangeText={handleSetOriginalText}
                handleKeyUp={createTodo}
            />
        </div>
    )
};
