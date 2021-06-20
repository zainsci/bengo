import React, { useState, useEffect } from "react"

import Layout from "../../components/layout"

const Hiragama = () => {
  const [chars, setChars] = useState([])
  const charGrid = []

  useEffect(() => {
    fetch("/assets/hiragana.json")
      .then((res) => res.json())
      .then((data) => setChars(data))
  }, [])

  chars.forEach((char) => {
    charGrid.push(
      char.type ? (
        <div className="bg-indigo-500 text-white flex flex-col justify-center items-center px-6 py-8 font-display">
          <div className="text-8xl mb-2">{char.char}</div>
          <small>{char.romaji}</small>
        </div>
      ) : (
        <div className="bg-indigo-200"></div>
      )
    )
  })

  return (
    <Layout>
      <div className="grid grid-cols-5 gap-4">{charGrid}</div>
    </Layout>
  )
}

export default Hiragama
