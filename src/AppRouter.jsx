import TodoProvider from "./context/TodoProvider";
import Dashboard from "./my-components/Dashboard";
import Form from "./my-components/Form";
import List from "./my-components/List";
import Pricing from "./my-components/Pricing";
import { BrowserRouter, Routes, Route,Link } from "react-router-dom";


export const AppRouter = () => {
    return (
        // define route -> localhost:5173/ index.html(App.jsx)/pricing -> (Pricing.jsx)
        <BrowserRouter>
            <TodoProvider>
                <div className="flex gap-4 p-4">
                    <Link to="/add-todo" className="underline text-blue-500 hover:text-blue-700">Add Todo</Link>
                    <Link to="/see-todo" className="underline text-blue-500 hover:text-blue-700">List Todo</Link>
                </div>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path="/add-todo" element={<Form />} />
                    <Route path="/see-todo" element={<List />} />
                    <Route path="/pricing" element={<Pricing />} />
                </Routes>
            </TodoProvider>
        </BrowserRouter>

    );
};

export default AppRouter;