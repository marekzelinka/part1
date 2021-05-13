import { useState } from 'react'

const History = ({ allClicks }) =>
  allClicks.length === 0 ? (
    <div>the app is used by pressing the buttons</div>
  ) : (
    <div>button press history: {allClicks.join(' ')}</div>
  )

const Button = ({ text, ...restProps }) => (
  <button {...restProps}>{text}</button>
)

const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setAllClicks] = useState([])

  const handleLeftClick = () => {
    setLeft((left) => left + 1)
    setAllClicks((allClicks) => allClicks.concat('L'))
  }

  const handleRightClick = () => {
    setRight((right) => right + 1)
    setAllClicks((allClicks) => allClicks.concat('R'))
  }

  return (
    <div>
      {left}
      <Button onClick={handleLeftClick} text="left" />
      <Button onClick={handleRightClick} text="right" />
      {right}
      <History allClicks={allClicks} />
    </div>
  )
}

export default App
