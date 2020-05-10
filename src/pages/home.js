import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Box, Heading, Button } from 'theme-ui'
import Nav from '../components/nav'
const Home = () => {
  const [redirect, setRedirect] = useState()
  const renderRedirect = () => {
    if(redirect){
      return <Redirect to='/about' />
    }
  }
  return (
    <Box sx={{
      height: '100vh',
      width: '100vw',
    }}>
      <Nav />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}>
        {renderRedirect()}
        <Heading sx={{textAlign: 'center', }}>Get To Know Us</Heading>
        <Button 
          sx={{width: '50%'}}
          onClick={(e) => setRedirect(true)}>About Us</Button>
      </Box>
    </Box>
  )
}

export default Home
