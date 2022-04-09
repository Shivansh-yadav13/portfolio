import type { NextPage } from 'next'
import Link from 'next/link'

import { SiGithub } from 'react-icons/si'

const Navbar: NextPage = () => {
  return <nav className='flex justify-between p-12'>
    <ul className='flex justify-between w-1/4'>
      <Link href='/'>
        <a className='transition ease-in-out border-green-400 cursor-pointer border-2 rounded-md px-4 py-2 hover:bg-green-400 hover:text-white hover:font-bold'>Home</a>
      </Link>
      <Link href='/about'>
        <a className='transition ease-in-out border-blue-400 cursor-pointer border-2 rounded-md px-4 py-2 hover:bg-blue-400 hover:text-white hover:font-bold'>About</a>
      </Link>
      <Link href='/experience'>
        <a className='transition ease-in-out border-yellow-400 cursor-pointer border-2 rounded-md px-4 py-2 hover:bg-yellow-400 hover:text-white hover:font-bold'>Experience</a>
      </Link>
      <Link href='/projects'>
        <a className='transition ease-in-out border-red-400 cursor-pointer border-2 rounded-md px-4 py-2 hover:bg-red-400 hover:text-white hover:font-bold'>Projects</a>
      </Link>
    </ul>
    <ul className='flex justify-end w-1/4'>
      <a className='text-gray-500 text-xl border-gray-200 border-2 p-2 rounded-md transition ease-in-out hover:text-black' href='https://docs.google.com/document/d/1VHeCvrpx4Fkolm1GfezMiJnvLkK3o134ff19GcjbN84/edit?usp=sharing' target='_blank' rel='noreferrer'>Resume</a>
    </ul>
  </nav>
}

export default Navbar