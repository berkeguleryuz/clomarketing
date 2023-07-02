"use client"
import Link from 'next/link'
import React, { useState, useEffect } from 'react';
import styles from "./navbar.module.css"
import DarkModeToggle from '../DarkModeToggle/DarkModeToggle';
import { signOut, useSession } from 'next-auth/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { mode } from '@context/ThemeContext';


const links = [
    {
        id: 1,
        title: "Home",
        url: "/",
    },
    {
        id: 2,
        title: "Portfolio",
        url: "/portfolio",
    },
    {
        id: 3,
        title: "Blog",
        url: "/blog",
    },
    {
        id: 4,
        title: "About",
        url: "/about",
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact",
    },    
    // {
    //     id: 6,
    //     title: "Dashboard",
    //     url: "/dashboard",
    // },

];

const Navbar = () => {
    const session = useSession();
    const [nav, setNav] = useState(false);
    const [color, setColor] = useState('transparent');
    const [textColor, setTextColor] = useState('white');
  
    const handleNav = () => {
      setNav(!nav);
    };

    useEffect(() => {
        const changeColor = () => {
          if (window.scrollY >= 90) {
            setColor('#transparent');
            setTextColor('#000000');
          } else {
            setColor('transparent');
            setTextColor('#ffffff');
          }
        };
        window.addEventListener('scroll', changeColor);
      }, []);


  return (
    <div className={styles.container}>
    <div
      style={{ backgroundColor: `${color}` }}
      className='fixed left-0 top-0 w-full z-10 ease-in duration-300'
    >
      <div className='max-w-[1240px] m-auto flex justify-between items-center display'>
      <Link href="/" className={styles.logo}>
        Clodron
      </Link>
            <DarkModeToggle />
            <div className={styles.links}>
            <ul  className='hidden sm:flex'>
          <li className='p-4'>
            <Link href='/'>Home</Link>
          </li>
          <li className='p-4'>
            <Link href='/portfolio'>Portfolio</Link>
          </li>
          <li className='p-4'>
            <Link href='/blog'>Blog</Link>
          </li>
          <li className='p-4'>
            <Link href='/about'>About</Link>
          </li>
          <li className='p-4'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>
            { session.status === "authenticated" && (
                <button 
                className={styles.logout}
                onClick={signOut}
                >
                Logout
            </button>
            )}
        </div>




<div onClick={handleNav} className='block sm:hidden z-10'>
          {nav ? (
            <AiOutlineClose size={20} style={{ color: "white" }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: "orange" }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? 'sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
              : 'sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300'
          }
        >
          <ul>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
              <Link href='/'>Home</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/portfolio'>Portfolio</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/blog'>Blog</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/about'>About</Link>
            </li>
            <li onClick={handleNav} className='p-4 text-4xl hover:text-gray-400'>
            <Link href='/contact'>Contact</Link>
            </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};


export default Navbar