import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";

type Proj = {
  title: string;
  desc: string;
  img: string;
  w?: number;
  h?: number;
  stack: string[];
  link: string[];
};

const Projects: NextPage = () => {
  const [proj, setProj] = useState([]);

  const getdata = async () => {
    await fetch("/api/proj").then(async (res) => {
      const parsedRes = await res.json();
      setProj(parsedRes);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="my-5">
      <div className="w-fit m-auto flex flex-col gap-5">
        <h1 className="text-center pb-4 font-bold text-4xl">Open Source Projects</h1>
        {proj ? (
          proj.map((projEl: Proj, key) => (
            <div className="border-2 rounded-md p-5 flex gap-10" key={key}>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl">{projEl.title}</h1>
                <p>{projEl.desc}</p>
                <ul className="flex justify-start gap-2">
                  {projEl.stack.map((s: string, key) => (
                    <li className="bg-gray-200 p-2 rounded-md" key={key}>{s}</li>
                  ))}
                </ul>
                {projEl.link.map((l: string, key) => (
                  <li className="text-blue-500 list-none" key={key}>
                    <a href={l}>{l}</a>
                  </li>
                ))}
              </div>
              <div className="m-auto">
                <Image
                  src={`/${projEl.img}`}
                  alt=""
                  width={projEl.w ? projEl.w : 100}
                  height={projEl.h ? projEl.h : 100}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
            <div className="animate-pulse flex space-x-4">
              <div className="rounded-full bg-slate-200 h-10 w-10"></div>
              <div className="flex-1 space-y-6 py-1">
                <div className="h-2 bg-slate-200 rounded"></div>
                <div className="space-y-3">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-2 bg-slate-200 rounded col-span-2"></div>
                    <div className="h-2 bg-slate-200 rounded col-span-1"></div>
                  </div>
                  <div className="h-2 bg-slate-200 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
      <h1 className="text-center m-10 p-10">More projects on <a className="underline" href="https://github.com/shivansh-yadav13">My Github</a>.</h1>
    </div>
  );
};

export default Projects;
