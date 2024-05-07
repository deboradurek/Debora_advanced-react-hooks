// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  // The 1st argument is called "state" - the current value of count
  // The 2nd argument is called "newState" - the value passed to setCount
  const [state, setState] = React.useReducer(
    (state, action) => ({
      ...state,
      ...(typeof action === 'function' ? action(state) : action),
    }),
    {count: initialCount},
  )

  const {count} = state

  const increment = () =>
    // setState accepts a function that receives the current state and returns a new state
    setState(currentState => ({count: currentState.count + step}))

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
