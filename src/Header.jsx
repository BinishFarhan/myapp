import React from 'react'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <>
        <ul className="NavBar">
            <Link to={"/"}><li>Home</li></Link>
            <Link to={"/About"}><li>About</li></Link>
            <Link to={"/Contact"}><li>Contact</li></Link>
        </ul>
    </>
  )
}