import React, { useState } from 'react'
import style from './Afnan.module.css'


function Afnan() {

  const [friends, setFriends] = useState(["Afnan","Ali","Ebad","Jamil"])
  const [error, setError] = useState("")

  function checkFriends(event){
    setError("")
    friends.map((i)=>{
      if(i == event.target.value){
        setError("Already Exist")
      }
    })
  }

  return (
    <div>
        <input type='text' onBlur={checkFriends} />
        <p>{error}</p>
    </div>
  )
}

export default Afnan