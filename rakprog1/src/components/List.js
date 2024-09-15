import React from 'react'

const MyProfile = () => {
  const name = 'Rain Erik'
  const hobbies = ['Arvutimängud', 'Jõusaal', 'Filmid', 'Fotograafia']
  const contact = {
    email: 'rain@erik.com',
    phone: '+372123123123',
  }

  const handleButtonClick = () => {
    alert('Kontaktinfo leiab ÕIS süsteemist')
  }

  return (
    <div style={{padding: '20px', fontFamily: 'Arial, sans-serif'}}>
      <h1>{name}</h1>

      <section>
        <h2>Minust</h2>
        <div style={{textAlign: "center"}}>
          {hobbies.map((hobby, index) => (
            <li key={index} style={{margin: "4px", display: "flex", flexDirection: "column"}}>{hobby}</li>
          ))}
        </div>
      </section>

      <section>
        <h2>Kontakt</h2>
        <p>
          Email: <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </p>
        <p>
          Telefon: <a href={`tel:${contact.phone}`}>{contact.phone}</a>
        </p>
      </section>

      <button
        onClick={handleButtonClick}
        style={{
          backgroundColor: '#007bff',
          color: '#fff',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          marginTop: '20px',
          borderRadius: '5px',
        }}>
        Tõmba sabast!
      </button>
    </div>
  )
}

export default MyProfile
