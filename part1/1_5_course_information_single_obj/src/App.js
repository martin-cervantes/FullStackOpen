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
  const course = {
      name: 'Half Stack application development',
      parts: [
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
    ]
  }

  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default App
