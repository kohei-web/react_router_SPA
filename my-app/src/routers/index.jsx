import { createBrowserRouter } from "react-router-dom";
import { TodoPage } from "../pages/todo";

// rooting_pathを考える
export const router = createBrowserRouter([
    { path: "/", element: <TodoPage /> }, /* todoList表示 */
    { path: "/create", element: <TodoList/> }, /* todoList新規作成 */
    // { path: "/detail/:id", element: <TodoList/> }, /* todoList詳細 */
    // { path: "/edit/:id", element: <TodoList/> }, /* todoList編集 */
]);
