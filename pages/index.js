/* This example requires Tailwind CSS v2.0+ */
import { MailIcon, PhoneIcon,LightningBolt, LightningBoltIcon, FireIcon } from '@heroicons/react/solid'
import axios from 'axios'
import { signOut, useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import {useEffect} from 'react'
import { useGlobalState } from '../global-state/global-context';
const url = 'http://3.109.133.121:8000/app/car/?format=json';




export default function HomePage({carsData}) {

    const bmwData = carsData.filter((car)=>car.engine.maker === 'BMW')
    const router = useRouter()
    const {data: session, status} = useSession()
  
    const {key} = useGlobalState()

  return (
    <>
      {/* TOP */}
      <header className='w-full flex justify-end shadow px-20 mb-6 p-2 items-center '>
        <p className='mr-5 text-red-600'>
          Demo login using <br /> username: "john" and password: "test"
        </p>{' '}
        {session ? (
          <button
            onClick={() => signOut()}
            className='bg-white place-content-center  hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          >
            Sign Out
          </button>
        ) : (
          <button
            onClick={() => router.push('api/auth/signin')}
            className='bg-white place-content-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          >
            Sign In
          </button>
        )}{' '}
      </header>
      {/* MIDDLE */}
      <article className='flex flex-col mb-10 justify-center items-center'>
        <h1 className='mb-2'>4th object key Key: {key}</h1>
        <button
          className='bg-white place-content-center mb-2 hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          onClick={() => router.push('/page2')}
        >
          Page 2
        </button>
        <button
          className='bg-white place-content-center hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow'
          onClick={() => router.push('/page3')}
        >
          Page 3
        </button>
      </article>

      {/* BOTTOM */}

      <h1 className='text-center text-2xl '>Car Data for BMW Maker </h1>
      <ul
        role='list'
        className='grid grid-cols-1 gap-3 w-6/12 mx-auto  sm:grid-cols-2 lg:grid-cols-2 '
      >
        {bmwData.map((car) => {
          const { car_name: name, engine, price, id } = car;
          return (
            <li
              key={car.id}
              className='col-span-1 bg-white rounded-lg shadow  divide-y divide-gray-200 mt-10 '
            >
              <div className='w-full flex items-center justify-between p-6 space-x-6'>
                <div className='flex-1 truncate'>
                  <div className='flex items-center space-x-3'>
                    <h3 className='text-gray-900 text-sm font-medium truncate'>
                      {name}
                    </h3>
                    <span className='flex-shrink-0 inline-block px-2 py-0.5 text-green-800 text-xs font-medium bg-green-100 rounded-full'>
                      {engine.maker}
                    </span>
                  </div>
                  <p className='mt-1 text-gray-500 text-sm truncate'>
                    {engine.maker}
                  </p>
                </div>
              </div>
              <div>
                <div className='-mt-px flex divide-x divide-gray-200'>
                  <div className='w-0 flex-1 flex'>
                    <a
                      href={`#}`}
                      className='relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500'
                    >
                      <LightningBoltIcon
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />

                      <span className='ml-3'>{engine.power}</span>
                    </a>
                  </div>
                  <div className='-ml-px w-0 flex-1 flex'>
                    <a
                      href={`#`}
                      className='relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500'
                    >
                      <FireIcon
                        className='w-5 h-5 text-gray-400'
                        aria-hidden='true'
                      />
                      <span className='ml-3'>{engine.displacement}</span>
                    </a>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export async function getStaticProps(){
  const {data} = await axios(url)
  
  return{
    props:{
      carsData:data
    }
  }
}