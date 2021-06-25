import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="container -mt-20">
        <div className="grid grid-cols-2 gap-10">
          <div className="px-20 py-20 w-full h-full bg-purple-600 overflow-hidden relative">
            <span className="">
              <h1 className="mb-6 text-left text-4xl font-bold text-white">
                BENGO
              </h1>
              <p className="mb-4 text-left text-lg text-white">
                Learn Hiragana and Katakana with ease using mnemonics in days
                and not in months or years.
              </p>
            </span>
            <span className="font-bold text-white text-8xl opacity-30 absolute -bottom-5 -right-5">
              日本語
            </span>
          </div>
          <div className="flex flex-col justify-start items-start">
            <p className="font-bold text-2xl mb-6">Start Learning</p>
            <Link href="/hiragana">
              <a className="px-12 py-8 mb-2 bg-green-700 border border-greebg-green-700 hover:bg-green-800 transition duration-300 drop-shadow-lg overflow-hidden">
                <span className="text-white font-bold text-3xl">HIRAGANA</span>
                <span className="font-bold text-5xl text-white absolute -bottom-3 -right-2 opacity-30">
                  平仮名
                </span>
              </a>
            </Link>
            <Link href="/hiragana">
              <a className="px-12 py-8 mb-2 bg-indigo-600 border border-greebg-indigo-600 hover:bg-indigo-700 transition duration-300 drop-shadow-lg overflow-hidden">
                <span className="text-white font-bold text-3xl">KATAKANA</span>
                <span className="font-bold text-5xl text-white absolute -bottom-3 -right-2 opacity-30">
                  片仮名
                </span>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
