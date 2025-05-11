"use client";

import Image from "next/image";
import {
  MapPin,
  Link,
  Menu,
  X,
  Calendar,
  ExternalLink,
  Briefcase,
} from "lucide-react";
import Map from "../../public/map.png";
import anamvr from "../../public/AnamVR-Icon.png";

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
    position: "Software Developer Intern",
    period: "Jan 2025 — Present",
    location: "Dublin, Ireland",
    description:
      "Developing native iOS and Android applications for virtual reality experiences. Working with React Native, XCode, and Unity-React plugin to create immersive mobile interfaces that connect with VR hardware.",
    technologies: ["React Native", "Firebase"],
    tech: "iOS, Android",
    logo: anamvr,
  },
];

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-[#18181b] text-gray-200">
      <main className="max-w-5xl bg-[#18181b] mx-auto px-4 sm:px-6 lg:px-4 pt-16 pb-12 text-sm">
        {/* About and Work Sections Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {/* About Section */}
          <section
            id="about"
            className="flex flex-row gap-20 border-l border-gray-600/40 pl-10 pt-4 pb-4"
          >
            <h2 className="text-sm font-bold mb-8 inline-block">About</h2>

            <div className="flex flex-col">
              <div className="pr-6">
                <h3 className="text-base font-medium mb-3">
                  Hello, I'm Ishaan
                </h3>
                <p className="text-gray-400">
                  Currently working at AnamVR, where I'm responsible for
                  developing native mobile applications. I'm also completing my
                  bachelor's degree in Computer Science at Trinity College
                  Dublin, with a focus on machine learning and web technologies.
                </p>
              </div>

              <div className="relative w-full h-64 mt-10 rounded-lg overflow-hidden">
                <Image
                  src={Map || "/placeholder.svg"}
                  alt="Map of Dublin, Ireland"
                  fill
                  className="object-cover scale-200 object-right"
                />
                <div className="absolute bottom-2 right-2 flex items-center text-sm bg-black/30 px-2 py-1 rounded-md">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-xs font-light">Dublin, Ireland</span>
                </div>
              </div>
            </div>
          </section>

          {/* Work Section - Inspired by the reference design */}
          <section id="work">
            <div className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/50 h-fit">
              <div className="flex items-center mb-6">
                <Briefcase className="w-5 h-5 mr-2" />
                <h2 className="text-lg font-medium">Work</h2>
              </div>

              <div className="space-y-8">
                {workExperience.map((job, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 mt-1">
                      <div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center">
                        <Image
                          src={job.logo || "/placeholder.svg"}
                          alt={`${job.company} logo`}
                          width={30}
                          height={30}
                          className="rounded-full"
                        />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-base font-medium">
                            {job.company}
                          </h3>
                          <p className="text-emerald-400 text-sm">
                            {job.position}
                          </p>
                          <p className="text-gray-500 text-sm mt-1">
                            {job.tech}
                          </p>
                        </div>
                        <span className="text-gray-500 text-sm whitespace-nowrap">
                          {job.period}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        {/* Projects Section */}
        <section
          id="projects"
          className="flex flex-row gap-20 border-l border-gray-600/40 pl-10 pt-4 pb-4 mb-20"
        >
          <h2 className="text-sm font-bold mb-8 inline-block">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-zinc-900/30 rounded-xl p-6 border border-zinc-800/30 hover:border-zinc-700/50 hover:bg-zinc-800/40 transition-all duration-300 flex flex-col h-full"
              >
                <h3 className="text-base font-medium mb-3">{project.name}</h3>
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
          className="flex flex-row gap-20 border-l border-gray-600/40 pl-10 pt-4 pb-4 mb-20"
        >
          <h2 className="text-sm font-bold mb-8 inline-block">Contact</h2>
          <div className="flex flex-col">
            <a
              href="mailto:jaini@tcd.ie"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="mb-4 font-semibold text-emerald-400 inline-flex items-center gap-1">
                jaini@tcd.ie
              </p>
            </a>

            <a
              href="https://www.linkedin.com/in/ishaanj9"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 font-semibold text-emerald-400 inline-flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> LinkedIn
            </a>

            <a
              href="https://github.com/ishaanJ91"
              target="_blank"
              rel="noopener noreferrer"
              className="mb-4 font-semibold text-emerald-400 inline-flex items-center gap-1"
            >
              <ExternalLink className="w-4 h-4 mr-1" /> GitHub
            </a>
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
