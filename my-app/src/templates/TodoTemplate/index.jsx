/**
 * TodoTemplate
 *
 * @returns {JSX.Element}
 * @constructor
 *
 */

import { useTodoContext } from "../../contexts/TodoContext";
import { TodoList } from "../../components/organisms/TodoList";
import { SearchTodo } from "../../components/organisms/SearchTodo";
import styles from "../../assets/commons/style.module.css";
import { Link } from "react-router-dom";

export const TodoTemplate = () => {
    const {
        showTodoList,
        searchText,
        handleSetSearchText,
        handleTodoDelete
    } = useTodoContext();

    return (
        <div>
            <div className={styles.link}>
                <Link to={`/`} className={styles.link_item}>Top</Link>
                <Link to={`/create`} className={styles.link_item}>Create</Link>
            </div>
            <h1>Todo Page</h1>
            {/* todoListの検索 */}
            <SearchTodo
                searchText={searchText}
                handleChangeSearchText={handleSetSearchText}
            />
            {/* todoListの表示 */}
            <TodoList
                showTodoList={showTodoList}
                handleTodoDelete={handleTodoDelete}
            />
        </div>
    )
};
