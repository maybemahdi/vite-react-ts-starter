import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { Toaster } from 'sonner';
import { RouterProvider } from 'react-router-dom';
import ReduxStoreProvider from './redux/ReduxStoreProvider';
import router from './routes/routes';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ReduxStoreProvider>
      <RouterProvider router={router} />
      <Toaster />
    </ReduxStoreProvider>
  </StrictMode>
);
