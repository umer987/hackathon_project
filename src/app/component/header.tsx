import React from 'react'
import { CiSearch } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

export const Upperheader = () => {
  return (
    <header className="text-gray-600 body-font ">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b">
  <CiSearch className='mx-40'/>
   
    <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center gap-300 text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0">
      
      <span className="ml-80 text-xl  " >Avion</span>
    </a>
    <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
    <CiShoppingCart className='mx-10'/ >
    <CgProfile />

    </div>
    
  </div>
  <div className='items-centre text-xs font-small w-100% mt-3'>
    <nav className="ml-30 md:mr-auto flex flex-wrap text-xs items-center  justify-center">
      <a className="mr-5 hover:text-gray-900">Plant Ports</a>
      <a className="mr-5 hover:text-gray-900">Ceramics</a>
      <a className="mr-5 hover:text-gray-900">Tables</a>
      <a className="mr-5 hover:text-gray-900">Chairs</a>
      <a className="mr-5 hover:text-gray-900">Crocary</a>
      <a className="mr-5 hover:text-gray-900">Tableware</a>
      <a className="mr-5 hover:text-gray-900">Cutlary</a>
    </nav>
    </div>
</header>

  )
}
