import React from "react";

export default function Contact() {
  // const [name, setName] = React.useState(""); 
  // const [email, setEmail] = React.useState(""); 
  // const [message, setMessage] = React.useState(""); 

  function encode(data) {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": e.target.getAtrribute("name"),
      })

    })
      .then(() => alert("Message sent!"))
      .catch((error) => alert(error))
  }

  return (
    <section id="contact" className="relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="hidden lg:w-2/3 md:w-1/2 md:block rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://maps.google.com/maps?q=Austin,%20Texas&t=&z=13&ie=UTF8&iwloc=&output=embed"
          />
          <div className="bg-burntorange absolute bottom-3 left-3 flex flex-wrap p-6 rounded shadow-md lg:w-1/3">
            <div className="px-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                EMAIL
              </h2>
              <a className="text-indigo-400 leading-relaxed">
                tylerhooks8@gmail.com
              </a>
              <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
                PHONE
              </h2>
              <p className="leading-relaxed">281-656-1814</p>
            </div>
          </div>
        </div>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="xl:w-2/5 lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <input type="hidden" name="form-name" value="contact" />
          <h2 className="sm:text-4xl text-3xl mb-1 font-medium title-font">
            Let's Connect
          </h2>
          <p className="leading-relaxed mb-5">
            I am currently based in the Austin, Texas area and would love to learn more about any future opportunities.
          </p>
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-cream rounded border border-burntorange focus:border-burntorange focus:ring-2 focus:ring-burnorange text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-cream-light rounded border border-burntorange  focus:border-burntorange focus:ring-2 focus:ring-burnorange text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-cream-light rounded border border-burntorange  focus:border-burntorange focus:ring-2 focus:ring-burnorange h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
            />
          </div>
          <button
            type="submit"
            className="border-1 bg-burntorange text-cream py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
            Submit
          </button>
        </form>
      </div>
    </section>

  );
}