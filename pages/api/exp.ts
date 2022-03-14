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
    desc: "Casbin is an Open-Source authorization library, I'm Contributing to Casbin's Node.js project. Learning & Contributing.",
    img: "casbin.png"
  },
  {
    title: "HacktoberFest 2021",
    desc: "Participated in Hacktoberfest 2021 for the first time & Completed the 4PR challenge.",
    img: "hacktoberfest_2021.png"
  },
  {
    title: "MLH Local Hack Day Learn & Build 2022",
    desc: "Participated in both the events with guildmates, completed daily challenges by creating apps on Devpost & attend live sessions.",
    img: "mlh.png"
  },
  {
    title: "GirlScript Summer of Code 2022",
    desc: "Got selected as a contributor to do open-source contribution to projects based on various different technologies.",
    img: "gssoc.png"
  }
]

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    res.status(200).json(resData)
}