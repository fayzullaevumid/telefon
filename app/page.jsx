import React from 'react'
import Navbar from './Navbar/navbar'
import Footer from './Footer/footer'
import Section from './Section/section'
import header from './Fetch/Fetch'
import Fetch from './Fetch/Fetch'

const page = () => {
  return (
    <div>
      <Navbar/>
      <Fetch/>
      <Section/>
      <Footer/>
    </div>
  )
}

export default page