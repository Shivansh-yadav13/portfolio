import type { NextPage } from 'next'
import Link from 'next/link'

import { SiGithub } from 'react-icons/si'

const Navbar: NextPage = () => {
  return <nav className='flex justify-between p-12'>
    <ul className='flex justify-between w-1/4'>
      <Link href='/'>
        <a className='cursor-pointer border-2 rounded-md px-4 py-2 hover:border-green-400'>Home</a>
      </Link>
      <Link href='/about'>
        <a className='cursor-pointer border-2 rounded-md px-4 py-2 hover:border-blue-400'>About</a>
      </Link>
      <Link href='/projects'>
        <a className='cursor-pointer border-2 rounded-md px-4 py-2 hover:border-red-400'>Projects</a>
      </Link>
    </ul>
    <ul className='flex justify-end w-1/4'>
      <a className='cursor-pointer px-4 py-2 hover:border-red-400' href='https://www.github.com/shivansh-yadav13' target='_blank' rel='noreferrer'><SiGithub className='text-gray-500 text-2xl'/></a>
    </ul>
  </nav>
}

export default Navbar