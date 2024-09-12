import React, { act } from 'react'
import { Link, NavLink } from 'react-router-dom'
// import logo from '../assets/icons/mainlogo.jpg'
import { links1 } from '../data/dummydata'

function SideBar({activeMenu}) {
    
  return (
    <>
        <div className="ml-3 h-screen  overflow-auto  pb-10 bg-blue-100 rounded-lg mt-3">
            {activeMenu && (<>
            {/* main logo and name */}
                <div className='flex justify-center items-center'>
                    <Link to = '/' className='items-center gap-3  mt-4 flex text-xl font-inter font-extrabold'>
                        {/* <img src={logo} alt="Website logo" className='h-[100px] w-[100px]'/> */}
                        <div className='bg-white rounded-xl px-6 py-1'>
                        <span className='font-normal font-poppins text-2xl mt-1 text-blue-400'>ClassSphere</span></div>
                    </Link>
                </div>
                {/* Dashboard links */}
                <div className='mt-10 ml-4'>
                    {links1.map((link)=>(
                        <div key={link.title}>
                            <div className='mt-3' >
                                <h1 className='text-2xl font-semibold'>{link.title}</h1>
                            </div>
                            <div className='mt-6'>
                                {link.links.map((sublink)=>(
                                    <div key={sublink.name} className='flex flex-row py-3 gap-x-3 items-center text-black text-xl '>
                                        <NavLink to={`/${sublink.name}`}>
                                        <div className='flex items-center gap-x-2 pl-5'>
                                        {sublink.icon}
                                        <span>{sublink.name}</span>
                                        </div>
                                        </NavLink>
                                    </div>
                                ))}
                            </div>
                            
                        </div>
                    ))}
                </div>

                {/* oka set of links are done */}


            </>)}
        </div>
    </>
  )
}

export default SideBar