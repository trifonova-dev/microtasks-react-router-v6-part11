import { createRoot } from 'react-dom/client'
import './index.css'
import {App} from './App.tsx'
import {BrowserRouter, RouterProvider} from "react-router-dom";
import {router} from "./routes/router.tsx";

createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router} />

  // <BrowserRouter>
  //   <App />
  // </BrowserRouter>
)
