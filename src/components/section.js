import React from 'react'
import {Link} from 'react-router-dom'
import { Box, Heading, Button } from 'theme-ui'

const Section = (props) => {
  return(
    <Box sx={{
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      margin: '20px'
    }}>
      <Heading sx={{ textAlign: 'center', width: '65%' }}>{props.heading}</Heading>
          
            <Button>
              <Link to={props.to} style={{textDecoration: 'none', color: '#fff'}}>
                {props.button} 
              </Link>
            </Button>
         
          
    </Box>
  )
}

export default Section
