import { Box, Stack, List, Typography, Button, Link } from "@mui/material"
const MyProfile = () => {
  const profileName = "Rain Erik"
  const hobbies = ['Arvutimängud', 'Jõusaal', 'Filmid', 'Fotograafia']
  const contact = {
    email: 'rain@erik.com',
    phone: '+372123123123',
  }

  const handleButtonClick = () => {
    console.log("Profile Name:", profileName)
    console.log("Hobbies:", hobbies)
    console.log("Contact Info:", contact)
    alert('Kontaktinfo leiab ÕIS süsteemist')
  }

  return (
    <Box style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <Stack
        style={{ alignItems: "center", textAlign: "center", margin: "10px" }}
      >
        <Typography
          variant="h4"
          style={{ textDecoration: "underline" }}
        >
          Minust
        </Typography>
        {hobbies.map((hobby, index) => (
          <List
            key={index}
            style={{
              margin: "4px",
              display: "flex",
              flexDirection: "column",
            }}
          >
            {hobby}
          </List>
        ))}
      </Stack>

      <Stack
        style={{ alignItems: "center", textAlign: "center", padding: "20px" }}
      >
        <Typography
          variant="h4"
          style={{ padding: "10px" }}
        >
          Kontakt
        </Typography>
        <Typography style={{ padding: "10px" }}>
          Email: <Link href={`mailto:${contact.email}`}>{contact.email}</Link>
        </Typography>
        <Typography style={{ padding: "10px" }}>
          Telefon: <Link href={`tel:${contact.phone}`}>{contact.phone}</Link>
        </Typography>
      </Stack>

      <Button
        onClick={handleButtonClick}
        style={{
          backgroundColor: "#007bff",
          color: "#fff",
          padding: "20px",
          border: "none",
          cursor: "pointer",
          marginTop: "20px",
          position: "absolute",
          left: "50%",
          transform: "translateX(-50%)",
          textAlign: "center",
        }}
      >
        Tõmba sabast!
      </Button>
    </Box>
  )
}

export default MyProfile
