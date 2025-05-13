// src/components/Blogs.tsx
import { motion } from "motion/react";

const blogs = [
  {
    title: "Introduction to CircleCI",
    excerpt: "CircleCI, a continuous integration, and delivery platform that help teams to rapidly release...",
    date: "Apr 29, 2022",
    readTime: "5 min read",
    link: "https://shivanshyadav.hashnode.dev/introduction-to-circleci",
    image: "/blogs/circleci.png"
  },
  {
    title: "Heroku Deployment - React + Node",
    excerpt: "Recently I participated in a Hackathon and I had to deploy my app on Heroku. It was...",
    date: "Nov 8, 2021",
    readTime: "5 min read",
    link: "https://shivanshyadav.hashnode.dev/heroku-deployment-react-node",
    image: "/blogs/heroku.png"
  },
  {
    title: "Introduction to Apache Hadoop & MapReduce",
    excerpt: "There are mainly two problems with the big data. Storage for a huge amount of data...",
    date: "Jun 30, 2024",
    readTime: "5 min read",
    link: "https://dev.to/shvshydv/introduction-to-apache-hadoop-30ka",
    image: "/blogs/hadoop.png"
  },
  {
    title: "MapReduce Vs Tez",
    excerpt: "Apache Hadoop uses MapReduce as it's programming model for distributed processing of Big Data...",
    date: "Jul 7, 2024",
    readTime: "5 min read",
    link: "https://dev.to/shvshydv/mapreduce-vs-tez-171g",
    image: "/blogs/mapreduce.png"
  },
  // ...more blogs
];

export default function Blogs() {
  return (
    <section id="blogs" className="py-20 bg-[#0a0a0a]">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-[#18181b] rounded-2xl shadow-lg border border-gray-800 overflow-hidden flex flex-col"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#18181b] to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-400 text-xs">{blog.date}</span>
                  <span className="text-gray-400 text-xs">{blog.readTime}</span>
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{blog.title}</h3>
                <p className="text-gray-300 mb-4 flex-1">{blog.excerpt}</p>
                <a
                  href={blog.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 mt-auto"
                >
                  Read More →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}