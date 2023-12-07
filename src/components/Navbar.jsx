import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props) {



  return (
    <>
    <nav className="navbar  flex top-0 w-screen h-[45px] z-10  sticky pt-[10px] shadow-md  "  style={props.myStyle}>
    
    <Link className="navbarLogo text-lg  absolute top-3 left-5 md:absolute md:left-24 font-bold" to="/">HOME</Link>
       <div className='navbarLeft absolute left-[100px]   md:flex md:absolute md:left-[200px] '>
        <div className='companyDropdown  group absolute  '>
       <button className='navbarBtn companyButton  h-fit w-fit  p-1 pb-3 rounded-lg  bg-repeat border-none cursor-pointer overflow-hidden outline-none font-semibold' ><Link className="navbarButton  " href="#">COMPANY </Link>
      
        <div className='companyUl hidden w-[200px] group-hover:block rounded-sm text-lg absolute p-[10px] top-[35px] left-[-20px] shadow-2xl'>
        <Link className="companyItems hover:bg-slate-500 flex p-1 pb-1 pt-1 pl-5 rounded-md " to="/about">About us</Link>
        <Link className="companyItems hover:bg-slate-500 flex p-1 pb-1 pt-1 pl-5 rounded-md" to="/contact">Contact us</Link>
        </div>
        </button>

        </div>
        
        <div className='helpDropdown group absolute left-40'>
      <button className='navbarBtn helpButton  pb-[15px]  h-fit w-fit p-1 rounded-lg bg-repeat border-none cursor-pointer overflow-hidden outline-none font-semibold' ><Link className="navbarButton helpButton" href="#">HELP</Link> 
     
        <div className='helpUl  w-[200px] text-lg  p-[10px] absolute top-[35px] left-[-30px] shadow-2xl  hidden group-hover:block'>
    <Link className="helpItems flex rounded-md p-[5px] pb-[5px] pt-[5px] pl-5  hover:bg-slate-500" to="/contact"> Send a message</Link>
        </div>
        </button>
       </div>
  </div>
{/* Dark and Lightmode */}

<label  class="switch absolute inline-block w-[60px] h-[34px] top-[60px] right-[40px] md:absolute md:inline-block md:w-[60px] md:h-[34px] md:top-[6px] md:right-72  ">
  <input type="checkbox" className='peer  opacity-0 w-0 h-0   '/>
<span onClick={(props.handleToggle)} className="slider  peer-checked:before:translate-x-[26px] peer-checked:before:bg-yellow-100 round  absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-slate-400  before:absolute before:content-[''] before:h-7 before:w-7 before:left-1 before:bottom-1 before:bg-sky-950 before:transition before:duration-400 rounded-2xl before:rounded-[50%]" style={{transition: '0.4s'}}> </span>
</label>
    <div className="navbarRight absolute right-[30px]  md:flex md:absolute md:right-[50px]">
        <button className='navbarBtn loginBtn  h-fit ml-[20px] md:ml-[10px]   bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-slate-500 w-[70px] md:w-[90px] p-[2px] md:p-[5px] rounded-3xl'><Link  className="navbarButton login text-white" to="#" >Log in</Link></button>
        <button className='navbarBtn signupBtn  h-fit ml-[20px] md:ml-[10px]    bg-repeat border-none cursor-pointer overflow-hidden outline-none bg-slate-500 w-[70px] md:w-[90px] p-[2px] md:p-[5px] rounded-3xl' ><Link className="navbarButton signup text-white" to="#">Sign up</Link></button>
    
    </div>
    
      </nav>
     </>
    
  )
}
