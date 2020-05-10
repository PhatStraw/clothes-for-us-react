import React from 'react'
import { Link } from 'react-router-dom'
import { Flex } from 'theme-ui'

const Nav = () => {
  return(
    <Flex 
        as="nav" 
        sx={{
          width: '100%', 
          position: 'fixed', 
          overflow: 'hidden', 
          top: '0',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'spa'
        }}
      >
        <Link to='/' style={{margin: '10px'}}>Home</Link>
        <Link to='/receiver' style={{margin: '10px'}}>SIGN UP FOR SUPPORT</Link>
        <Link to='/sender' style={{margin: '10px'}}>DONATE</Link>
    </Flex>
  )
}

export default Nav
