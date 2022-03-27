import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect } from 'react'

const Home: NextPage = () => {
  const [height, setHeight] = useState(NaN)
  const handleHeightChange = (e: any) => {
    setHeight(e.target.value)
  }
  const [weight, setWeight] = useState(NaN)
  const handleWeightChange = (e: any) => {
    setWeight(e.target.value)
  }
  const [bmi, setBmi] = useState(height + weight)

  useEffect(() => {
    setBmi(703 * weight / Math.pow(height, 2))
  }, [height, weight])
  

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>YOU A FAT ASS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <span className='text-5xl font-bold mb-10'>{bmi ? bmi.toFixed(2) : ''}</span>
        <input
          type="text"
          value={height ? height : ''}
          placeholder="height"
          onChange={handleHeightChange}
        ></input>
        <input
          type="text"
          value={weight ? weight : ''}
          placeholder="weight"
          onChange={handleWeightChange}
        ></input>
      </main>
    </div>
  )
}

export default Home
