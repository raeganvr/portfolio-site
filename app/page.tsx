'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoPin } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";
import { useState } from "react";

import { motion } from "framer-motion"

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
          priority
        />
      </div>
    </div>
  </section>
  );
}
function AboutMe() {
  return (
    <section id="about" className="py-20 flex flex-col items-center gap-8">
      <h2 className="text-4xl font-extrabold text-white tracking-wide">
        About Me
      </h2>

      <div className="border border-white/70 p-8 shadow-md grid grid-cols-1 sm:grid-cols-2 items-center gap-8 transition-transform duration-300 hover:shadow-lg hover:scale-105 mx-auto max-w-[1100px] animate-glow bg-gradient-to-r from-gray-800 via-black to-gray-900 rounded-lg">
        {/* Left Panel: Text Content */}
        <div className="space-y-8 text-left">
          <h3 className="text-3xl text-gray-100 font-bold">
            Who I Am
          </h3>
          <p className="text-md text-gray-300 leading-relaxed">
            Hi, I&apos;m Raegan Van Raamsdonk, a student with a love for math, computer science, 
            and problem-solving. I enjoy exploring the logic and creativity behind coding, whether 
            it&apos;s building web applications, creating games, or tackling algorithm challenges. 
            Outside of academics, I love weight training, ultimate frisbee, soccer, and chess. My 
            goal is to combine my passions and skills to create solutions and continue learning every step of the way.
          </p>
        </div>

        {/* Right Panel: Masonry Grid Photos */}
        <div className="grid grid-cols-4 gap-4">
          {/* Column 1 */}
          <div className="flex flex-col gap-4">
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/a-m-tongue.jpg"
              alt="Photo 1"
              width={300}
              height={400}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/a-r-atv.jpg"
              alt="Photo 2"
              width={300}
              height={300}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/r-sooke.jpeg"
              alt="Photo 3"
              width={300}
              height={300}
            />
          </div>

          {/* Column 2 */}
          <div className="flex flex-col gap-4">
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/dominican.JPG"
              alt="Photo 4"
              width={300}
              height={500}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/dumplings.jpg"
              alt="Photo 5"
              width={300}
              height={300}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/a-r-sparkle.JPG"
              alt="Photo 6"
              width={300}
              height={300}
            />
          </div>

          {/* Column 3 */}
          <div className="flex flex-col gap-4">
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/m-snow.jpg"
              alt="Photo 7"
              width={300}
              height={400}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/r-sideroom.jpg"
              alt="Photo 8"
              width={300}
              height={300}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/r-dom-ocean.jpg"
              alt="Photo 9"
              width={300}
              height={300}
            />
          </div>

          {/* Column 4 */}
          <div className="flex flex-col gap-4">
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/r-a-grad.jpg"
              alt="Photo 10"
              width={300}
              height={500}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/r-hornby.jpg"
              alt="Photo 11"
              width={300}
              height={500}
            />
            <Image
              className="rounded-lg object-cover"
              src="/images/set1/r-math.jpg"
              alt="Photo 12"
              width={300}
              height={400}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function EducationSection() {
  const [popupImage, setPopupImage] = useState<string | null>(null); 
  const [popupDescription, setPopupDescription] = useState<string>("");

  const closePopup = () => {
    setPopupImage(null);
    setPopupDescription("");
  };

  const timelineItems = [
    {
      title: "Elementary School",
      time: "2010",
      description:
        "My passion for computers and mathematics was sparked through projects like \"Binary,\" where I explored Boolean algebra and logic gates, and \"The Fastest Path,\" where I studied the brachistochrone curve. These early experiences laid the foundation for my love of problem-solving and technology.",
      popupDescription: "My passion for computers and mathematics was sparked through projects like \"Binary,\" where I explored Boolean algebra and logic gates, and \"The Fastest Path,\" where I studied the brachistochrone curve. These early experiences laid the foundation for my love of problem-solving and technology.",
      images: ["/images/r-p-boolean.JPG"],
    },
    {
      title: "Middle School",
      time: "2016",
      description:
        "I combined my love for math and computers to create \"Neural Networks for Cancer Diagnosis,\" a project that won first place at the Vancouver Island Regional Science Fair and the BC Game Developers Innovation Award. Using Python with TensorFlow and Keras, I showcased the potential of AI in healthcare.",
      popupDescription: "I combined my love for math and computers to create \"Neural Networks for Cancer Diagnosis,\" a project that won first place at the Vancouver Island Regional Science Fair and the BC Game Developers Innovation Award. Using Python with TensorFlow and Keras, I showcased the potential of AI in healthcare.",
      images: ["/images/r-middle.jpg"],
    },
    {
      title: "High School",
      time: "2019",
      description:
        "I developed projects like \"Floppy Fish,\" an underwater-themed game, and \"Ninja Adventures,\" a multi-level adventure game. These experiences allowed me to explore creativity while deepening my interest in programming.",
      popupDescription: "I developed projects like \"Floppy Fish,\" an underwater-themed game, and \"Ninja Adventures,\" a multi-level adventure game. These experiences allowed me to explore creativity while deepening my interest in programming.",
      images: ["/images/floppyFish.png", "/images/ninja2.png"],
    },
    {
      title: "University",
      time: "Present",
      description:
        "I am expanding my skills by studying computer science and mathematics, building web applications, and solving complex algorithm challenges. I continue to combine creativity and problem-solving to develop meaningful projects.",
      popupDescription: "I am expanding my skills by studying computer science and mathematics, building web applications, and solving complex algorithm challenges. I continue to combine creativity and problem-solving to develop meaningful projects.",
      images: ["/images/r-skate.jpg"],
    },
  ];

  return (
    <section id="education" className="py-20 flex flex-col items-center gap-12">
      <h2 className="text-4xl font-extrabold text-white tracking-wide mb-8">
        Education
      </h2>

      <div className="relative space-y-12 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gradient-to-b before:from-transparent before:via-gray-600 before:to-gray-800">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center gap-8 max-w-5xl mx-auto ${
              index % 2 === 0 ? "md:flex-row-reverse" : ""
            }`}
          >
            {/* Icon */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-700 text-gray-300 shadow">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="10"
              >
                <path
                  fillRule="nonzero"
                  d="M10.422 1.257 4.655 7.025 2.553 4.923A.916.916 0 0 0 1.257 6.22l2.75 2.75a.916.916 0 0 0 1.296 0l6.415-6.416a.916.916 0 0 0-1.296-1.296Z"
                />
              </svg>
            </div>

            {/* Content Box */}
            <div className="w-full md:w-1/2 bg-gray-800 text-white p-6 rounded border border-gray-600 shadow-lg max-w-6xl">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <time className="font-medium text-indigo-400">{item.time}</time>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <p className="text-gray-300">{item.description}</p>

                <div className="flex flex-wrap gap-4 justify-end">
                  {item.images.map((image, imgIndex) => (
                    <button
                      key={imgIndex} 
                      onClick={() => {
                        setPopupImage(image);
                        setPopupDescription(item.popupDescription);
                      }}
                    >
                      <Image
                        className="rounded-lg object-cover cursor-pointer hover:opacity-80"
                        src={image}
                        alt={`${item.title} Image ${imgIndex + 1}`}
                        width={300}
                        height={200}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-Up for Expanded Image */}
      {popupImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
          onClick={closePopup}
        >
          <div
            className="bg-gray-900 rounded-lg p-6 relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              className="rounded-lg mb-4 max-w-full max-h-[70vh] object-contain"
              src={popupImage}
              alt="Expanded"
              width={800}
              height={600}
            />
            <p className="text-white text-center">{popupDescription}</p>
            <button
              className="absolute top-4 right-4 text-white text-lg"
              onClick={closePopup}
            >
              &times;
            </button>
          </div>
        </div>
      )}

    </section>
  );
}







// Projects Section Component
function ProjectsSection() {
  return (
    <section id="projects" className="py-20 flex flex-col items-center gap-8">
      <h2 className="text-4xl font-extrabold text-white-800 tracking-wide">My Projects</h2>
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
          <EducationSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

