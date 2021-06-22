import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className="container -mt-20">
        <div className="grid grid-cols-2">
          <div
            style={{ fontSize: "20rem" }}
            className="flex justify-center items-center font-display bg-gradient-to-br from-green-500 to-purple-900 bg-clip-text text-transparent"
          >
            あ
          </div>
          <div className="flex flex-col justify-center items-start">
            <h1 className="text-4xl mb-6">BENGO</h1>
            <p className="text-lg mb-4 text-left">
              Learn Hiragana and Katakana with ease using mnemonics in days
              <br />
              and not in months or years.
            </p>
            <Link href="/hiragana">
              <a className="px-6 py-2 mb-2 rounded-sm bg-purple-600 text-white uppercase font-bold border border-purple-600 hover:bg-purple-500 transition duration-300 drop-shadow-lg focus:outline-none">
                Hiragana
              </a>
            </Link>
            <Link href="/katakana">
              <a className="px-6 py-2 mb-2 rounded-sm bg-white text-purple-600 uppercase font-bold border border-purple-600 hover:bg-purple-100 hover:border-purple-700 transition duration-300 drop-shadow-lg focus:outline-none">
                Katakana
              </a>
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}
