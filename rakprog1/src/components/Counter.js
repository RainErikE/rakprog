import React, {useState} from 'react'

const Counter = () => {
  const [counter, setCounter] = useState(0)

  const modifyCounter = (value) => setCounter((prevCounter) => prevCounter + value)

  return (
    <>
      <h1>{counter}</h1>

      {[+1, +5, +50, -1, -5, -50].map(element => (
          <button key={element} onClick={() => modifyCounter(element)}>
              {/* juhul kui elemendi suurus on suurem kui 0, tekib number nupule koos + märgiga */}
          sync {element > 0 ? `+${element}` : element}
        </button>
      ))}

      <button onClick={() => setTimeout(() => modifyCounter(1), 1000)}>
        async +1
      </button>
    </>
  )
}

export default Counter
