import React from 'react'

const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ data }) => {
  const { name, number } = data;

  return (
    <p>
      {name} {number}
    </p>
  )
}

const Content = ({ parts }) => {
  return (
    <div>
      { parts.map(part => <Part data={part} />) }
    </div>
  )
}

const Total = ({ parts }) => {
  return (
    <p>Number of exercises { parts.reduce((t, p) => t + p.number, 0) }</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      number: 10
    },
    {
      name: 'Using props to pass data',
      number: 7
    },
    {
      name: 'State of a component',
      number: 14
    }
  ];

  return (
    <div>
      <Header course={course} />

      <Content parts={parts} />

      <Total parts={parts} />
    </div>
  )
}

export default App
