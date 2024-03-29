import React from 'react'
import bmiData from '../data/bmiData.json'

const BmiStats = () => {
  return (
    <>
      <div className="stats flex flex-wrap shadow sm:flex-none sm:flex-nowrap">
        {bmiData.map(({ name, range, color }) => (
          <div className="stat" key={name}>
            <div className="stat-title text-slate-900">{name}</div>
            <div className={`stat-value ${color}`}>{range}</div>
          </div>
        ))}
      </div>
      <p className="text-md tracking-wide text-bmi-lemon">
        {'Source: '}
        <a
          href="https://www.nhlbi.nih.gov/health/educational/lose_wt/BMI/bmicalc.htm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="text-bmi-yellow underline">
            National Heart, Lung, and Blood Institute
          </span>
        </a>
      </p>
    </>
  )
}

export default BmiStats
