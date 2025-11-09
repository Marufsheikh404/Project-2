import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import Router from './Routes/Router'
import AuthProvider from './Context/AuthProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import AOS from 'aos';
import 'aos/dist/aos.css'; 

AOS.init({
  duration:2000,
  delay:1,
  easing:'ease'
});

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <RouterProvider router={Router} />
      </AuthProvider>
    </QueryClientProvider>
  </StrictMode>
)

