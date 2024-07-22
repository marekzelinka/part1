import { useState } from 'react'

function App() {
  let name = 'Patrick'
  let age = 9

  let friends = ['Peter', 'Maya']

  return (
    <>
      <header>
        <h1>Greetings</h1>
      </header>
      <main>
        <StepCounter />
        <ValueCounter />
        <Hello2 />
        <Hello name="George" age={26} />
        <Hello name="Diasy" age={16} />
        <Hello name={name} age={age} />
        <Hello name="Maya" age={26 + 10} />
        <p>{friends}</p>
        <FriendList />
        <Hello name="Partick" age={9} />
        <Hello name="Samo" age={4} />
        <Hello name="Matej" age={5} />
        <Hello name="Ryan" age={42} />
        <Hello name="Michael" age={41} />
        <Hello name="Kent" age={38} />
      </main>
      <Footer />
    </>
  )
}

export default App

function StepCounter() {
  let [clicks, setClicks] = useState({ left: 0, right: 0 })

  return (
    <div>
      <h2>Step Counter Example</h2>
      <div>
        {clicks.left}
        <Button
          text="left"
          onClick={() =>
            setClicks((clicks) => ({ ...clicks, left: clicks.left + 1 }))
          }
        />
        <Button
          text="right"
          onClick={() =>
            setClicks((clicks) => ({ ...clicks, right: clicks.right + 1 }))
          }
        />
        {clicks.right}
      </div>
    </div>
  )
}

function ValueCounter() {
  let [counter, setCounter] = useState(0)

  console.log('rendering...', counter)

  let increaseByOne = () => setCounter((counter) => counter + 1)
  let decreaseByOne = () => setCounter((counter) => counter - 1)
  let setToZero = () => setCounter(0)

  return (
    <div>
      <h2>Value Counter Example</h2>
      <ValueCounterDisplay counter={counter} />
      <Button text="plus" onClick={increaseByOne} />
      <Button text="zero" onClick={setToZero} />
      <Button text="minus" onClick={decreaseByOne} />
    </div>
  )
}

function ValueCounterDisplay({ counter }) {
  return <div>{counter}</div>
}

function Button({ text, onClick }) {
  return (
    <button type="button" onClick={onClick}>
      {text}
    </button>
  )
}

function Hello2() {
  let now = new Date()
  let a = 10
  let b = 20

  console.log(now, a + b)

  return (
    <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} plus {b} is {a + b}
      </p>
    </div>
  )
}

function Hello({ name, age }) {
  let getBornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>
      <p>So you were probalby born in {getBornYear()}</p>
    </div>
  )
}

function FriendList() {
  let friends = [
    { name: 'Peter', age: 4 },
    { name: 'Maya', age: 10 },
  ]

  return (
    <ul>
      <li>
        {friends[0].name} - {friends[0].age}
      </li>
      <li>
        {friends[1].name} - {friends[1].age}
      </li>
    </ul>
  )
}

function Footer() {
  return (
    <footer>
      <p>
        Greeting app created by{' '}
        <a href="https://github.com/m-zelinka">m-zelinka</a>.
      </p>
    </footer>
  )
}
