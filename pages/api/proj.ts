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
    title: "CryptoCurrency Web Scraper",
    desc: "A script written to scrape the latest prices of top cryptocurrencies from a website.",
    img: "golang.png",
    w: 200,
    h: 80,
    stack: ["Go", "Go Colly"],
    link: ["https://github.com/Shivansh-yadav13/Dev-Scripts/tree/main/Go/Crypto-Scraper"]
  },
  {
    title: "SQLite Web Admin Interface",
    desc: "Web based Admin Interface for SQLite Database.",
    img: "go_sqlite.png",
    w: 200,
    h: 80,
    stack: ["Go", "Go Colly"],
    link: ["https://github.com/Shivansh-yadav13/Dev-Scripts/tree/main/Go/Crypto-Scraper"]
  },
  {
    title: "Simple Weather App",
    desc: "A Simple Weather App that provides information about the weather for up to a week.",
    img: "weather.png",
    stack: ["React", "Styled Components", "OpenWeather API"],
    link: ["https://shivansh-yadav13.github.io/simple-weather-app/", "https://github.com/Shivansh-yadav13/simple-weather-app"]
  },
]

export default function handler(
  req: NextApiRequest, 
  res: NextApiResponse
  ) {
    res.status(200).json(resData)
}