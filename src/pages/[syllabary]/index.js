import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

import Layout from "../../components/layout"

const Syllabary = () => {
  const router = useRouter()
  const { syllabary } = router.query

  const [kanaList, setKanaList] = useState([])

  const kanaGrid = []
  const dakutenGrid = []
  const handakutenGrid = []
  const hybridGrid = []

  useEffect(() => {
    syllabary
      ? fetch(`/assets/${syllabary}.json`)
          .then((res) => res.json())
          .then((data) => setKanaList(data))
      : null
  }, [syllabary])

  kanaList.forEach((kana) => {
    switch (kana.type) {
      case "kana":
        switch (kana.kana) {
          case "や":
          case "ヤ":
          case "ゆ":
          case "ユ":
            kanaGrid.push(
              <React.Fragment key={`${kana.kana}${Math.random()}`}>
                <KanaBox syllabary={syllabary} kana={kana} />
                <div className="bg-indigo-300"></div>
              </React.Fragment>
            )
            break

          case "わ":
          case "ワ":
            kanaGrid.push(
              <React.Fragment key={`${kana.kana}${Math.random()}`}>
                <KanaBox syllabary={syllabary} kana={kana} />
                <div className="bg-indigo-300"></div>
                <div className="bg-indigo-300"></div>
                <div className="bg-indigo-300"></div>
              </React.Fragment>
            )
            break

          default:
            kanaGrid.push(
              <KanaBox
                key={`${kana.kana}${Math.random()}`}
                syllabary={syllabary}
                kana={kana}
              />
            )
        }
        break

      case "dakuten":
        dakutenGrid.push(
          <KanaBox
            key={`${kana.kana}${Math.random()}`}
            syllabary={syllabary}
            kana={kana}
          />
        )
        break

      case "handakuten":
        handakutenGrid.push(
          <KanaBox
            key={`${kana.kana}${Math.random()}`}
            syllabary={syllabary}
            kana={kana}
          />
        )
        break

      case "hybrid":
        hybridGrid.push(
          <KanaBox
            key={`${kana.kana}${Math.random()}`}
            syllabary={syllabary}
            kana={kana}
          />
        )
        break
    }
  })

  return (
    <Layout>
      <div className="max-w-7xl">
        <h1 className="w-full text-center text-5xl font-bold py-6 bg-indigo-600 text-white my-6">
          KANA
        </h1>
        <div className="grid grid-cols-5 gap-4">{kanaGrid}</div>
        <h1 className="w-full text-center text-5xl font-bold py-6 bg-indigo-600 text-white my-6">
          DAKUTEN
        </h1>
        <div className="grid grid-cols-5 gap-4">{dakutenGrid}</div>
        <h1 className="w-full text-center text-5xl font-bold py-6 bg-indigo-600 text-white my-6">
          HANDAKUTEN
        </h1>
        <div className="grid grid-cols-5 gap-4">{handakutenGrid}</div>
        <h1 className="w-full text-center text-5xl font-bold py-6 bg-indigo-600 text-white my-6">
          COMBINATION HIRAGANA
        </h1>
        <div className="grid grid-cols-3 gap-4">{hybridGrid}</div>
      </div>
    </Layout>
  )
}

const KanaBox = ({ syllabary, kana }) => {
  return (
    <Link href={`/${syllabary}/${kana.id}`}>
      <a className="bg-indigo-500 text-white flex flex-col justify-center items-center px-6 py-8 font-display w-max">
        <div className="text-8xl mb-2">{kana.kana}</div>
        <small>{kana.romaji}</small>
      </a>
    </Link>
  )
}

export default Syllabary
