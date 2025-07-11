import React from 'react'; 
import Navbar from './component/Navbar'
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import About from './pages/About';
import Contacts from './pages/Contacts';
import Order from './pages/Order';
import Home from './pages/Home';
import Menu from './pages/Menu';

const App = () => {
  const router =createBrowserRouter([
    {
      path:"/",
      element:<><Navbar/><Home/></>
    },
    {
      path:"/menu",
      element:<><Navbar/> <Menu/></>

    },
    {
      path:"/about",
      element:<><Navbar/> <About/></>
    },
    {
      path:"/contact",
      element:<><Navbar/><Contacts/></>
    },
    {
      path:"/order",
      element:<><Navbar/><Order/></>
    }

  ]

  )
  return (
    <>
    
    <RouterProvider router={router}/>
    
    </>
    
    
    
   
  );
};

export default App;