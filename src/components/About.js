import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container px-20 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20 px-20">
          <h1 className="sm:text-7xl text-3xl font-medium title-font mb-4 text-white">
            Hi, I'm Anna.
          </h1>
          <p className="mb-8 leading-relaxed">
          Throughout my 8 years as a marketer at fast-paced tech startups, I continuously found myself drawn to finding ways to build, experiment and iterate on technical solutions for complex problems. The more I learned, the more I understand how to develop interactive applications end-to-end. So, I decided to spend a year completing a full-stack engineering certification program. One year later, I was officially addicted to applying my new programming skills to projects every day. 
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
