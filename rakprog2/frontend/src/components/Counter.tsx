import { useState } from 'react'
import { Button, Typography, Box } from "@mui/material"

const Counter = () => {
  const [counter, setCounter] = useState<number>(0)

  const modifyCounter = (value: number) => setCounter((prevCounter) => prevCounter + value)

  return (
    <Box
      style={{
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <Typography variant="h1">{counter}</Typography>

      {[+1, +5, +50, -1, -5, -50].map(element => (
        <Button
          key={element}
          onClick={() => modifyCounter(element)}
          style={{ border: "1px solid" }}
        >
          {/* juhul kui elemendi suurus on suurem kui 0, tekib number nupule koos + märgiga */}
          sync {element > 0 ? `+${element}` : element}
        </Button>
      ))}

      <Button
        style={{ border: "1px solid" }}
        onClick={() => setTimeout(() => modifyCounter(1), 1000)}
      >
        async +1
      </Button>
    </Box>
  )
}

export default Counter
