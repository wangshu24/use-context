import React, {useState, useContext} from 'react'
import {ThemeContext} from './App'

export default function Counter({count}) {

const [state,setState] = useState({count});
const theme = useContext(ThemeContext);

console.log(ThemeContext);

  return (
    <div>
        Counter
        <button theme={theme.backgroundColor} onClick={()=>{setState(prevCount=>{return {count: prevCount.count -1}})}}>-</button>
            {state.count}
        <button theme={theme} onClick={()=>{setState(prevCount=>{return {count: prevCount.count +1}})}}>+</button>
    </div>
  )
}
