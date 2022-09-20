import type { NextPage } from "next";
import { useState, useEffect } from "react";
import Image from "next/image";

type Link = {
  title: string;
  link: string;
};

type Exp = {
  title: string;
  desc: string;
  links?: Link[];
  img: string;
  w?: number;
  h?: number;
};

const Experience: NextPage = () => {
  const [exp, setExp] = useState([]);
  const [com, setCom] = useState([]);

  const getdata = async () => {
    await fetch("/api/exp").then(async (res) => {
      const parsedRes = await res.json();
      setExp(parsedRes);
    });

    await fetch("/api/com").then(async (res) => {
      const parsedRes = await res.json();
      setCom(parsedRes);
    });
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="my-5">
      <div className="w-fit m-auto flex flex-col gap-5 mx-20">
        <h1 className="text-center pb-4 font-bold text-4xl">
          Work & Experience
        </h1>
        {exp ? (
          exp.map((expEl: Exp, key) => (
            <div className="border-2 rounded-md p-5 flex gap-10" key={key}>
              <div>
                <Image
                  src={`/${expEl.img}`}
                  alt=""
                  width={expEl.w ? expEl.w : 100}
                  height={expEl.h ? expEl.h : 100}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl">{expEl.title}</h1>
                <p>{expEl.desc}</p>
                {expEl.links ? (
                  <li>
                    {expEl.links?.map((l) => (
                      <a className="text-blue-500" href={l.link}>{l.title}</a>
                    ))}
                  </li>
                ) : (
                  ""
                )}
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

        <h1 className="text-center pb-4 font-bold text-4xl">Communities</h1>
        {com ? (
          com.map((comEl: Exp, key) => (
            <div className="border-2 rounded-md p-5 flex gap-10" key={key}>
              <div>
                <Image
                  src={`/${comEl.img}`}
                  alt=""
                  width={comEl.w ? comEl.w : 100}
                  height={comEl.h ? comEl.h : 100}
                />
              </div>
              <div className="flex flex-col gap-5">
                <h1 className="text-2xl">{comEl.title}</h1>
                <p>{comEl.desc}</p>
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
    </div>
  );
};

export default Experience;
