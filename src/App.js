import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ text, ...restProps }) => (
  <button {...restProps}>{text}</button>
)

const App = () => {
  const [counter, setCounter] = useState(0)

  const increment = () => setCounter((counter) => counter + 1)

  const setToZero = () => setCounter(0)
  return (
    <div>
      <Display counter={counter} />
      <Button onClick={increment} text="plus" />
      <Button onClick={setToZero} text="zero" />
    </div>
  )
}

export default App
