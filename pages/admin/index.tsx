import React from 'react'
import Sidemenu from '../../components/admin/sidemenu'

const index = () => {
  return (
    <div className="w-full h-full bg-gray-100 grid grid-cols-3 md:grid-cols-5">
        <div className='col-span-1'>
        <Sidemenu/>
        </div>
       
        <div className='bg-white col-span-2 md:col-span-4 min-h-full px-8 '>
        <div className="container max-w-7xl mx-auto mt-8">
  <div className="mb-4">
    <h1 className="font-serif text-3xl font-bold underline decoration-gray-400"> Post Index</h1>
    <div className="flex justify-end">
      <button className="px-4 py-2 rounded-md bg-green-500 text-sky-100 hover:bg-green-600">Create Post</button>
    </div>
  </div>
  <div className="flex flex-col ">
    <div className="overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
      <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
        <table className="min-w-full">
          <thead>
            <tr>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                ID</th>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Title</th>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Description</th>
              <th
                className="px-6 py-3 text-xs font-medium leading-4 tracking-wider text-left text-gray-500 uppercase border-b border-gray-200 bg-gray-50">
                Created_At</th>
              <th className="px-6 py-3 text-sm text-left text-gray-500 border-b border-gray-200 bg-gray-50" colspan="3">
                Action</th>
            </tr>
          </thead>

          <tbody className="bg-white">
            <tr>
              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="flex items-center">
                  1
                </div>

              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <div className="text-sm leading-5 text-gray-900">Create CURD with tailwind v3
                </div>
              </td>

              <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit...</p>
              </td>

              <td className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                <span>12/12/22</span>
              </td>

              <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                <a href="#" className="text-indigo-600 hover:text-indigo-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </a>
                </td>
                <td className="text-sm font-medium leading-5 text-center whitespace-no-wrap border-b border-gray-200 ">
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </a>

              </td>

              
              <td className="text-sm font-medium leading-5 whitespace-no-wrap border-b border-gray-200 ">
                <a href="#"><svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-600 hover:text-red-800"
                    fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg></a>

              </td>
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

        </div>
    </div>
  )
}

export default index