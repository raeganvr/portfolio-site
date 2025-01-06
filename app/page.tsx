import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl font-bold text-blue-600 text-center sm:text-left">
          Welcome to Raegan&apos;s Portfolio
        </h1>
        <p className="text-lg text-gray-700 text-center sm:text-left">
          I&apos;m a web developer passionate about creating cool stuff. Explore my projects below!
        </p>
        <a
          className="rounded-full border border-solid border-blue-600 transition-colors flex items-center justify-center bg-blue-600 text-white hover:bg-blue-700 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
          href="#projects"
        >
          View My Projects
        </a>
      </main>

      {/* Projects Section */}
      <section
        id="projects"
        className="flex flex-col gap-8 items-center sm:items-start w-full max-w-4xl"
      >
        <h2 className="text-3xl font-bold text-gray-800">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 1</h3>
            <p className="text-gray-600">
              Description of my project. Technologies used and key features.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">Project 2</h3>
            <p className="text-gray-600">
              Another project description. Showcase what you&apos;ve built!
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/raeganvr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/github.svg"
            alt="GitHub icon"
            width={16}
            height={16}
          />
          GitHub
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/raeganvr/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/linkedin.svg"
            alt="LinkedIn icon"
            width={16}
            height={16}
          />
          LinkedIn
        </a>
      </footer>
    </div>
  );
}
