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
        {/* For old IEs */}
        <link rel="shortcut icon" href="/favicon/favicon.ico" />

        {/* For new browsers - multisize ico  */}
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16 32x32"
          href="/favicon/favicon.ico"
          key={'multisize-favicon'}
        />

        {/* For iPad with high-resolution Retina display running iOS ≥ 7: */}
        <link
          rel="apple-touch-icon"
          sizes="152x152"
          href="/favicon/favicon-152-precomposed.png"
        />

        {/* For iPad with high-resolution Retina display running iOS ≤ 6: */}
        <link
          rel="apple-touch-icon"
          sizes="144x144"
          href="/favicon/favicon-144-precomposed.png"
        />

        {/* For iPhone with high-resolution Retina display running iOS ≥ 7: */}
        <link
          rel="apple-touch-icon"
          sizes="120x120"
          href="/favicon/favicon-120-precomposed.png"
        />

        {/* For iPhone with high-resolution Retina display running iOS ≤ 6: */}
        <link
          rel="apple-touch-icon"
          sizes="114x114"
          href="/favicon/favicon-114-precomposed.png"
        />

        {/* For iPhone 6+ */}
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/favicon-180-precomposed.png"
        />

        {/* For first- and second-generation iPad: */}
        <link
          rel="apple-touch-icon"
          sizes="72x72"
          href="/favicon/favicon-72-precomposed.png"
        />

        {/* For non-Retina iPhone, iPod Touch, and Android 2.1+ devices: */}
        <link rel="apple-touch-icon" sizes="57x57" href="/favicon/favicon-57.png" />

        {/* For IE10 Metro */}
        <meta name="msapplication-TileColor" content="#FFFFFF" />
        <meta name="msapplication-TileImage" content="favicon-144.png" />
        <meta name="theme-color" content="#ffffff" />

        {/* Chrome for Android */}
        <link rel="manifest" href="manifest.json" />
        <link
          rel="icon"
          sizes="192x192"
          href="/favicon/favicon-192.png"
          key={'chrome for android'}
        />
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
            <div
              className="flex w-full flex-row gap-1 text-bmi-lemon placeholder:text-bmi-lemon"
              id="height-inputs"
            >
              <div className="group form-control w-1/2">
                <label className="label">
                  <span className="text-center text-xs">Feet</span>
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  value={heightFeet ? String(heightFeet) : ''}
                  placeholder="feet"
                  className="input input-ghost appearance-none border-2 border-bmi-lemon bg-bmi-blue bg-opacity-80 text-center font-dela text-2xl placeholder:opacity-40"
                  onChange={handleHeightFeetChange}
                />
              </div>
              <div className="group form-control w-1/2">
                <label className="label">
                  <span className="text-center text-xs">Inches</span>
                </label>
                <input
                  type="text"
                  autoComplete="off"
                  value={heightInches ? String(heightInches) : ''}
                  placeholder="inches"
                  className="input input-ghost appearance-none border-2 border-bmi-lemon bg-bmi-blue bg-opacity-80 text-center font-dela text-2xl placeholder:opacity-40"
                  onChange={handleHeightInchesChange}
                />
              </div>
            </div>
            <div className="group form-control w-full text-bmi-lemon placeholder:text-bmi-lemon">
              <label className="label">
                <span className="text-center text-xs">Pounds</span>
              </label>
              <input
                type="text"
                autoComplete="off"
                value={weight ? String(weight) : ''}
                placeholder="weight"
                className="input input-ghost appearance-none border-2 border-bmi-lemon bg-bmi-blue bg-opacity-80 text-center font-dela text-2xl placeholder:opacity-40"
                onChange={handleWeightChange}
              />
            </div>
          </div>
        </div>

        {/* BMI stats */}
        <BmiStats />
      </main>
    </div>
  )
}

export default Home
