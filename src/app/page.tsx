"use client";

import Image from "next/image";
import { MapPin, Briefcase, Link, Menu, X, Calendar } from "lucide-react";
import Map from "../../public/map.png";
import anamvr from "../../public/AnamVR-Icon.png";
import profile from "../../public/pfp.webp";
import { useState } from "react";

const projects: {
  name: string;
  desc: string;
  github: string;
}[] = [
  {
    name: "NiteOut",
    desc: "NiteOut is a mobile app that helps users find, host, and join pub games in their area. Whether you're looking for a trivia night, a poker game, or a casual darts competition, NiteOut connects you with the best local events.",
    github: "https://github.com/ishaanJ91/sweng25_group13_pubgamenightfinder",
  },
  {
    name: "LandStat",
    desc: "LandStat, a MERN stack application that visualizes NDVI data, allowing users to examine global vegetation health.",
    github: "https://github.com/ishaanJ91/landsat",
  },
  {
    name: "Bitcoin Price Prediction",
    desc: "Bitcoin Price Prediction, uses a hybrid model to predict Bitcoin prices based on 5 years of historical data",
    github: "https://github.com/ishaanJ91/bitcoin-prediction",
  },
  {
    name: "AirBnB Clone",
    desc: "A MERN stack clone that replicates Airbnb's key features, allowing users to search, book, and manage accommodations.",
    github: "https://github.com/ishaanJ91/airdnd-clone",
  },
];

// Work experience data
const workExperience = [
  {
    company: "AnamVR",
    position: "Mobile Developer",
    period: "Jan 2025 — Present",
    location: "Dublin, Ireland",
    description:
      "Developing native iOS and Android applications for virtual reality experiences. Working with React Native, XCode, and Unity-React plugin to create immersive mobile interfaces that connect with VR hardware.",
    technologies: ["React Native", "Firebase"],
    logo: anamvr,
  },
];

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-custom text-gray-200">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-custom backdrop-blur-sm border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center h-16">
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Work
              </a>
              <a
                href="#projects"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="https://github.com/ishaanJ91"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900 border-b border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#about"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#work"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Work
              </a>
              <a
                href="#projects"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="https://github.com/ishaanJ91"
                target="_blank"
                rel="noopener noreferrer"
                className="block px-3 py-2 text-gray-300 hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        {/* About Section */}
        <section
          id="about"
          className="flex flex-row gap-20 border-l border-gray-600 pl-10 pt-4 pb-4 mb-20"
        >
          <h2 className="text-md font-bold mb-8 inline-block">About</h2>

          <div className="flex">
            {/* Left column - Photo and basic info */}
            {/* <div className="space-y-6">
              <div className="relative w-full aspect-square max-w-xs mx-auto md:mx-0 rounded-xl overflow-hidden border border-zinc-800/50">
                <Image
                  src={profile || "/placeholder.svg"}
                  alt="pfp"
                  fill
                  className="object-cover"
                />
              </div>
            </div> */}

            {/* Right column - Bio and skills */}
            <div className="flex flex-row">
              <div className="flex flex-col">
                <div className="pr-10">
                  <h3 className="text-lg font-medium mb-3">
                    Hello, I'm Ishaan
                  </h3>
                  <p className="text-gray-300 mb-4">
                    I'm a developer and Computer Science student based in
                    Dublin, Ireland, passionate about creating intuitive and
                    impactful digital experiences.
                  </p>
                  <p className="text-gray-400">
                    Currently working at AnamVR, where I'm responsible for
                    developing native mobile applications. I'm also completing
                    my bachelor's degree in Computer Science at Trinity College
                    Dublin, with a focus on machine learning and web
                    technologies.
                  </p>
                </div>

                <div className="relative w-full h-64 mt-10 rounded-lg overflow-hidden">
                  <Image
                    src={Map || "/placeholder.svg"}
                    alt="Map of Dublin, Ireland"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-2 right-2 flex items-center text-sm bg-black/30 px-4 py-2 rounded-xl">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span className="font-light">Dublin, Ireland</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "JavaScript",
                    "React",
                    "Node.js",
                    "Python",
                    "MongoDB",
                    "Express",
                    "Next.js",
                    "TailwindCSS",
                    "Machine Learning",
                    "Mobile Development",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-zinc-800/70 rounded-full text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Work Section - Redesigned */}
        <section
          id="work"
          className="flex flex-row gap-20 border-l border-gray-600 pl-10 pt-4 pb-4 mb-20"
        >
          <h2 className="text-md font-bold mb-8 inline-block">Work</h2>

          <div className="space-y-12">
            {workExperience.map((job, index) => (
              <div key={index} className="relative">
                {/* Timeline connector */}
                {index < workExperience.length - 1 && (
                  <div className="absolute left-5 top-16 bottom-0 w-px bg-gray-700/50"></div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-6">
                  <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300">
                    {/* Right column - Job details */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                      <div className="flex flex-row gap-4 justify-between">
                        <div className="flex flex-col items-start">
                          <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center flex-shrink-0 z-10">
                            <Image
                              src={job.logo || "/placeholder.svg"}
                              alt={`${job.company} logo`}
                              width={45}
                              height={45}
                              className="rounded-full"
                            />
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-medium">
                            {job.position}
                          </h3>
                          <p className="text-gray-300">{job.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center mt-2 md:mt-0 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{job.period}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-gray-400 text-sm mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{job.location}</span>
                    </div>

                    <p className="text-gray-400 mb-4">{job.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="flex flex-row gap-20 border-l border-gray-600 pl-10 pt-4 pb-4 mb-20"
        >
          <h2 className="text-md font-bold mb-8 inline-block">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/30 hover:border-zinc-700/50 transition-all duration-300 flex flex-col h-full"
              >
                <h3 className="text-lg font-medium mb-3">{project.name}</h3>
                <p className="text-gray-400 text-sm flex-grow mb-4">
                  {project.desc}
                </p>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors mt-auto"
                >
                  <Link className="w-4 h-4 mr-2" />
                  <span className="text-sm">GitHub</span>
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="flex flex-row gap-20 border-l border-gray-600 pl-10 pt-4 pb-4 mb-20"
        >
          <h2 className="text-md font-bold mb-8 inline-block">Contact</h2>
          <div className="flex flex-col">
            <p className="mb-4 font-semibold text-emerald-400">jaini@tcd.ie</p>
            <div className="flex flex-row gap-2">
              <Link className="w-4 h-4" />
              <p className="mb-4 font-semibold text-emerald-400">LinkedIn</p>
            </div>
            <div className="flex flex-row gap-2">
              <Link className="w-4 h-4" />
              <p className="mb-4 font-semibold text-emerald-400">GitHub</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-zinc-800/50 py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 text-sm">
            Copyright © {new Date().getFullYear()}. All rights are reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
