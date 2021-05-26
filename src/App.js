import { useState } from 'react'

const Display = ({ counter }) => <div>{counter}</div>

const Button = ({ text, ...restProps }) => (
  <button {...restProps}>{text}</button>
)

const useCounter = () => {
  const [value, setValue] = useState(0)

  const increment = () => setValue((value) => value + 1)

  const decrement = () => setValue((value) => value - 1)

  const setToZero = () => setValue(0)

  return { value, increment, decrement, setToZero }
}

const App = () => {
  const counter = useCounter()

  return (
    <div>
      <Display counter={counter.value} />
      <Button onClick={counter.increment} text="plus" />
      <Button onClick={counter.decrement} text="minus" />
      <Button onClick={counter.setToZero} text="zero" />
    </div>
  )
}

export default App
