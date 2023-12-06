import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
       
    <nav className="navbar  flex top-0 w-screen h-[45px] z-10  bg-slate-300 sticky pt-[10px] shadow-md  ">
    
    <Link className="navbarLogo text-black text-lg overflow-hidden absolute left-5 md:absolute md:left-24 " to="/">HOME</Link>
       <div className='navbarLeft absolute left-[150px]   md:flex md:absolute md:left-[250px] '>
        <div className='companyDropdown  group absolute right-28'>
       <button className='navbarBtn companyButton  h-fit w-fit ml-20 p-1 rounded-lg bg-transparent bg-repeat border-none cursor-pointer overflow-hidden outline-none' ><Link className="navbarButton  " href="#">COMPANY </Link></button>
      
        <div className='companyUl hidden w-[250px] group-hover:block rounded-sm bg-slate-200  text-lg absolute p-[10px] top-[35px] left-5 shadow'>
        <Link className="companyItems text-black hover:bg-slate-300 flex p-1 pb-1 pt-1 pl-5 rounded-md" to="/about">About us</Link>
        <Link className="companyItems text-black hover:bg-slate-300 flex p-1 pb-1 pt-1 pl-5 rounded-md" to="/contact">Contact us</Link>
        </div>
        </div>
        
        <div className='helpDropdown group ml-[30px]'>
      <button className='navbarBtn helpButton mr-5 pb-[15px]  h-fit w-fit ml-[50px] p-1 rounded-lg bg-transparent bg-repeat border-none cursor-pointer overflow-hidden outline-none' ><Link className="navbarButton helpButton" href="#">HELP</Link> </button>
     
        <div className='helpUl w-[250px] bg-slate-200 text-lg absolute p-[10px] top-[35px] left-[20px] shadow-sm hidden group-hover:block'>
    <Link className="helpItems text-black flex rounded-md p-[5px] pb-[5px] pt-[5px] pl-5  hover:bg-slate-300" to="/contact"> Send a message</Link>
        </div>
       </div>
      </div>
    <div className="navbarRight absolute right-[10px]  md:flex md:absolute md:right-[180px]">
        <button className='navbarBtn loginBtn  h-fit ml-[20px] md:ml-[10px]   bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-slate-600 w-[70px] md:w-[90px] p-[2px] md:p-[5px] rounded-3xl'><Link className="navbarButton login text-white" to="#" >Log in</Link></button>
        <button className='navbarBtn signupBtn  h-fit ml-[20px] md:ml-[10px]    bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-slate-600 w-[70px] md:w-[90px] p-[2px] md:p-[5px] rounded-3xl' ><Link className="navbarButton signup text-white" to="#">Sign up</Link></button>
    
    </div>
    
      </nav>
     </>
    
  )
}
