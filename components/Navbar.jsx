import Link from 'next/link'
import Image from 'next/image';
import React, {useState} from 'react'
import Logo from '../public/assets/logo.png'
import { BsPerson, BsSearch } from 'react-icons/bs';
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { useSession, signIn, signOut } from 'next-auth/react';
import Lmenu from './Lmenu'
import Rmenu from './Rmenu'

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    }

    const { data: session } = useSession()
    //console.log(session);

  return (
    <div className='fixed h-14 w-full flex flex-nowrap items-center p-4 bg-[#0e0e10] mb-[2px] z-10'>
        <div className='flex'>
            <Link href='/'>
                <Image src={Logo} alt='/' width='36' height='36' className='cursor-pointer z-10 pt-2'/>
            </Link>
            <p className='p-4'>Browse</p>
            <div className='p-4'>
                <Lmenu />
            </div>
        </div>
        {/*Middle*/}
        <div className='hidden md:flex grow-[2] items-center justify-center'>
            <div className='bg-gray-500 text-white flex justify-between items-center max-w-[400px] w-full m-auto p-2 rounded-2xl'>
                <div>
                    <input type="text" className='bg-transparent border-none text-white focus:outline-none' placeholder='Search' />
                </div>
                <BsSearch />
            </div>
        </div>
        {/*Right Side*/}
        <div className='hidden md:flex grow items-center justify-end'>
            {!session ? (
            <div className='flex items-center '>
                <Link href='/account'>
                    <button className='px-4 py-[6px] rounded-lg font-bold bg-[#9147ff]'>
                        Account
                    </button>
                </Link>
                <BsPerson size={30} />
            </div>)
             :
             (
                <div className='flex items-center'>
                    <Link href='/account'>
                        <div>
                            <p className='pr-1.5'>
                                Welcome, {session.user.name.substring(0, session.user.name.indexOf(' '))}
                            </p>
                        </div>
                    </Link>
                    <Rmenu className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none' />
                </div>
             )}
        </div>

      {/* Hamburger Menu */}
      <div onClick={handleNav} className='block md:hidden z-10 cursor-pointer'>
        {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          nav
            ? 'md:hidden fixed top-0 left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
            : 'md:hidden fixed top-[-100%] left-0 w-full h-screen bg-[#0e0e10] flex justify-center items-center ease-in duration-300'
        }
      >
        <ul className='text-center'>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/'>Home</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#live'>Live Channels</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/#categories'>Top Categories</Link>
          </li>
          <li onClick={() => setNav(false)} className='p-4 text-3xl font-bold'>
            <Link href='/account'>account</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar