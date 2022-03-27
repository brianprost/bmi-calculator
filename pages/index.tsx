import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState, useEffect, useImperativeHandle } from 'react'

const Home: NextPage = () => {
  const [height, setHeight] = useState<Number>(NaN)
  const [heightFeet, setHeightFeet] = useState<Number>(0)
  const [heightInches, setHeightInches] = useState<Number>(0)
  const [weight, setWeight] = useState<Number>(NaN)

  const handleHeightFeetChange = (e: any) => {
    setHeightFeet(e.target.value)
  }

  const handleHeightInchesChange = (e: any) => {
    setHeightInches(e.target.value)
  }

  const handleWeightChange = (e: any) => {
    setWeight(e.target.value)
  }
  const [bmi, setBmi] = useState<Number>(+height + +weight)

  // set height
  useEffect(() => {
    setHeight(+heightFeet * 12 + +heightInches)
  }, [heightFeet, heightInches])

  // set BMI
  useEffect(() => {
    setBmi((703 * +weight) / Math.pow(+height, 2))
  }, [height, weight, heightFeet, heightInches])

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>YOU A FAT ASS</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center bg-emerald-600 px-20 text-center">
        <div className="bg-inherit-100 card w-96 shadow-xl">
          <figure>
            <h2 className="my-auto text-6xl font-bold text-amber-400">
              {height && weight ? bmi.toFixed(2) : 'BMI'}
            </h2>
          </figure>
          <div className="card-body">
            <div className="flex w-full flex-row gap-1" id="height-inputs">
              <input
                type="text"
                value={heightFeet ? String(heightFeet) : ''}
                placeholder="feet"
                className="w-1/2 text-center font-mono"
                onChange={handleHeightFeetChange}
              />
              <input
                type="text"
                value={heightInches ? String(heightInches) : ''}
                placeholder="inches"
                className="w-1/2 text-center font-mono"
                onChange={handleHeightInchesChange}
              />
            </div>
            <input
              type="text"
              value={weight ? String(weight) : ''}
              placeholder="weight"
              className="text-center font-mono"
              onChange={handleWeightChange}
            ></input>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
