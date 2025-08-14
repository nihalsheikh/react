import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from "./components/Card"

function App() {
  const [count, setCount] = useState(0)

  const addValue = () => {
    setCount(count + 1)
  }

  const removeValue = () => {
    setCount(count - 1)
  }

  let person = {
    fname:"John",
    lname:"Doe",
    age:24,
    username:"johndoe"
  }

  let myArr = [1,2,3]

  return (
    <>
      <h1 className="bg-green-500 text-black p-4 rounded-2xl mb-4">Tailwind and Props</h1>

      <br />
      {/* Passing Props */}
      <Card
        tutor="hiteshchoudhary"
        myObj={person}
        arr={myArr}
      />
    </>
  )
}

export default App
