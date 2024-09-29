import useUpdatingClock from "../hooks/useUpdatingClock"
import { Button, Box } from "@mui/material"


function TimeButton() {
    const { hour, minutes, seconds, amPm } = useUpdatingClock()

  return (
    <Box>
      <Button
        style={{
          color: "red",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
          fontSize: "20px",
          marginTop: "20px",
        }}
      >
        {hour}:{minutes}:{seconds} {amPm}
      </Button>
    </Box>
  )
}

const Landing = () => {
  return(
  <TimeButton />
)
  
}

export default TimeButton
