import React from "react"

import Layout from "../components/layout"

const About = () => {
  return (
    <Layout>
      <div className="px-20 py-24 bg-indigo-600 relative">
        <div className="relative z-10">
          <h1 className="text-left font-bold text-white text-5xl mb-4">
            ABOUT
          </h1>
          <p className="mb-4 text-left text-white text-2xl">
            A simple website for helping you take your first steps towards this
            beautiful and amazing journey of learning the Japanese Language.
          </p>
          <p className="mb-4 text-left text-white text-2xl">
            This website was created using NextJs and TailwindCSS and the source
            code for it can be found on{" "}
            <a
              href="https://github.com/zainsc/bengo"
              className="text-white hover:underline"
            >
              Github.com
            </a>
          </p>
        </div>
        <span className="font-bold text-9xl text-white absolute -bottom-5 -right-3 opacity-30 z-0">
          について
        </span>
      </div>
    </Layout>
  )
}

export default About
