import React from 'react'
import './styles.css'

const InputField = () => {
  return (
    <form className='input'>
      <input type='input' className= 'input-box' placeholder="Enter a task" ></input>
      <button className='input-submit' type='submit'>Add</button>
    </form>
  )
}

export default InputField
