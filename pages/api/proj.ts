import { NextApiResponse, NextApiRequest } from 'next'

type Data = {
  title: string
  desc: string
  img: string
  w?: Number
  h?: Number
  stack: string[]
  link: string[]
}

const resData: Data[] = [
  {
    title: "Simple Weather App",
    desc: "A Simple Weather App that provides information about the weather for up to a week.",
    img: "weather.png",
    stack: ["React", "Styled Components", "OpenWeather API"],
    link: ["https://shivansh-yadav13.github.io/simple-weather-app/", "https://github.com/Shivansh-yadav13/simple-weather-app"]
  },
  {
    title: "Python-Face-Detection",
    desc: "A script written in Python opencv to detect faces from video or images.",
    img: "opencv.png",
    stack: ["Python", "OpenCV"],
    link: ["https://github.com/Shivansh-yadav13/python-Face-Detection"]
  },
  {
    title: "CryptoCurrency Web Scraper",
    desc: "A script written to scrape the latest prices of top cryptocurrencies from a website.",
    img: "golang.png",
    w: 200,
    h: 80,
    stack: ["Go", "Go Colly"],
    link: ["https://github.com/Shivansh-yadav13/Dev-Scripts/tree/main/Go/Crypto-Scraper"]
  },
]

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    res.status(200).json(resData)
}