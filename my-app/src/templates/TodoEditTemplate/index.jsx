import { useTodoContext } from "../../contexts/TodoContext";
import { AddTodo } from "../../components/organisms/AddTodo";
import styles from "../../assets/commons/style.module.css";
import { Link } from "react-router-dom";

export const TodoEditTemplate = () => {
    const {
        originalText,
        originalTextContent,
        handleSetOriginalText,
        handleSetOriginalTextContent,
        createTodo
    } = useTodoContext();

    return (
        <div>
            {/* TodoListの追加 */}
            <div className={styles.link}>
                <Link to={`/`} className={styles.link_item}>
                    Top
                </Link>
            </div>
            <h1>Edit Todo</h1>
            <AddTodo
                inputValue={originalText}
                onChangeText={handleSetOriginalText}
                handleKeyUp={createTodo}
            />
        </div>
    )
};
