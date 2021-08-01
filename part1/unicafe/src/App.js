import React, { useState } from 'react'

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const average = (good - bad) / total;

  const positive = good * 100 / total;

  if (total === 0)
    return <div><h1>Statistics</h1><p>No feedback given</p></div>

  return (
    <div>
      <h1>Statistics</h1>

      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All: {total}</p>
      <p>Average: {average}</p>
      <p>Positive: {positive}%</p>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGood = () => {
    setGood(good + 1);
  }

  const handleNeutral = () => {
    setNeutral(neutral + 1);
  }

  const handleBad = () => {
    setBad(bad + 1);
  }

  return (
    <div>
      <h1>Give feedback</h1>

      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </div>
  )
}

export default App
