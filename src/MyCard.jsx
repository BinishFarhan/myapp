import React from 'react'
import Details from './Details'

function MyCard({name}) {
    // console.log(name)
  return (
    <Details text={name} number={2}/>

  )
}

export default MyCard