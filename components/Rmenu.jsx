import { Menu, Transition } from '@headlessui/react'
import React, {Fragment, useState} from 'react'
import { useSession, signIn, signOut } from 'next-auth/react';
import Image from 'next/image';


function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Rmenu = ({ props }) => {

    const { data: session } = useSession()

  return (
    <>
    <Menu as='div' className='relative text-left'>
            <div className='flex'>
              <Menu.Button>
                <Image src={session.user.image} alt='/' width='35' height='35' className='rounded-full cursor-pointer'/>
              </Menu.Button>
            </div>

            <Transition
              as={Fragment}
              enter='transition ease-out duration-100'
              enterFrom='transform opacity-0 scale-95'
              enterTo='transform opacity-100 scale-100'
              leave='transition ease-in duration-75'
              leaveFrom='transform opacity-100 scale-100'
              leaveTo='transform opacity-0 scale-95'
            >
              <Menu.Items className='origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-[#0e0e10] ring-1 ring-white ring-opacity-5 focus:outline-none'>
                <div className='py-1'>
                  <Menu.Item>
                    {({ active }) => (
                      <a
                        href='#'
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Account
                      </a>
                    )}
                  </Menu.Item>
                  <Menu.Item>
                    {({ active }) => (
                      <p
                        onClick={() => signOut()}
                        className={classNames(
                          active
                            ? 'bg-gray-500 text-gray-100'
                            : 'text-gray-200',
                          'block px-4 py-2 text-sm'
                        )}
                      >
                        Logout
                      </p>
                    )}
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
    </>
  )
}

export default Rmenu