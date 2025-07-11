import React from 'react'
import { Link } from 'react-router-dom'

const Navbar= () => {
  return (
    
      
    <div className='shadow-md bg-blue-200
     dark:bg-gray-900
     dark:text-white duration-200'>
      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center'>
          <div>
            <a href="#" className='flex justify-center
            gap-2 text-2xl sm=text-3xl font-bold'>
             <img className='w-[35px] rounded-full' src="https://png.pngtree.com/png-vector/20220623/ourmid/pngtree-food-logo-png-image_5296974.png"alt="food" />
            
              
               
            FoodieZone
            </a>
          </div>
          <div>
            
          <ul className='hidden sm:flex
                gap-4'>
          <li>
            <Link to="/" className='inline-block
             py-4 px-6
             hover:text-primary'>Home</Link>
          </li>
          <li>
            <Link to="/menu" className='inline-block
             py-4 px-6
             hover:text-primary'
            >Menu</Link>

          </li>
          <li>
            <Link to="/about"  className='inline-block
             py-4 px-6
             hover:text-primary'>About</Link>
          </li>
          <li>
            <Link to="/contact" className='inline-block
             py-4 px-6
             hover:text-primary'>Contacts</Link>
          </li>
          <li>
            <Link to="/order" className=' inline-block
               py-4 px-6 hover:text-primary'>Order</Link>
          </li>
          </ul>
            

          </div>

        </div>

      </div>

    </div> 
      
    
  )
}

export default Navbar