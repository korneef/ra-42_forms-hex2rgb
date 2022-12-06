import React, { useState } from "react"
import converter from "../functions/converter"

export default function Hex2RGB() {
  const [input, setInput] = useState({
    name: '',
    color: converter()
  })
  
  const handleChange = ({ target }) => {
    const { name, value } = target;
    const color = converter(value);
    setInput(prevInput => ({...prevInput, [name]: value, color: color }))
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
  }

  return (
    <div className="converter" style={{backgroundColor: input.color}}>
      <form className="converter__form" onSubmit={handleSubmit}>
        <input
          className="converter__input"
          placeholder="#000000"
          name='name'
          type="text"
          value={input.name}
          onChange={handleChange} />
      </form>
      <div className="converter__result"><div>{input.color}</div></div>
    </div>
  )
}