'use client';

import Image from "next/image";
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoPin } from 'react-icons/io5';
import { MdEmail } from "react-icons/md";
import { FiChevronDown } from "react-icons/fi";

import { useState } from "react";

import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaGitAlt, FaJava, FaPython } from "react-icons/fa";
import { SiTailwindcss, SiTensorflow, SiKeras, SiJunit5, SiTypescript, SiBuymeacoffee } from "react-icons/si";

function NavigationBar() {
  return (
    <header className="w-full bg-black text-white py-4 px-8">
      <div className="flex items-center justify-between">
        {/* Left Section: Logo */}
        <div className="flex items-center gap-4">
          <Image src="/favicon.ico" alt="Logo" width={40} height={40} />
          <h1 className="text-lg font-bold leading-tight sm:text-base md:text-lg">
            Raegan Van <br />
            Raamsdonk
          </h1>
        </div>

        {/* Center Section: Navigation Links */}
        <nav className="hidden sm:flex justify-center gap-8 flex-1">
          {["Technology", "Projects", "Education", "Contact Me"].map((section, index) => (
            <a
              key={index}
              href={`#${section.toLowerCase().replace(" ", "-")}`}
              className="group relative hover:text-gray-400 transition-colors whitespace-nowrap"
            >
              {section}
              <span className="absolute left-0 bottom-0 w-full h-0.5 bg-transparent group-hover:bg-blue-600 group-hover:animate-pulse transition-all"></span>
            </a>
          ))}
        </nav>

        {/* Right Section: Buy Me a Coffee */}
        <a
          href="https://buymeacoffee.com/raeganvr7q"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors ml-auto"
        >
          <SiBuymeacoffee size={20} />
          <span className="hidden md:inline">Buy Me a Coffee</span>
        </a>
      </div>
      <div className="relative h-1 mt-4">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-white to-black h-full"></div>
      </div>
    </header>
  );
}



function HeroSection() {
  return (
    <section id="hero" className="py-20 px-16 bg-black-100 h-screen">
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
              <FaGithub size={20} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/raeganvr/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
            >
              <FaLinkedin size={20} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href="mailto:raeganvr7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-gray-800 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MdEmail size={20} />
              <span className="hidden sm:inline">Email</span>
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
    <section id="about" className="py-20 flex flex-col items-center gap-12 relative">
      <div className="bg-black bg-opacity-90 relative p-8 shadow-md mx-auto w-screen h-auto rounded-lg overflow-hidden">
        {/* Radial Gradient */}
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            background: "radial-gradient(circle at center, rgba(55,50,230,0.7) 10%, transparent 60%)",
          }}
        ></div>

        {/* Section Content */}
        <div className="max-w-6xl mx-auto z-10 relative">
          <h2 className="text-6xl ml-2 font-bold text-white tracking-wide text-left mb-8">
            About Me
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 items-start gap-12">
            {/* Left Panel: Text Content */}
            <div className="space-y-8 text-left">
              <div className="space-y-2">
                <h4 className="text-2xl ml-2 text-gray-100 font-semibold">Who I Am</h4>
                <p className="text-md ml-2 text-gray-400 leading-relaxed mt-1">
                  Hi, I&apos;m Raegan Van Raamsdonk, a student with a love for math, computer science, 
                  and problem-solving. I thrive on exploring the balance between logic and creativity.
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="text-2xl ml-2 text-gray-200 font-semibold">What I Do</h4>
                <p className="text-md ml-2 text-gray-400 leading-relaxed">
                  Whether it&apos;s building web applications, creating immersive games, or tackling complex algorithm challenges, I enjoy pushing the boundaries of my skills. 
                  I&apos;m always curious to learn more and embrace every opportunity for growth.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl ml-2 text-gray-200 font-semibold">Beyond Coding</h4>
                <p className="text-md ml-2 text-gray-400 leading-relaxed">
                  Outside of academics, I love staying active through weight training, ultimate frisbee, and soccer. 
                  When I&apos;m not on the field or in the gym, you can find me playing chess or enjoying quiet moments with friends and family.
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="text-2xl ml-2 text-gray-200 font-semibold">My Vision</h4>
                <p className="text-md ml-2 text-gray-400 leading-relaxed">
                  My goal is to combine my passions and skills to develop meaningful solutions, contribute to impactful projects, 
                  and continuously learn along the way.
                </p>
              </div>
            </div>


            {/* Right Panel: Masonry Grid Photos */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {/* Column 1 */}
              <div className="flex flex-col gap-4">
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/a-m-tongue.jpg"
                    alt="Photo 1"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/a-r-atv.jpg"
                    alt="Photo 2"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/r-sooke.jpeg"
                    alt="Photo 3"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-4">
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/dominican.JPG"
                    alt="Photo 4"
                    width={300}
                    height={500}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/dumplings.jpg"
                    alt="Photo 5"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/a-r-sparkle.JPG"
                    alt="Photo 6"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-4">
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/m-snow.jpg"
                    alt="Photo 7"
                    width={300}
                    height={400}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/r-sideroom.jpg"
                    alt="Photo 8"
                    width={300}
                    height={300}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/r-dom-ocean.jpg"
                    alt="Photo 9"
                    width={300}
                    height={300}
                  />
                </div>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-4">
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/r-a-grad.jpg"
                    alt="Photo 10"
                    width={300}
                    height={500}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/r-hornby.jpg"
                    alt="Photo 11"
                    width={300}
                    height={500}
                  />
                </div>
                <div className="border border-gray-500 rounded-lg overflow-hidden">
                  <Image
                    className="object-cover"
                    src="/images/set1/r-math.jpg"
                    alt="Photo 12"
                    width={300}
                    height={400}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}



function Technology() {
  const techItems = [
    {
      icon: <FaReact size={32} className="text-blue-500" />,
      name: "React",
      description: "JavaScript library",
    },
    {
      icon: <FaHtml5 size={32} className="text-orange-500" />,
      name: "HTML5",
      description: "Webpage structure",
    },
    {
      icon: <FaCss3Alt size={32} className="text-blue-400" />,
      name: "CSS3",
      description: "Webpage styling",
    },
    {
      icon: <SiTailwindcss size={32} className="text-teal-500" />,
      name: "Tailwind CSS",
      description: "CSS framework",
    },
    {
      icon: <FaJsSquare size={32} className="text-yellow-500" />,
      name: "JavaScript",
      description: "Scripting language",
    },
    {
      icon: <FaJava size={32} className="text-red-500" />,
      name: "Java",
      description: "High-level language",
    },
    {
      icon: <SiTypescript size={32} className="text-blue-500" />,
      name: "TypeScript",
      description: "JavaScript Extension",
    },
    {
      icon: <FaPython size={32} className="text-blue-300" />,
      name: "Python",
      description: "High-level language",
    },
    {
      icon: <SiTensorflow size={32} className="text-orange-400" />,
      name: "TensorFlow",
      description: "ML library",
    },
    {
      icon: <SiKeras size={32} className="text-red-400" />,
      name: "Keras",
      description: "Neural networks API",
    },
    {
      icon: <FaGitAlt size={32} className="text-orange-600" />,
      name: "Git",
      description: "Version control",
    },
    {
      icon: <SiJunit5 size={32} className="text-green-300" />,
      name: "Junit5",
      description: "Unit testing",
    },
  ];

  return (
    <section id="technology" className="py-20 flex flex-col items-center gap-12 relative">
      <div className="bg-black bg-opacity-90 relative p-8 shadow-md mx-auto w-screen min-h-screen rounded-lg overflow-y-auto">
        {/* Radial Gradient */}
        <div
          className="absolute inset-0 opacity-30 z-0"
          style={{
            background: "radial-gradient(circle at top, rgba(55,50,230,0.7) 10%, transparent 70%)",
          }}
        ></div>

        {/* Section Title */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-6xl font-bold text-white tracking-wide text-left z-10 relative mb-8 py-8">
            Technology
          </h2>

          {/* Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {techItems.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-slate-900 p-4 rounded-lg shadow-md hover:shadow-lg transition-transform transform group"
              >
                <div className="p-2 bg-slate-950 rounded-lg relative group-hover:shadow-[0_0_15px_5px_rgba(59,130,246,0.5)] transition-shadow">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-lg text-gray-300">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            ))}
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
        "My love for computers and mathematics was sparked through projects like \"Binary,\" where I explored Boolean algebra and logic gates. These early experiences laid the foundation for my love of problem-solving and technology.",
      popupDescription:
        "My love for computers and mathematics was sparked through projects like \"Binary,\" where I explored Boolean algebra and logic gates. These early experiences laid the foundation for my problem-solving and technology skills.",
      images: ["/images/r-p-boolean.JPG"],
    },
    {
      title: "Middle School",
      time: "2016",
      description:
        "I combined my love for math and computers to create \"Neural Networks for Cancer Diagnosis,\" a project that won first place at the Vancouver Island Regional Science Fair and the BC Game Developers Innovation Award.",
      popupDescription:
        "I combined my love for math and computers to create \"Neural Networks for Cancer Diagnosis,\" a project that won first place at the Vancouver Island Regional Science Fair and the BC Game Developers Innovation Award. Using Python with TensorFlow and Keras, I showcased the potential of AI in healthcare.",
      images: ["/images/r-middle.jpg"],
    },
    {
      title: "High School",
      time: "2019",
      description:
        "I developed projects like \"Floppy Fish,\" an underwater-themed game, and \"Ninja Adventures,\" a multi-level adventure game. These experiences allowed me to explore creativity while deepening my interest in programming.",
      popupDescription:
        "I developed projects like \"Floppy Fish,\" an underwater-themed game, and \"Ninja Adventures,\" a multi-level adventure game. These experiences allowed me to explore creativity while deepening my interest in programming.",
      images: ["/images/floppyFish.png", "/images/ninja2.png"],
    },
    {
      title: "University",
      time: "Present",
      description:
        "I am expanding my skills by studying computer science and mathematics, building web applications, and solving complex algorithm challenges. Here, I strive to do my best in my classes while combining creativity and problem-solving to develop meaningful projects.",
      popupDescription:
        "I am expanding my skills by studying computer science and mathematics, building web applications, and solving complex algorithm challenges. Here, I strive to do my best in my classes while combining creativity and problem-solving to develop meaningful projects.",
      images: ["/images/r-skate.jpg"],
    },
  ];

  return (
    <section id="education" className="py-20 flex flex-col items-center gap-12">
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-6xl font-bold text-white tracking-wide ml-2">Education</h2>
      </div>

      <div className="relative space-y-12 before:absolute before:inset-0 before:left-1/2 before:-translate-x-1/2 before:h-full before:w-1 before:bg-gray-600">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-700 text-gray-300 shadow">
          <FiChevronDown size={16} />
        </div>
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="relative flex flex-col sm:flex-row items-center gap-8 max-w-5xl mx-auto"
          >
            {/* Horizontal Line */}
            <div
              className={`absolute top-1/2 w-1/2 h-1 bg-gray-600 ${
                index % 2 === 0 ? "sm:left-1/2 sm:-translate-x-0" : "sm:right-1/2 sm:translate-x-0"
              }`}
            ></div>

            {/* Icon */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 rounded-full border border-white bg-gray-700 text-gray-300 shadow">
              <FiChevronDown size={16} />
            </div>

            {/* Content Box */}
            <div
              className={`relative bg-gray-800 text-white p-6 rounded border border-gray-600 shadow-lg ${
                index % 2 === 0 ? "sm:ml-auto" : "sm:mr-auto"
              } w-full sm:w-[45%]`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-xl">{item.title}</h3>
                <time className="font-bold text-lg tracking-wider text-indigo-300">{item.time}</time>
              </div>
              <p className="text-gray-300">{item.description}</p>
              <div className="flex justify-center mt-4">
                {item.images.map((image, imgIndex) => (
                  <button
                    key={imgIndex}
                    onClick={() => {
                      setPopupImage(image);
                      setPopupDescription(item.popupDescription);
                    }}
                    className="flex justify-center"
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
        ))}
      </div>

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






function ProjectsSection() {
  const projects = [
    {
      title: "Floppy Fish",
      date: "2022",
      description: "Inspired by the classic Flappy Bird game, Floppy...",
      image: "/images/floppyFish.png",
      github: "https://github.com/raeganvr/floppy-fish",
      techIcons: [
        { key: "java", icon: <FaJava size={20} className="text-yellow-500" /> },
      ],
    },
    {
      title: "Ninja Adventure",
      date: "2021",
      description: "This JavaScript path adventure game challenges...",
      image: "/images/ninja1.png",
      github: "https://github.com/raeganvr/ninja-adventure",
      techIcons: [
        { key: "html5", icon: <FaHtml5 size={20} className="text-orange-500" /> },
        { key: "css3", icon: <FaCss3Alt size={20} className="text-blue-400" /> },
        { key: "javascript", icon: <FaJsSquare size={20} className="text-yellow-400" /> },
      ],
    },
    {
      title: "Portfolio Website",
      date: "2025",
      description: "My personal portfolio website made using Next.js...",
      image: "/images/website.png",
      github: "https://github.com/raeganvr/portfolio-website",
      techIcons: [
        { key: "react", icon: <FaReact size={20} className="text-blue-500" /> },
        { key: "tailwind", icon: <SiTailwindcss size={20} className="text-teal-500" /> },
        { key: "typescript", icon: <SiTypescript size={20} className="text-blue-400" /> },
        { key: "git", icon: <FaGitAlt size={20} className="text-orange-600" /> },
      ],
    },
  ];

  return (
    <section id="projects" className="relative py-20 bg-black flex flex-col items-center gap-12">
      {/* Radial Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30 -z-10"
        style={{
          background: "radial-gradient(circle at bottom, rgba(55,50,230,0.7) 10%, transparent 70%)",
        }}
      ></div>

      {/* Projects Section */}
      <div className="w-full max-w-6xl px-4">
        <h2 className="text-6xl font-bold text-white tracking-wide ml-2">Projects</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl px-4">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-700 bg-gray-900 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105"
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="block">
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  width={300}
                  height={400}
                />
              </div>
            </a>
            <div className="p-4 flex flex-col gap-4">
              <div>
                <p className="text-sm text-gray-400">{project.date}</p>
                <h3 className="text-lg font-bold text-white">{project.title}</h3>
                <p className="text-sm text-gray-400">{project.description}</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex gap-2">
                  {project.techIcons.map((techIcon) => (
                    <span key={techIcon.key}>{techIcon.icon}</span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 font-bold hover:underline"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full max-w-6xl px-4 ml-4 flex">
        <a
          href="https://github.com/raeganvr"
          target="_blank"
          rel="noopener noreferrer"
          className="border border-white bg-black text-white py-2 px-4 rounded-2xl hover:bg-gray-800 transition-colors flex items-center gap-2"
        >
          <FaGithub size={20} /> View GitHub
        </a>
      </div>
    </section>
  );
}




import React from "react";

function ContactSection() {
  const [formData, setFormData] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });
  const [error, setErrors] = useState<{ name: string; email: string; message: string }>({
    name: "",
    email: "",
    message: "",
  });
  const [successMessage, setSuccessMessage] = useState<string>("");


  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrors({ name: "", email: "", message: "" });
    setSuccessMessage("");
  
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
  
      // Check if the response status indicates success
      if (!response.ok) {
        // Parse the error response if it's JSON
        const data = await response.json().catch(() => ({})); // Fallback to an empty object for invalid JSON
        console.error("Error response:", data);
  
        // Check specific fields in the error response
        if (data.error?.includes("name")) setErrors((prev) => ({ ...prev, name: data.error }));
        if (data.error?.includes("email")) setErrors((prev) => ({ ...prev, email: data.error }));
        if (data.error?.includes("message")) setErrors((prev) => ({ ...prev, message: data.error }));
        return;
      }
  
      // Parse the success response
      const data = await response.json();
      console.log("Success response:", data);
  
      // Set success message
      setSuccessMessage(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("An unexpected error occurred:", error);
  
      // Handle unexpected errors
      setErrors({
        name: "",
        email: "",
        message: "An unexpected error occurred. Please try again.",
      });
    }
  };

  return (
    <section id="contact-me" className="relative py-20 bg-black flex flex-col items-center gap-8">
      {/* Radial Gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          background: "radial-gradient(circle at center, rgba(55,50,230,0.7) 10%, transparent 60%)",
        }}
      ></div>

      <h2 className="relative text-5xl font-bold text-white z-10">Contact Me</h2>

      <form
        onSubmit={handleSubmit}
        className="relative w-full max-w-md bg-gray-900 p-6 rounded-lg shadow-lg z-10"
      >
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {error.name && <p className="text-red-500 text-sm mt-1">{error.name}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
          />
          {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
        </div>

        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-300 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            placeholder="Your Message"
            className="w-full px-4 py-2 bg-gray-800 text-white rounded-lg focus:ring-2 focus:ring-blue-500"
          ></textarea>
          {error.message && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
        </div>

        {successMessage && <p className="text-green-500 text-sm mb-4">{successMessage}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
// Footer Component
function Footer() {
  return (
    <footer className="w-full bg-black text-white py-4 px-8 flex flex-col gap-2">

      <div className="relative h-1 w-full mb-2">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-white to-black h-full"></div>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between mb-2">
        <p>&copy; Raegan Van Raamsdonk</p>
      </div>
    </footer>
  );
}

// Fix technology section
// finish contact section
// add submission form to contact section
// figure out backend possibilities
// possible database

// Main Home Component
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-0 bg-black z-0"></div>
      <div className="absolute inset-0 bg-stars bg-fixed z-10"></div>
      <div className="absolute inset-0 bg-twinkle bg-fixed z-20 animate-twinkle"></div>

      {/* Content */}
      <div className="relative z-20">
        <NavigationBar />
        <main className="flex-grow">
          <HeroSection />
          <Technology />
          <ProjectsSection />
          <AboutMe />
          <EducationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}

