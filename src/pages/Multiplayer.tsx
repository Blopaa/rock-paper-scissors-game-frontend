import React from 'react'
import {useParams} from "react-router-dom";


function Multiplayer() {

  const params = useParams()


  console.log(params);
  

  return (
    <div>
      Multiplayer 
    </div>
  )
}

export default Multiplayer; 