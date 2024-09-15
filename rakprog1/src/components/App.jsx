import useUpdatingClock from 'hooks/useUpdatingClock'

import Counter from "./Counter"

function MyButton() {
  return <button style={{color: "red"}}>I'm a button</button>
}

export default function App() {
  const { hour, minutes, seconds, amPm } = useUpdatingClock()
  
  

  return (
    <div className="df flex-col vh-100">
      <header className="pv24 bg-gold black-80 tc">
        <h1 className="mt0 mb0">Create New App</h1>
        <div>By The Qodesmith</div>
      </header>

      <section className="flex-grow-1 bg-black-80 fw4 white-80 tc pt24">

        <div className="pa16 f-1-5em">
          {hour}:{minutes}:{seconds}
          <span className="f-initial pl4">{amPm}</span>
        </div>
        <div>
          <MyButton />
        </div>
        <div><Counter /></div>
      </section>
    </div>
  )
}
