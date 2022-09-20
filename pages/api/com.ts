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
    title: "Casbin",
    desc: "Casbin is an Open-Source authorization library, I'm Contributing to Casbin's projects. Learning & Contributing.",
    img: "casbin.png"
  },
  {
    title: "Kubesimplify",
    desc: "Kubesimplify is on a mission to breakdown complicated concepts of cloud native into an easy to understand manner through blogs and video content. Since I like learning about Cloud Native tech, I try to contribute to Kubesimplify.",
    img: "kubesimplify_logo.png"
  },
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