import React from 'react'
import { Box } from 'theme-ui'
import Section from '../components/section'

const Home = () => {
  return (
    <Box
      sx={{
        width: '100vw',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          paddingTop: '34px',
          '@media screen and (min-width: 42em)':{
            display: 'flex',
            flexDirection: 'row'
          }
        }}
      >
        <Section heading={'Get To Know Us'} button={'About Us'} to={'/about'}/>
        <Section heading={'Gain Support From Those Who Care'} button={'Learn More'} to={'/receiver/signup'}/>
        <Section heading={'Donate What You Can'} button={'Donate'} to={'/donate'}/>
      </Box>
    </Box>
  )
}

export default Home
