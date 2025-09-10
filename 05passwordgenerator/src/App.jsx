import { useState, useCallback, useEffect, useRef } from 'react'
import copy from "./assets/copy.svg"
import change from "./assets/change.svg"



function App() {
  // inital or default password length is set to 8
  const [length, setLength] = useState(8)

  // number allowed in the password
  const [numbersAllowed, setNumbersAllowed] = useState(true)

  // special characters/symbols in the password
  const [charAllowed, setCharAllowed] = useState(true)

  // password text in the field
  const [password, setPassword] = useState("")

  // useRef Hook
  const passwordRef = useRef(null)

  // Passsword Generator
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvexyz"

    if (numbersAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()-_=+[]{}\\|;:\'\",<.>/?`~"

    // Now making a random password
    for (let i=1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)
    }

    setPassword(pass)

  }, [length, numbersAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numbersAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1 className="text-center text-4xl text-white mt-20">PASSWORD GENERATOR</h1>

      <div className="w-full max-w-max mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800 text-3xl">
        <h2 className="text-white text-center my-3 text-2xl">Generate a new password</h2>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
          <input
            type="text"
            value={password}
            className="outline-none w-full py-1 px-3 bg-white"
            placeholder="Password"
            readOnly
            ref={passwordRef}
          />
          {/* In case i want to make a refresh password button */}
          {/* <img src={change} alt="Refresh" width={60} height={60} className="bg-red-500 cursor-pointer" /> */}
          <button
            className="outline-none bg-blue-700 text-white px-7 py-3 shrink-0 flex cursor-pointer"
            onClick={copyPasswordToClipboard}
          >
            Copy&nbsp;<img src={copy} alt="Copy text" width={40} height={40}/>
          </button>
        </div>

        <div className="flex text-sm gap-x-2 justify-between">
          {/* Length Slider */}
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={8}
              max={25}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {setLength(e.target.value)}}

              img={change}
              alt="Change password"
            />
            <label className="text-xl">Length: ({length})</label>
          </div>

          {/* Numbers Allowed */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={numbersAllowed}
              id="numberInput"
              onChange={() => {
                setNumbersAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="numberInput" className="text-xl">Numbers</label>
          </div>

          {/* Special Characters Allowed */}
          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charAllowed}
              id="numberInput"
              onChange={() => {
                setCharAllowed((prev) => !prev);
              }}
              className="cursor-pointer"
            />
            <label htmlFor="charInput" className="text-xl">Characters</label>
          </div>

        </div>

      </div>
    </>
  )
}

export default App
