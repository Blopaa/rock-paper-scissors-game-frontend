import React from 'react'
import {useHistory} from "react-router-dom"
export default function Home() {

  const history = useHistory()

  console.log(history)

  return (
    <main>
      <button onClick={() => history.push("/offline")}>Offline</button>
      <button onClick={() => history.push("/online")}>Online</button>
    </main>
  )
}
