import React from 'react'
import { useGlobalState } from '../global-state/global-context'
import { useRouter } from 'next/router';


function Page2() {
  const router = useRouter()
  const {key} = useGlobalState()
  return (
    <div className=' flex h-screen flex-col justify-center items-center'>
      <h1 className='text-xl'>Page 2</h1>
      <h1 className='text-3xl mb-2'> 4th object key variable: {key}</h1>
      <button onClick={()=>router.push('/')} className='bg-white place-content-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'>
        Back To home
      </button>
    </div>
  );
}

export default Page2