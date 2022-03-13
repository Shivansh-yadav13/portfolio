import type { NextPage } from 'next'

import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiTailwindcss,
  SiGraphql,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiHeroku,
  SiGit,
  SiJava
} from 'react-icons/si'

const HomePage: NextPage = () => {
  return <div className='flex flex-col'>
    <div className='w-fit m-auto'>
      <ul className='flex gap-10 text-3xl'>
        <li className='rounded-md bg-orange-100 underline decoration-orange-400 italic'>#Student Full Stack Developer</li>
        <li className='rounded-md bg-green-100 underline decoration-green-400 italic'>#Open Source</li>
        <li className='rounded-md bg-sky-100 underline decoration-sky-400 italic'>#DevOps</li>
      </ul>

      <div className='py-2'>
        {/* <h2 className='text-3xl underline decoration-pink-400 italic'>Languages</h2> */}
        <ul className='flex justify-evenly p-5 text-center'>
          <li>
            <li className='text-4xl text-white p-2 select-none bg-cyan-500 rounded-md'>Go</li>
            <h1>Go-lang</h1>
          </li>
          <li>
            <SiJavascript className='text-5xl text-yellow-500' />
            <h1>JavaScript</h1>
          </li>
          <li>
            <SiTypescript className='text-5xl text-sky-500' />
            <h1>TypeScript</h1>
          </li>
          <li>
            <SiPython className='text-5xl text-yellow-500' />
            <h1>Python</h1>
          </li>
          <li>
            <SiJava className='text-5xl text-blue-900' />
            <h1>Java</h1>
          </li>
        </ul>
      </div>

      <div className='py-2'>
        {/* <h2 className='text-3xl underline decoration-red-400 italic'>Libraries & Frameworks</h2> */}
        <ul className='flex justify-evenly p-5 text-center'>
          <li>
            <SiReact className='text-5xl text-blue-500' />
            <h1>React.js</h1>
          </li>
          <li>
            <SiTailwindcss className='text-5xl text-cyan-500' />
            <h1>TailwindCSS</h1>
          </li>
          <li>
            <SiGraphql className='text-5xl text-pink-500' />
            <h1>GraphQL</h1>
          </li>
          <li>
            <SiNodedotjs className='text-5xl text-green-500' />
            <h1>Node.js</h1>
          </li>
          <li>
            <SiExpress className='text-5xl text-gray-500' />
            <h1>Express.js</h1>
          </li>
        </ul>
      </div>

      <div className='py-2'>
        {/* <h2 className='text-3xl underline decoration-blue-400 italic'>Other Tools</h2> */}
        <ul className='flex justify-evenly p-5 text-center'>
          <li>
            <SiDocker className='text-5xl text-cyan-500' />
            <h1>Docker</h1>
          </li>
          <li>
            <SiHeroku className='text-5xl text-purple-500' />
            <h1>Heroku</h1>
          </li>
          <li>
            <SiGit className='text-5xl text-orange-500' />
            <h1>Git</h1>
          </li>
        </ul>
      </div>

      <div className='py-2'>
        {/* <h2 className='text-3xl underline decoration-purple-400 italic'>Database</h2> */}
        <ul className='flex justify-evenly p-5 text-center'>
          <li>
            <SiMongodb className='text-5xl text-green-500' />
            <h1>MongoDB</h1>
          </li>
          <li>
            <SiMysql className='text-5xl text-blue-500' />
            <h1>MySQL</h1>
          </li>
        </ul>
      </div>

    </div>
  </div>
}

export default HomePage