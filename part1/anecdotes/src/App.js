import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0, 0])

  const handleClick = () => {
    setSelected(selected === anecdotes.length - 1 ? 0 : selected + 1)
  }

  const handleVote = () => {
    setPoints(
      [...points.slice(0, selected),
      ...[points[selected] += 1],
      ...points.slice(selected + 1)]
    )
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>

      <p>{anecdotes[selected]} {points[selected]} Votes</p>

      <button onClick={handleVote}>Vote</button>

      <button onClick={handleClick}>Next Anecdote</button>

      <h1>Anecdote with most votes</h1>

      <p>{anecdotes[points.indexOf(Math.max(...points))]} {points[points.indexOf(Math.max(...points))]} Votes</p>
    </div>
  )
}

export default App
