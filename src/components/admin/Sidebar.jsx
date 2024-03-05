 "use client"
import { useState } from "react";
import { MdOutlinePerson, MdPeopleOutline, MdOutlineToday, MdThumbUpOffAlt, MdWorkspacesOutline, MdOutlineChromeReaderMode, MdOutlineVerified,MdKeyboardArrowLeft} from 'react-icons/md';
import Link from 'next/link';

const Sidebar = ({children}) => {
  const [open, setOpen] = useState(true);

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-60 " : "w-20 "
        } bg-dark-purple h-screen p-3  pt-6 relative duration-300 bg-white`}
      >
        <MdKeyboardArrowLeft size={20} className={`absolute cursor-pointer -right-3 top-9 w-7 border-black
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}/>
       
        <div className="flex gap-x-4 items-center">
         
          <Link href='/admin'>
            <div className={`bg-purple-800 text-white p-3 rounded-lg inline-block cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}>
              <MdWorkspacesOutline size={20} />
            </div>
          </Link>
          <h1
            className={`text-black origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Company
          </h1>
        </div>
        
        <Link href='/admin/medee'>
            <div className='flex  hover:bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdOutlineChromeReaderMode size={20} />
              <p className={`${!open && "hidden"} origin-left duration-200 px-2`}>
                Test
              </p>
            </div>
          </Link>
       
          <Link href='/admin'>
            <div className='flex  hover:bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdOutlineChromeReaderMode size={20} />
              <p className={`${!open && "hidden"} origin-left duration-200 px-2`}>
                Мэдээ мэдээлэл
              </p>
            </div>
          </Link>

          <Link href='/admin'>
            <div className='flex  hover:bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdOutlineToday size={20} />
              <p className={`${!open && "hidden"} origin-left duration-200 px-2`}>
                Хуваарь
              </p>
            </div>
          </Link>

          <Link href='/'>
            <div className='flex  hover:bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdPeopleOutline size={20} />
              <p className={`${!open && "hidden"} origin-left duration-200 px-2`}>
                Баг
              </p>
            </div>
          </Link>

          <Link href='/'>
            <div className='flex  hover:bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdThumbUpOffAlt size={20} />
              <p className={`${!open && "hidden"} origin-left duration-200 px-2`}>
                Дүн
              </p>
            </div>
          </Link>

          <Link href='/'>
            <div className='flex  hover:bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdOutlinePerson size={20} />
              <p className={`${!open && "hidden"} origin-left duration-200 px-2`}>
                Хэрэглэгч
              </p>
            </div>
          </Link>

          <Link href='/'>
            <div className='flex  hover:bg-gray-100 cursor-pointer my-4 p-3 rounded-lg inline-block'>
              <MdOutlineVerified size={20} />
              <p className={`${!open && "hidden"} origin-left duration-200 px-2`}>
                Шүүгч
              </p>
            </div>
          </Link>
          
         
        
      </div>
      <div className="h-screen flex-1">
      {children}
      </div>
    </div>
  );
};
export default Sidebar;