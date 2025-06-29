/**
 * TodoList
 *
 * @package components
 *
 */

import styles from "./TodoList.module.css";
import {
    faTrashAlt,
    faFile,
    faPenToSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

/**
 *
 * @param {*} props
 * @return {*}
 *
 */

export const TodoList = (props) => {
    const { showTodoList, handleTodoDelete } = props;

    return (
        <ul>
            {showTodoList.map((todo) => {
                return (
                    <li className={styles.list} key={todo.id}>
                        <span>{todo.title}</span>
                        <div className={styles.area}>
                            {/* 詳細 */}
                            <div className={styles.areaParts}>
                                <FontAwesomeIcon
                                    icon={faFile}
                                    size="lg"
                                    onClick={() => handleTodoDelete(todo.id)}
                                />
                            </div>
                            {/* 編集 */}
                            <div className={styles.areaParts}>
                                <FontAwesomeIcon
                                    icon={faPenToSquare}
                                    size="lg"
                                    onClick={() => handleTodoDelete(todo.id)}
                                />
                            </div>
                            {/* 削除 */}
                            <div className={styles.areaParts}>
                                <FontAwesomeIcon
                                    icon={faTrashAlt}
                                    size="lg"
                                    onClick={() => handleTodoDelete(todo.id)}
                                />
                            </div>
                        </div>

                    </li>
                )
            })}
        </ul>
    )
};
