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

const Content = ({ part1, part2, part3 }) => {
  return (
    <div>
      <Part data={part1} />
      <Part data={part2} />
      <Part data={part3} />
    </div>
  )
}

const Total = ({ exercises1, exercises2, exercises3 }) => {
  return (
    <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
  )
}

const App = () => {
  const course = 'Half Stack application development';

  const part1 = {
    name: 'Fundamentals of React',
    number: 10
  };

  const part2 = {
    name: 'Using props to pass data',
    number: 7
  };

  const part3 = {
    name: 'State of a component',
    number: 14
  };

  return (
    <div>
      <Header course={course} />

      <Content
        part1={part1}
        part2={part2}
        part3={part3}
      />

      <Total
        exercises1={part1.number}
        exercises2={part2.number}
        exercises3={part3.number}
      />
    </div>
  )
}

export default App
