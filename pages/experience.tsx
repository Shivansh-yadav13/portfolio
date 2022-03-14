import type { NextPage } from 'next'
import { useState, useEffect } from 'react'
import Image from 'next/image'

type Exp = {
  title: string
  desc: string
  img: string
  w?: number
  h?: number
}

const Experience: NextPage = () => {
  const [exp, setExp] = useState([])
  const [com, setCom] = useState([])

  const getdata = async () => {
    await fetch('http://localhost:3000/api/exp').then(async (res) => {
      const parsedRes = await res.json()
      setExp(parsedRes)
    })

    await fetch('http://localhost:3000/api/com').then(async (res) => {
      const parsedRes = await res.json()
      setCom(parsedRes)
    })
  }

  useEffect(() => {
    getdata()
  }, [])


  return <div className='my-5'>
    <div className='w-fit m-auto flex flex-col gap-5'>
    <h1 className='text-center pb-4 font-bold text-4xl'>Work & Experience</h1>
      {exp ? exp.map((expEl: Exp, key) => (
        <div className='border-2 rounded-md p-5 flex gap-10' key={key}>
          <div>
            <Image src={`/${expEl.img}`} alt='' width={expEl.w ? expEl.w : 100} height={expEl.h ? expEl.h : 100} />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl'>{expEl.title}</h1>
            <p>{expEl.desc}</p>
          </div>
        </div>
      )) : <h1>Null</h1>}

    <h1 className='text-center pb-4 font-bold text-4xl'>Communities</h1>
    {com ? com.map((comEl: Exp, key) => (
        <div className='border-2 rounded-md p-5 flex gap-10' key={key}>
          <div>
            <Image src={`/${comEl.img}`} alt='' width={comEl.w ? comEl.w : 100} height={comEl.h ? comEl.h : 100} />
          </div>
          <div className='flex flex-col gap-5'>
            <h1 className='text-2xl'>{comEl.title}</h1>
            <p>{comEl.desc}</p>
          </div>
        </div>
      )) : <h1>Null</h1>}
    </div>
  </div>
}

export default Experience
