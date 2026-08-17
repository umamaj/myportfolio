import Link from 'next/link'
import Image from 'next/image'

import { projectsList } from './data/projects-meta'

export default function Home() {
  return (
    <div className="font-sans"> 
    {/* // bg-gradient-to-br from-purple-400 via-indigo-200 to-pink-300" */}
      
      {/* navigation bar */}
      {/* <nav className="w-full py-6 px-8 bg-white shadow-md fixed top-0 left-0 right-0 rounded-b-lg">
        <div className='flex justify-between items-center'>
          <div className="text-2xl">
            <Link href="#home">MA</Link>
          </div>
          <ul>
            <li className="inline-block px-4"><Link href="#projects">Projects</Link></li>
            <li className="inline-block px-4"><Link href="#resume">Resume</Link></li>
            <li className="inline-block px-4"><Link href="#contact">Contact</Link></li>
          </ul>
        </div>
      </nav> */}

      {/* Hero Section */}
      <section id="home" className="relative h-screen bg-[url(/my-portfolio/background.JPG)] bg-center bg-cover bg-no-repeat flex flex-col items-center justify-center text-center">
        <div className="absolute inset-0 bg-black/60"></div> 
        <h1 className="relative text-6xl text-white font-medium">
          Umama Junejo
        </h1>
        <p className='relative text-lg font-medium text-gray-200 mt-4'>
          Industrial & Systems Engineering @ UW 
        </p>

        {/* icons */}
        <div className='flex gap-10 mt-8'>
          <a
            href="https://www.linkedin.com/in/umama-junejo-699703339/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-4xl size-10 items-center justify-center flex bg-gray-100 shadow-lg hover:bg-gray-400 transition duration-300"
          >
            <Image 
              src="/my-portfolio/linkedin.svg" 
              alt="LinkedIn Logo" 
              width={24}
              height={24}
            />
          </a>

          <a
            href="https://github.com/ammarj0987"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-4xl size-10 items-center justify-center flex bg-gray-100 shadow-lg hover:bg-gray-400 transition duration-300"
          >
            <Image 
              src="/my-portfolio/github.svg" 
              alt="Github Logo" 
              width={24}
              height={24}
            />
          </a>

          <a
            href="mailto:umamajunejo22@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="relative rounded-4xl size-10 items-center justify-center flex bg-gray-100 shadow-lg hover:bg-gray-400 transition duration-300"
          >
            <Image 
              src="/my-portfolio/envelope.svg" 
              alt="Mail Logo" 
              width={24}
              height={24}
            />
          </a>
        </div>

        <div className="flex gap-16 mt-24">
          <Link
            href="#projects"
            className="relative outline-2 px-6 py-3 rounded-lg bg-neutral-800 text-gray-100 font-semibold shadow-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
          >
            Projects
          </Link>
          
          <a
            href="/my-portfolio/muhammad_ammar_intern_resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="relative outline-2 px-6 py-3 rounded-lg bg-gray-800 text-gray-100 font-semibold shadow-lg hover:bg-gray-200 hover:text-gray-800 transition duration-300"
          >
            Resume
          </a>
        </div>
      </section>

      {/* About Section
      <section id="about" className="h-screen max-w-4xl mx-auto py-20 px-4">
        <h2 className="text-3xl font-bold mb-6">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-700">
          I am a passionate software engineer specializing in building scalable
          web applications and machine learning solutions. I enjoy solving
          complex problems and turning ideas into reality through clean code
          and thoughtful design.
        </p>
      </section> */}

      {/* <div className='border-t-8 border-gray-200'></div> */}

      {/* Projects Section */}
      <section id="projects" className="h-screen bg-gradient-to-b from-neutral-400 via-neutral-300 to-neutral-200 py-20 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-5xl font-bold mb-16">Projects</h2>

          <ul className="space-y-12">
            {projectsList.map((project) => (
              <li key={project.slug} className="flex items-center">
                <Link 
                  href={`/projects/${project.slug}`}
                  className='text-gray-600 font-medium relative group text-2xl hover:bg-gradient-to-r hover:from-blue-500 to-purple-600 hover:bg-clip-text hover:text-transparent'
                >
                  {project.title}
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-linear-to-r from-blue-500 to-purple-600 transition-all group-hover:w-full"></span>
                </Link>
                <p className="text-lg italic ml-4 text-gray-600">- {project.description}</p>
              </li>
            ))}
          </ul>
          {/* <div className="grid md:grid-cols-2 gap-8">

            <button className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"

            >
              <h3 className="text-xl font-semibold mb-2">Wheel Classification</h3>
              <p className="text-gray-600">
                A machine learning web app that helps car enthusiasts identify OEM
                and aftermarket wheels/rims.
              </p>
            </button>

            <div className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">
                Automotive Social Platform
              </h3>
              <p className="text-gray-600">
                A social media platform for car lovers to showcase collections and
                browse others.
              </p>
            </div>

          </div> */}
        </div>
      </section>

      {/* Contact Section */}
      {/* <section
        id="contact"
        className="h-screen bg-blue-600 text-white py-40 px-4 text-center"
      >
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="mb-6">
          Feel free to reach out for opportunities or collaborations.
        </p>
        <div className="flex justify-center gap-4">
          <a href="mailto:ammar@example.com" className="hover:underline">
            Email
          </a>
          <a href="https://github.com/ammar" className="hover:underline">
            GitHub
          </a>
          <a href="https://linkedin.com/in/ammar" className="hover:underline">
            LinkedIn
          </a>
        </div>
      </section> */}

      <footer className="bg-gray-600 text-center py-6 text-sm text-gray-300">
        © {new Date().getFullYear()} Muhammad Ammar. All rights reserved.
      </footer>
    </div>
  );
}
