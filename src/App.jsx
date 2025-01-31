import { evaluate } from 'mathjs'
import React , { useState } from 'react'
import './App.css'

const App = () => {
  const [input, setInput] = useState('')

  const handleInput = (clickedValue) => {
    setInput((prev) => prev + clickedValue)
  }
  const evaluateResult = () => {
    try {
      const result = evaluate(input)
      setInput(String(result))
    } catch (error) {
      setInput('Error')
    }
  }
  const clearInput = () => {
    setInput('')
  }
  return (
    <div className='clc'>
      <div className='input'>{input || ''}</div>
      <div className='btn'>
      {
        ['1', '2', '3', '-'].map((item) => (
          <button key={item} onClick={() => handleInput(item)} className='btn-row'>{item}</button>
        ))
      }
      </div>
      <div className='btn'>
      {
        ['4', '5', '6', '+'].map((item) => (
          <button key={item} onClick={() => handleInput(item)} className='btn-row'>{item}</button>
        ))
      }
     </div> 
     <div className='btn'>
      {
        ['7', '8', '9', '*'].map((item) => (
          <button  key={item} onClick={() => handleInput(item)} className='btn-row'>{item}</button>
        ))
      }
      </div>

      <div className='btn'>
        <button  onClick={() => handleInput('/')} className='btn-row1'>/</button>
        <button  onClick={() => handleInput('0')} className='btn-row1'>0</button>
        <button onClick={evaluateResult} className='btn-row1'>=</button>
        <button onClick={clearInput} className='btn-row1'>C</button>
      </div>
    </div>
  )
}

export default App
