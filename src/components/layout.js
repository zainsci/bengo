import React from "react"
import Link from "next/link"
import Head from "next/head"

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>BENGO - Learn Hiragana & Katakana</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="flex flex-col justify-center items-center min-h-screen mt-20">
        <header className="fixed top-0 left-0 right-0 bg-white border-b-2 border-gray-200">
          <div className="container mx-auto">
            <div className="px-2 py-4 flex justify-between items-center">
              <div className="logo font-bold text-2xl">BENGO</div>
              <nav>
                <ul className="flex justify-center items-center">
                  <li>
                    <Link href="/">
                      <a className="px-4 py-2 mr-2 rounded-sm uppercase hover:bg-gray-100">
                        HOME
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <a className="px-4 py-2 mr-2 rounded-sm uppercase hover:bg-gray-100">
                        ABOUT
                      </a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a className="px-4 py-2 mr-2 rounded-sm uppercase hover:bg-gray-100">
                        CONTACT
                      </a>
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center w-full flex-1 text-center h-full py-20">
          {children}
        </main>

        <footer className="flex justify-center items-center py-4 font-bold border-t-2 border-gray-200 w-full">
          BENGO - {new Date().getFullYear()}
        </footer>
      </div>
    </>
  )
}

export default Layout