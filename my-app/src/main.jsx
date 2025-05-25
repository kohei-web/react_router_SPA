import { StrictMode } from 'react'
import './index.css'
import './App.css'
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers";
import { TodoProvider } from "./contexts/TodoContext";

const route = ReactDOM.createRoot(document.getElementById('root'));
route.render(
  <StrictMode>
    <TodoProvider>
      <RouterProvider router={router} />
    </TodoProvider>
  </StrictMode>
);
