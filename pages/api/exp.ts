import { NextApiResponse, NextApiRequest } from 'next'

type Link = {
  title: string
  link: string
}

type Data = {
  title: string
  desc: string
  links?: Link[]
  img: string
  w?: Number
  h?: Number
}

const resData: Data[] = [
  {
    title: "Google Summer of Code 2022",
    desc: "Google Summer of Code is a global, online program focused on bringing new contributors into open source software development.",
    links: [{title: "GSoC Final Work Report", link: "https://gist.github.com/Shivansh-yadav13/0a303de392b49f077c1e88e725a11449"}],
    img: "gsoc_logo.png"
  },
  {
    title: "HacktoberFest 2021",
    desc: "Participated in Hacktoberfest 2021 for the first time & Completed the 4PR challenge.",
    img: "hacktoberfest_2021.png"
  },
  {
    title: "MLH Local Hack Day Learn & Build 2022",
    desc: "Participated in both the events with guildmates, completed daily challenges by creating apps on Devpost & attend live sessions.",
    links: [{title: "Projects Build", link: "https://devpost.com/yadavshivansh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"}],
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