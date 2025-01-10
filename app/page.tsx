'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoPin } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";

function NavigationBar() {
  return (
    <header className="w-full bg-black text-white py-4 px-8">
      <div className="grid grid-cols-3 items-center">
        <div className="flex flex-col items-start gap-2">
          <div className="flex items-center gap-4">
            <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
            <h1 className="text-lg font-bold leading-tight sm:text-base md:text-lg">
              Raegan Van <br />
              Raamsdonk
            </h1>
          </div>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden sm:flex justify-center gap-8">
          <a
            href="#about"
            className="group relative hover:text-gray-400 transition-colors whitespace-nowrap"
          >
            About
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 group-hover:animate-pulse transition-all"></span>
          </a>
          <a
            href="#portfolio"
            className="group relative hover:text-gray-400 transition-colors whitespace-nowrap"
          >
            Portfolio
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 group-hover:animate-pulse transition-all"></span>
          </a>
          <a
            href="#projects"
            className="group relative hover:text-gray-400 transition-colors whitespace-nowrap"
          >
            Projects
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 group-hover:animate-pulse transition-all"></span>
          </a>
          <a
            href="#contact"
            className="group relative hover:text-gray-400 transition-colors whitespace-nowrap"
          >
            Contact Me
            <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 group-hover:animate-pulse transition-all"></span>
          </a>
        </nav>

        {/* Right Section: Button */}
        <div className="flex justify-end">
          <button className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors text-sm sm:text-base">
            Hire Me
          </button>
        </div>
      </div>

      {/* Bottom Border Bar */}
      <div className="relative h-1 mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-white to-black h-full"></div>
      </div>
    </header>
  );
}


function HeroSection() {
  return (
    <section id="hero" className="py-20 px-16 bg-black-100">
    <div className="border border-white/70 p-8 rounded-lg shadow-md grid grid-cols-1 sm:grid-cols-2 items-center gap-16 transition-transform duration-300 hover:shadow-lg hover:scale-105 mx-auto max-w-[800px] animate-glow">
      {/* Left Content: Name and Description */}
      <div className="flex flex-col">
        <h2 className="text-2xl font-bold text-white text-left">Raegan Van Raamsdonk</h2>

        <p className="text-md font-bold text-gray-400 text-left">Computer Science Student</p>
        <p className="text-sm text-gray-400 text-left flex items-center">
          <IoPin /> British Columbia, Canada
        </p>
        <p className="text-sm text-gray-300 text-left py-4">
          I am a computer science student who enjoys creating games,
          full-stack web applications, and solving data structure and algorithms problems.
        </p>

        {/* Social Buttons */}
        <div className="flex gap-4">
          <a
            href="https://github.com/raeganvr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <FaGithub size={20} /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/raeganvr/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
          >
            <FaLinkedin size={20} /> LinkedIn
          </a>
          <a
            href="mailto:john@example.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
          >
            <MdEmail size={20} /> Email
          </a>
        </div>
      </div>

      {/* Right Content: Portrait */}
      <div className="flex justify-center">
        <Image
          src="/images/portrait.jpg"
          alt="Portrait of Raegan Van Raamsdonk"
          width={324}
          height={246}
          className="rounded-full object-cover"
          priority // Optimized image loading
        />
      </div>
    </div>
  </section>
  );
}

function AboutMe(){
  return (
    <section id="about" className="py-20 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-white-800">About Me</h2>

      <div className="border border-white/70 p-8 shadow-md grid grid-cols-1 sm:grid-cols-2 items-center gap-8 transition-transform duration-300 hover:shadow-lg hover:scale-105 mx-auto max-w-[1100px] animate-glow">
        {/*left pannel text*/}
        <div className="space-y-8">
          <p className="text-2xl text-gray-100 text-left font-bold">
            Who I Am
          </p>
          <p className="text-md text-gray-300 text-left">
            Hi, I&apos;m Raegan Van Raamsdonk, a student with a love
            for math, computer science, and problem-solving. 
            I enjoy exploring the logic and creativity behind 
            coding, whether it&apos;s building web applications, 
            creating games, or tackling algorithm challenges. 
            Outside of academics, I love weight training, ultimate 
            frisbe, soccer, and chess. My goal is to combine my 
            passions and skills to create solutions and 
            continue learning every step of the way.
          </p>
        </div>
        
        {/* Right: Overlapping Photos */}
        <div className="relative w-[400px] h-[400px]">
          {/* First Photo */}
          <div
            className="absolute top-0 left-0 z-0"
            style={{ width: '300px', height: '300px' }}
          >
            <Image
              src="/images/dominican.jpeg"
              alt="Backflip in Dominican Republic"
              width={150}
              height={150}
              className="rounded-lg shadow-lg"
            />
          </div>

          {/* Second Photo */}
          <div
            className="absolute top-40 left-32 z-10"
            style={{ width: '300px', height: '300px' }}
          >
            <Image
              src="/images/sooke.jpeg"
              alt="French Beach in Sooke, BC"
              width={150}
              height={150}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>


        
      </div>
      
    </section>
  )
}

// Projects Section Component
function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-black-100 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-white-800">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Project 1</h3>
          <p className="text-gray-600">Description of my project. Technologies used and key features.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-md">
          <h3 className="text-xl font-semibold">Project 2</h3>
          <p className="text-gray-600">Another project description. Showcase what you&apos;ve built!</p>
        </div>
      </div>
    </section>
  );
}

// Contact Section Component
function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-black-100 flex flex-col items-center gap-8">
      <h2 className="text-3xl font-bold text-white">Contact Me</h2>
      <p className="text-lg text-gray-700 text-center max-w-2xl">
        Interested in working together? Reach out to me through LinkedIn or check out my GitHub for more projects.
      </p>
    </section>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="w-full bg-blue-600 text-white py-4 px-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
      <div>
        <p>&copy; 2025 Raegan Van Raamsdonk. All rights reserved.</p>
      </div>
      
    </footer>
  );
}

// Main Home Component
export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-stars bg-fixed z-10"></div>
      <div className="absolute inset-0 bg-twinkle bg-fixed z-20 animate-twinkle"></div>

      {/* Content */}
      <div className="relative z-20">
        <NavigationBar />
        <main className="flex-grow">
          <HeroSection />
          <AboutMe />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

