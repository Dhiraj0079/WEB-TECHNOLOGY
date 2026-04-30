import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import StudentInfo from './StudentInfo'

function App() {
  const [count, setCount] = useState(0)
  const student=[
    {name:"Dhiraj",age:"21",course:"AIML"},
    {name:"Pratik",age:"21",course:"AIML"}
  ]

  return (
    <>
      <StudentInfo studentList={student}></StudentInfo>
    </>
  )
}

export default App
