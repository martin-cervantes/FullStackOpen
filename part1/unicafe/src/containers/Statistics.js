import React from 'react';

import StatisticLine from '../components/StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  const total = good + neutral + bad;

  const average = (good - bad) / total;

  const positive = good * 100 / total;

  if (total === 0)
    return <div><h1>Statistics</h1><p>No feedback given</p></div>

  return (
    <div>
      <h1>Statistics</h1>

      <table>
        <tbody>
          <StatisticLine text={"Good"} value={good} />
          <StatisticLine text={"Neutral"} value={neutral} />
          <StatisticLine text={"Bad"} value={bad} />
          <StatisticLine text={"All"} value={total} />
          <StatisticLine text={"Average"} value={average} />
          <StatisticLine text={"Positive"} value={positive} />
        </tbody>
      </table>
    </div>
  )
}

export default Statistics;
