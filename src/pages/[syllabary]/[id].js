import React, { useState, useEffect } from "react"
import { useRouter } from "next/router"

import Layout from "../../components/layout"

const HiraganaChar = () => {
  const router = useRouter()
  const { syllabary, id: kanaID } = router.query
  const [kana, setKana] = useState({})

  useEffect(() => {
    kanaID && syllabary
      ? fetch(`/assets/${syllabary}/${kanaID}.json`)
          .then((res) => res.json())
          .then((data) => setKana(data))
      : null
  }, [kanaID])

  return (
    <Layout>
      <div className="grid grid-cols-3 gap-10 w-full min-h-full">
        <div
          className="text-transparent bg-gradient-to-r from-green-600 to-indigo-500 bg-clip-text flex justify-center items-start"
          style={{
            fontSize: "14rem",
          }}
        >
          {kana.kana}
        </div>
        <div className="flex flex-col items-start">
          <h1 className="text-6xl">
            <span className="font-bold">KANA: </span> {kana.kana}
          </h1>
          <h2 className="text-5xl">ROMAJI: {kana.romaji}</h2>
        </div>
        <div></div>
      </div>
    </Layout>
  )
}

export default HiraganaChar
