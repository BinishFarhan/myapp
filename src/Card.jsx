import React, { useContext } from 'react'
import { MyContext } from './MyContext'

export const MyCard = () => {
    const context = useContext(MyContext)
  return (
    <div>My name is {context}</div>
  )
}
