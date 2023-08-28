import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container px-20 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mt-10 mb-10 px-20">
          <h1 className="sm:text-7xl text-3xl font-medium title-font mb-4 text-white">
            Hi, I'm Anna.
          </h1>
          <p className="mb-8 leading-relaxed">
          Front-end software engineer with a passion for developing creative solutions to empower users and solve difficult problems. Through my journey from a marketer to a certified front-end engineer, I have become deeply attuned to both the creative and technical aspects of application development and I am confident in my ability to advocate for best practices in system design, user experience, and engineering excellence.
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
