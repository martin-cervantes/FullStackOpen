const Header = ({ course }) => {
  return (
    <h1>{course}</h1>
  )
}

const Part = ({ data }) => {
  const { name, exercises } = data;

  return (
    <p>
      {name} {exercises}
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
  const total = parts.reduce((t, p) => t + p.exercises, 0);

  return (
    <strong>Total of exercises { total }</strong>
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course.name} />

      <Content parts={course.parts} />

      <Total parts={course.parts} />
    </div>
  )
}

export default Course
