import { jsx as _jsx } from "react/jsx-runtime";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import App from "../App";
const router = createBrowserRouter([
    {
        path: "/",
        element: _jsx(MainLayout, {}),
        children: [
            {
                index: true,
                element: _jsx(App, {}),
            },
        ],
    },
]);
export default router;
