import React from 'react';
import { CiEraser, CiEdit } from 'react-icons/ci';
import Header from '@/components/admin/Header';
import Sidebar from '@/components/admin/Sidebar';
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from 'next/navigation'
import { db } from "@/lib/db";

const medee = async () => {
  const session = await getServerSession(authOptions);

  const testdb = await db.test.findMany({
    select: {
      title: true,
    },
  })

  if (session?.user) {
    return (
      <div className='bg-gray-100 min-h-screen'>
        <Sidebar>
          <Header />
          <div className='p-4'>
        
      
          <a href="/admin/medee/nemeh" > <button  className="relative p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-600 focus:bg-gray-100 focus:text-gray-600 rounded-full border-solid border-2 border-black mb-3">
              Нэмэх
           </button></a>
   
            <div className='w-full m-auto p-4 border rounded-lg bg-white overflow-y-auto'>
              <div className='my-3 p-2 grid grid-cols-2 items-center justify-between cursor-pointer'>
                <span>Гарчиг</span>
                <span >Method</span>
              </div>
              <ul>
                {testdb.map((item, index) => (
                  <li key={index} className='bg-gray-50 hover:bg-gray-100 rounded-lg my-3 p-2 grid grid-cols-2 items-center justify-between cursor-pointer'>
                    <div className='flex items-center'>
                      <p className='pl-4'>{item.title}</p>
                    </div>

                    <div className='flex  items-center'>

                      
                      <a href="/admin/medee/zasah" className='px-2'><CiEdit/></a>
                      <a href="/admin/medee/ustgah" className='px-2'><CiEraser/></a>
                    </div>
                  </li>
                ))}

              </ul>
            </div>
          </div>
        </Sidebar>
      </div>
    );
  }

  return redirect('/sign-in');
};

export default medee;
