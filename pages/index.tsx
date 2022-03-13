import type { NextPage } from 'next'
import Image from 'next/image'

import { SiGithub, SiHashnode, SiLinkedin, SiYoutube, SiGmail } from 'react-icons/si'

const Home: NextPage = () => {
  return <div className='my-20'>
    <div className='flex justify-center gap-60 m-auto'>
      <div>
        <Image
          src='/profile.png'
          alt=''
          width={400}
          height={400}
          className="rounded-full"
        />
        <h1 className='text-center text-5xl box-decoration-slice p-2 select-none'>Shivansh Yadav</h1>
        <div className='flex justify-center gap-3'>
        <SiGmail className='text-2xl text-red-500'/>
        <p className='text-xl italic text-gray-500 text-center'>yadavshivansh@gmail.com</p>
        </div>
      </div>
      <div>
        <h2 className='text-left text-2xl p-3'>Connect with me!</h2>
        <ul className='text-2xl flex flex-col gap-3'>
          <a href='https://www.github.com/shivansh-yadav13' target='_blank' rel='noreferrer' className='flex justify-evenly cursor-pointer border-2 rounded-md px-4 py-2 hover:border-slate-900'>
            <SiGithub className='text-slate-900'/>
            <h1>Github</h1>
          </a>
          <a href='https://www.linkedin.com/in/shivansh-yadav-61b619211/' target='_blank' rel='noreferrer' className='flex justify-evenly cursor-pointer border-2 rounded-md px-4 py-2 hover:border-blue-400'>
            <SiLinkedin className='text-blue-400'/>
            <h1>Linkedin</h1>
          </a>
          <a href='https://shivanshyadav.hashnode.dev/' target='_blank' rel='noreferrer' className='flex justify-evenly cursor-pointer border-2 rounded-md px-4 py-2 hover:border-blue-500'>
            <SiHashnode className='text-blue-500'/>
            <h1>
              Hashnode
            </h1>
          </a>
          <a href='https://www.youtube.com/channel/UC6r3Wrw3rT7roWDnYdPrbyQ' target='_blank' rel='noreferrer' className='flex justify-evenly cursor-pointer border-2 rounded-md px-4 py-2 hover:border-red-400'>
            <SiYoutube className='text-red-400'/>
            <h1>
              Youtube
            </h1>
          </a>
        </ul>
      </div>
    </div>
  </div>
}

export default Home
