import React from "react";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "test", name, email, message }),
    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error));
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto md:ml-10 flex sm:flex-nowrap flex-wrap">
          <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            Contact
          </h2>
          <p className="leading-relaxed mb-5">
            Questions? Feel free to connect with me on linkedin or shoot me an email. I'd love to chat!
          </p>
          </div>
          <div className="lg:w-2/3 md:w-1/2 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-end relative">
          <div className="bg-gray-800 bg-opacity-40 relative flex flex-wrap p-10 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <p className="mt-1">
                anna.revall.clausen@gmail.com
              </p>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                LINKEDIN
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="https://www.linkedin.com/in/anna-revall-clausen/">linkedin.com/in/anna-revall-clausen</a>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                GITHUB
              </h2>
              <a className="text-indigo-400 leading-relaxed" href="https://github.com/AnnaClausen">
                github.com/AnnaClausen
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
