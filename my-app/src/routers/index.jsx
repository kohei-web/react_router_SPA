import { createBrowserRouter } from "react-router-dom";
import { TodoPage } from "../pages/todo";
import { TodoCreatePage } from "../pages/createTodo";
import { TodoDetailPage } from "../pages/detailTodo";
import { TodoEditPage } from "../pages/editTodo";

// rooting_pathを考える
export const router = createBrowserRouter([
    { path: "/", element: <TodoPage /> }, /* todoList表示 */
    { path: "/create", element: <TodoCreatePage/> }, /* todoList新規作成 */
    { path: "/detail/:id", element: <TodoDetailPage/> }, /* todoList詳細 */
    { path: "/edit/:id", element: <TodoEditPage/> }, /* todoList編集 */
]);
