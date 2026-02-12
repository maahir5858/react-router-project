import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import Layout from './Layout.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Contact from './components/pages/Contact.jsx';
import Navigate from './components/pages/Navigate.jsx';
import Loader, { catFactsLoader } from './components/pages/Loader.jsx';
import RouteParameter from './components/pages/RouteParameter.jsx';
import NotFound from './components/pages/NotFound.jsx';
import Error from './components/pages/Error.jsx';
import './index.css'
import App from './App.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: 'about',
//         element: <About />
//       },
//       {
//         path: 'contact',
//         element: <Contact />
//       }
//     ]
//   }
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>  
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='navigate' element={<Navigate />} />
      <Route path='loader' element={<Loader />} loader={catFactsLoader} errorElement={<Error />} />
      <Route path='route-parameter/:userId' element={<RouteParameter />} />
      <Route path='*' element={<NotFound />} />
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </StrictMode>,
)
