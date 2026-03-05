import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import './index.css'; // Import custom CSS
// import "aos/dist/aos.css"; // Import AOS CSS

import App from './App.jsx';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Financials from './pages/Financials';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    // errorElement: <Error />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/financials", element: <Financials />},
      {path: "/investor-corner/:slug", element: <Financials />},
      // {path: "*", element: <Error />},
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routers} />
  </StrictMode>,
)
