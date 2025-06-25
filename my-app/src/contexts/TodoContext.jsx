import { createContext, useContext } from "react";
import { useTodo } from "../hooks/useTodo";

// 空の倉庫を作成
const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const {
        showTodoList,
        originalText,
        originalTextContent,
        searchText,
        handleSetOriginalText,
        handleSetOriginalTextContent,
        createTodo,
        handleSetSearchText,
        handleTodoDelete,
    } = useTodo();

    return (
        <TodoContext.Provider
            value={
                {
                    showTodoList,
                    originalText,
                    originalTextContent,
                    searchText,
                    handleSetOriginalText,
                    handleSetOriginalTextContent,
                    createTodo,
                    handleSetSearchText,
                    handleTodoDelete,
                }
            }
        >
            {children}
        </TodoContext.Provider>
    )
};

export const useTodoContext = () => useContext(TodoContext);
