import React from 'react'
import { Link } from 'react-router-dom'
import { Flex, Box, MenuButton } from 'theme-ui'

const Nav = () => {
  return(
    <Box>
      {/* <MenuButton 
        aria-label='Toggle Menu'
        sx={{
          '@media screen and (max-width: 1200px)': {
              display: 'hidden'
          }
        }}
        
      /> */}
      <Flex 
          as="nav" 
          sx={{
            width: '100%', 
            position: 'fixed', 
            overflow: 'hidden', 
            top: '0',
            flexDirection: 'row',
            display: 'visible',
            // '@media screen and (max-width: 991px)': {
            //   display: 'hidden'
            // }
          }}
        >
          <Link to='/' style={{margin: '10px'}}>Home</Link>
          <Link to='/receiver' style={{margin: '10px'}}>SIGN UP FOR SUPPORT</Link>
          <Link to='/sender' style={{margin: '10px'}}>DONATE</Link>
      </Flex>
    </Box>
    
  )
}

export default Nav
