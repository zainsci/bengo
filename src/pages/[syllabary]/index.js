import Link from "next/link"
import { useRouter } from "next/router"
import React, { useState, useEffect } from "react"

import Layout from "../../components/layout"

const Hiragama = () => {
  const router = useRouter()
  const { syllabary } = router.query

  const [kanaList, setKanaList] = useState([])
  const charGrid = []

  useEffect(() => {
    syllabary
      ? fetch(`/assets/${syllabary}.json`)
          .then((res) => res.json())
          .then((data) => setKanaList(data))
      : null
  }, [syllabary])

  kanaList.forEach((kana) => {
    charGrid.push(
      kana.type ? (
        <Link href={`/${syllabary}/${kana.id}`} key={kana.id}>
          <a
            className="bg-indigo-500 text-white flex flex-col justify-center items-center px-6 py-8 font-display w-max"
            key={kana.id}
          >
            <div className="text-8xl mb-2">{kana.kana}</div>
            <small>{kana.romaji}</small>
          </a>
        </Link>
      ) : (
        <div className="bg-indigo-200"></div>
      )
    )
  })

  return (
    <Layout>
      <div className="grid grid-cols-5 gap-4 max-w-3xl">{charGrid}</div>
    </Layout>
  )
}

export default Hiragama
