"use client"
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from 'react-icons/md';
import React, { useEffect, useRef, useState } from "react";
import OutsideClick from './utils/outsideClick';

import { signOut } from "next-auth/react";

const Header = () => {

  const [userMenuStatus, setUserMenuStatus] = useState(false);
  const buttonRef = useRef(null);
  const buttonOutsideClick = OutsideClick(buttonRef);

  const userMenuhandle = () => {
    setUserMenuStatus(!userMenuStatus)
  }

  useEffect(() => {
    if (buttonOutsideClick) {
      setUserMenuStatus(false)
    }
  }, [buttonOutsideClick])



  return (
    <header className="flex items-center h-20 bg-white border-2 border-gray-100">
      <div className="flex flex-shrink-0 items-center ml-auto">

        <button className="inline-flex items-center p-2 hover:bg-gray-100 focus:bg-gray-100 rounded-lg relative" onClick={userMenuhandle} ref={buttonRef}>
          <span className="sr-only">Хэрэглэгч</span>
          <div className="hidden md:flex md:flex-col md:items-end md:leading-tight">
            <span className="font-semibold">
              User
            </span>
            <span className="text-sm text-gray-600">Админ</span>
          </div>
          <span className="h-12 w-12 ml-2 sm:ml-3 mr-2 bg-gray-100 rounded-full overflow-hidden">
            <img
              src="https://randomuser.me/api/portraits/women/68.jpg"
              alt="user profile photo"
              className="h-full w-full object-cover"
            />
          </span>

          {userMenuStatus &&
            <div className='absolute right-0 bg-white px-2 py-1 text-black w-full -bottom-16 rounded-lg'>
              <a className='block hover:bg-gray-100 hover:text-black border-b-2 border-gray-100'>Профайл</a>
              <a className='block hover:bg-gray-100 hover:text-black border-b-2 border-gray-100'>Тохиргоо</a>
            </div>
          }
          {userMenuStatus ?
            <MdKeyboardArrowUp className="hidden sm:block h-6 w-6 text-gray-300" /> :
            <MdKeyboardArrowDown className="hidden sm:block h-6 w-6 text-gray-300" />
          }
        </button>

        <div className="border-l pl-3 ml-3 space-x-1">
          <button className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">
            <span className="sr-only">Notifications</span>
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full" />
            <span className="absolute top-0 right-0 h-2 w-2 mt-1 mr-2 bg-red-500 rounded-full animate-ping" />
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>

          <button onClick={() => signOut({
            redirect: true,
            callbackUrl: `${window.location.origin}/sign-in`,
          })} className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full">

            <span className="sr-only">Log out</span>
            <svg aria-hidden="true" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
          </button>

        </div>
      </div>
    </header>
  )
}

export default Header