import { NextApiResponse, NextApiRequest } from 'next'

type Data = {
  title: string
  desc: string
  img: string
  w?: Number
  h?: Number
}

const resData: Data[] = [
  {
    title: "Community Classroom",
    desc: "The first community I joined, explored many new things and got to know about Open-Source.",
    img: "cc.png"
  },
  {
    title: "EddieHub Community",
    desc: "I'm part of the EddieHub Community, started my open-source journey by contributing to EddieHub Community.",
    img: "eddiehub.png",
    w: 60,
    h: 100
  }
]

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    res.status(200).json(resData)
}