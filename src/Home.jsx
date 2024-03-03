
import React from 'react'
import { Link } from 'react-router-dom'
import { Header } from './Header'
import { Card } from 'antd'
import { MyCard } from './Card'

export const Home = () => {
  return (
    <>
    <Header />
    <MyCard />
    </>
  )
}
