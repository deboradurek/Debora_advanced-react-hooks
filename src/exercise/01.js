// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

const countReducer = (state, action) => {
  const {count} = state
  const {type, step} = action

  switch (type) {
    case 'INCREMENT': {
      return {...state, count: count + step}
    }
    default: {
      throw new Error(`Unsupported action type: ${type}`)
    }
  }
}

function Counter({initialCount = 0, step = 1}) {
  /**
   * `useReducer` returns an array with exactly two values:
   * - The current state. During the first render, it’s set to init(initialArg) or initialArg (if there’s no init).
   * - The dispatch function that lets you update the state to a different value and trigger a re-render.
   */
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })

  const {count} = state

  const increment = () => dispatch({type: 'INCREMENT', step})

  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
