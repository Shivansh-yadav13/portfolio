import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Blogs from "./components/Blogs";
import Hero from "./components/Hero";

// const projects = [
//   {
//     title: "Scrollify",
//     description: "Embeddable to showcase UGC reels with link to product on E-commerce website",
//     techstack: ["Next.js", "TailWindCSS", "MongoDB", "MUX"],
//     link: "https://scrollify.app"
//   },
//   {
//     title: "Scrollify",
//     description: "Embeddable to showcase UGC reels with link to product on E-commerce website",
//     techstack: ["Next.js", "TailWindCSS", "MongoDB", "MUX"],
//     link: "https://scrollify.app"
//   },
//   {
//     title: "Scrollify",
//     description: "Embeddable to showcase UGC reels with link to product on E-commerce website",
//     techstack: ["Next.js", "TailWindCSS", "MongoDB", "MUX"],
//     link: "https://scrollify.app"
//   }
// ]

function App() {
  return (
    <main className="min-h-screen bg-black">
      <div className="w-full">
        <div className="w-fit flex flex-col m-auto p-4 h-screen snap-y overflow-y-auto">
          <div id="hero" className="h-screen snap-start">
          <Hero />
          </div>
          <div className="h-screen snap-start">
            <Projects />
          </div>
          <div className="h-screen snap-start">
            <WorkExperience />
          </div>
          <div className="h-screen">
            <Blogs />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
