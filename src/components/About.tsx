import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import React from 'react'

const About: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">About</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="body1" align="left">
            若松滉太と申します。
            <br />
            大阪で社内SEとして働いています。
            <br />
          </Typography>
        </Box>
      </Box>
    </>
  )
}

export default About
