'use client'

import { useState, useEffect } from 'react'
import BmiStats from '../components/BmiStats'

export default function HomePage() {
  const [height, setHeight] = useState<number>(NaN)
  const [heightFeet, setHeightFeet] = useState<number>(0)
  const [heightInches, setHeightInches] = useState<number>(0)
  const [weight, setWeight] = useState<number>(NaN)
  const [bmi, setBmi] = useState<number>(+height + +weight)
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
