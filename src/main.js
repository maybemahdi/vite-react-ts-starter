import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Toaster } from 'sonner';
import { RouterProvider } from 'react-router-dom';
import ReduxStoreProvider from './redux/ReduxStoreProvider';
import router from './routes/routes';
createRoot(document.getElementById('root')).render(_jsx(StrictMode, { children: _jsxs(ReduxStoreProvider, { children: [_jsx(RouterProvider, { router: router }), _jsx(Toaster, {})] }) }));
