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
        <Hello2 />
        <Hello name="George" />
        <Hello name="Diasy" />
        <Hello name={name} age={age} />
        <Hello name="Maya" age={26 + 10} />
        <p>{friends}</p>
        <FriendList />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
        <Hello />
      </main>
      <Footer />
    </>
  )
}

export default App

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

function Hello(props) {
  console.log(props)

  return (
    <div>
      <p>
        Hello {props.name ?? '[name]'}, you are {props.age ?? '[age]'} years old
      </p>
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
