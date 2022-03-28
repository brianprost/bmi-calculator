import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import BmiStats from '../components/BmiStats'

const Home: NextPage = () => {
  const [height, setHeight] = useState<Number>(NaN)
  const [heightFeet, setHeightFeet] = useState<Number>(0)
  const [heightInches, setHeightInches] = useState<Number>(0)
  const [weight, setWeight] = useState<Number>(NaN)
  const [bmi, setBmi] = useState<Number>(+height + +weight)
  const [bmiRangeColor, setBmiRangeColor] = useState<String>('')

  const handleHeightFeetChange = (e: any) => {
    setHeightFeet(e.target.value)
  }

  const handleHeightInchesChange = (e: any) => {
    setHeightInches(e.target.value)
  }

  const handleWeightChange = (e: any) => {
    setWeight(e.target.value)
  }

  // set height
  useEffect(() => {
    setHeight(+heightFeet * 12 + +heightInches)
  }, [heightFeet, heightInches])

  // set BMI
  useEffect(() => {
    setBmi((703 * +weight) / Math.pow(+height, 2))
  }, [height, weight])

  // set BMI color
  useEffect(() => {
    let bmiColor: string
    {
      0 < bmi && bmi < 18.5
        ? (bmiColor = `text-blue-300`)
        : bmi < 25
        ? (bmiColor = `text-bmi-green`)
        : bmi < 30
        ? (bmiColor = `text-bmi-red`)
        : bmi > 30
        ? (bmiColor = `text-red-800`)
        : (bmiColor = `text-white`)
    }
    setBmiRangeColor(bmiColor)
  }, [bmi])

  return (
    <div className="flex min-h-screen flex-col items-center">
      <Head>
        <title>BMI Calculator</title>
        <meta name="robots" content="noindex" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-evenly bg-bmi-blue px-20 text-center font-dela">
        <div className="bg-inherit-100 card w-96 shadow-xl">
          <figure>
            <h2
              className={`my-auto text-8xl font-bold ${bmiRangeColor} drop-shadow-md`}
            >
              {height && weight ? bmi.toFixed(1) : 'BMI'}
            </h2>
          </figure>
          <div className="card-body">
            <div className="flex w-full flex-row gap-1" id="height-inputs">
              <input
                type="text"
                autoComplete="off"
                value={heightFeet ? String(heightFeet) : ''}
                placeholder="feet"
                className="input input-ghost w-1/2 appearance-none bg-bmi-blue bg-opacity-80 text-center font-dela text-2xl text-bmi-lemon placeholder:text-bmi-lemon focus:outline focus:outline-bmi-lemon"
                onChange={handleHeightFeetChange}
              />
              <input
                type="text"
                autoComplete="off"
                value={heightInches ? String(heightInches) : ''}
                placeholder="inches"
                className="input input-ghost w-1/2 appearance-none bg-bmi-blue bg-opacity-80 text-center font-dela text-2xl text-bmi-lemon placeholder:text-bmi-lemon placeholder:opacity-70 focus:outline focus:outline-bmi-lemon"
                onChange={handleHeightInchesChange}
              />
            </div>
            <input
              type="text"
              autoComplete="off"
              value={weight ? String(weight) : ''}
              placeholder="weight"
              className="input input-ghost appearance-none bg-bmi-blue bg-opacity-80 text-center font-dela text-2xl text-bmi-lemon placeholder:text-bmi-lemon placeholder:opacity-70 focus:outline focus:outline-bmi-lemon"
              onChange={handleWeightChange}
            ></input>
          </div>
        </div>

        {/* BMI stats */}
        <BmiStats />
      </main>
    </div>
  )
}

export default Home
