import React from "react"

import Layout from "../components/layout"

const Contact = () => {
  return (
    <Layout>
      <div className="px-20 py-24 bg-green-600 relative">
        <div className="relative z-10">
          <h1 className="text-left font-bold text-white text-5xl mb-4">
            CONTACT
          </h1>
          <p className="mb-4 text-left text-white text-2xl">
            Hello There! I am <a>zainsci</a> creator of this website and you can
            contact me on{" "}
            <a
              href="https://twitter.com/zainsci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Twitter
            </a>{" "}
            and on{" "}
            <a
              href="https://instagram.com/zainsci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Instagram
            </a>
            . If you any suggestion on making this website in any way better
            just leave a message.
          </p>
          <p className="mb-4 text-left text-white text-2xl">
            And if you are a developer and can help in any way improving this
            website you can do so by contributing on{" "}
            <a
              href="https://github.com/zainsci/bengo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              GitHub.com
            </a>{" "}
            This website was created using NextJs and TailwindCSS and the source
            code for it can be found on{" "}
            <a
              href="https://github.com/zainsc/bengo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              Github.com
            </a>
          </p>
        </div>
        <span className="font-bold text-9xl text-white absolute -bottom-5 -right-3 opacity-30 z-0">
          お問い合わせ
        </span>
      </div>
    </Layout>
  )
}

export default Contact
