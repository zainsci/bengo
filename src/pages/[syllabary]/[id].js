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
      <div>{kana.char}</div>
    </Layout>
  )
}

export default HiraganaChar
