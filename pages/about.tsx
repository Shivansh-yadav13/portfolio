import type { NextPage } from "next";

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
  SiKubernetes,
  SiRedis,
  SiApachecassandra,
  SiHeroku,
  SiGit,
  SiJava,
  SiPostgresql,
} from "react-icons/si";

import Image from "next/image";

const HomePage: NextPage = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-52">
        <h1 className="text-6xl font-bold italic text-center">About Me</h1>
        <div className="mx-36 my-10">
          <p>
            I am an{" "}
            <span className="rounded-md bg-yellow-100 underline decoration-yellow-400 italic">
              #Engineering Student
            </span>{" "}
            and{" "}
            <span className="rounded-md bg-green-100 underline decoration-green-400 italic">
              #Open Source
            </span>{" "}
            enthusiast. I have MERN stack development skills, and I'm exploring
            the field of DevOps and learning about Cloud Native tools but I'm
            also interested in leanring about other technologies. I like
            learning new technologies and love contributing to Open-Source
            softwares.
          </p>
          <br />
          <p>
            I started my journey in Tech in mid 2021, initially I learned many
            new technologies, later I got to know about Open Source, and I
            started contributing to projects and particiapted in Hacktoberfest.
          </p>

          <br />

          <p>
            I also like creating content around technologies, I have published
            some blogs on my Hashnode -{" "}
            <a
              className="underline text-blue-500"
              href="https://shivanshyadav.hashnode.dev/"
            >
              shivanshyadav.hashnode.dev
            </a>{" "}
            and some YouTube tutorials on{" "}
            <a
              className="underline text-red-500"
              href="https://www.youtube.com/channel/UC6r3Wrw3rT7roWDnYdPrbyQ"
            >
              BaconHairCode
            </a>
            .
          </p>

          <br />

          <p>
            I have previously particiapted in MLH Hackathons, my hackthons
            projects can be found at{" "}
            <a
              className="underline text-purple-500"
              href="https://devpost.com/yadavshivansh?ref_content=user-portfolio&ref_feature=portfolio&ref_medium=global-nav"
            >
              My Devpost
            </a>
            .
          </p>

          <br />

          <p>
            I have also done freelancing once as a Web Developer and the project
            can be found here:{" "}
            <a
              className="underline text-green-500"
              href="https://legalsir.com/"
            >
              Freelance Website
            </a>
            .
          </p>
        </div>
      </div>
      <div className="mx-64">
        <h1 className="text-2xl font-bold italic m-10 text-center">Tech Stack</h1>
        <div className="w-full">
          <div className="py-2">
            {/* <h2 className='text-3xl underline decoration-pink-400 italic'>Languages</h2> */}
            <ul className="flex flex-col flex-wrap h-60 gap-10 text-center">
              <li>
                {/* <li className="text-4xl text-white p-2 select-none bg-cyan-500 rounded-md">
                  Go
                </li> */}
                <Image src="/gopher.svg" width={60} height={60}/>
                <h1>Go-lang</h1>
              </li>
              <li>
                <SiJavascript className="text-5xl text-yellow-500" />
                <h1>JavaScript</h1>
              </li>
              <li>
                <SiTypescript className="text-5xl text-sky-500" />
                <h1>TypeScript</h1>
              </li>
              <li>
                <SiPython className="text-5xl text-yellow-500" />
                <h1>Python</h1>
              </li>
              <li>
                <SiJava className="text-5xl text-blue-900" />
                <h1>Java</h1>
              </li>

              <li>
                <SiReact className="text-5xl text-blue-500" />
                <h1>React.js</h1>
              </li>
              <li>
                <SiTailwindcss className="text-5xl text-cyan-500" />
                <h1>TailwindCSS</h1>
              </li>
              <li>
                <SiGraphql className="text-5xl text-pink-500" />
                <h1>GraphQL</h1>
              </li>
              <li>
                <SiNodedotjs className="text-5xl text-green-500" />
                <h1>Node.js</h1>
              </li>
              <li>
                <SiExpress className="text-5xl text-gray-500" />
                <h1>Express.js</h1>
              </li>
              <li>
                <SiDocker className="text-5xl text-cyan-500" />
                <h1>Docker</h1>
              </li>
              <li>
                <SiKubernetes className="text-5xl text-blue-500" />
                <h1>Kubernetes</h1>
              </li>
              <li>
                <SiHeroku className="text-5xl text-purple-500" />
                <h1>Heroku</h1>
              </li>
              <li>
                <SiGit className="text-5xl text-orange-500" />
                <h1>Git</h1>
              </li>
              <li>
                <SiMongodb className="text-5xl text-green-500" />
                <h1>MongoDB</h1>
              </li>
              <li>
                <SiApachecassandra className="text-5xl text-blue-500" />
                <h1>Cassandra</h1>
              </li>
              <li>
                <SiRedis className="text-5xl text-red-500" />
                <h1>Redis</h1>
              </li>
              <li>
                <SiPostgresql className="text-5xl text-blue-400" />
                <h1>Postgresql</h1>
              </li>
              <li>
                <SiMysql className="text-5xl text-blue-500" />
                <h1>MySQL</h1>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
