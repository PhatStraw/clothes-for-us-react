import React from 'react' 
import {Box, Input, Label} from 'theme-ui'

const Receiver = () => {
  return(
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Box
        as='form'
        // onSubmit={e => e}
      >
        <Label>First Name</Label>
          <Input 
            type='name'
            name='first name'
          />
      </Box>
    </Box>
  )
}

export default Receiver
