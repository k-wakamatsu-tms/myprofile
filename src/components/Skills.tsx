import React from 'react'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

const CustomCard = styled(Card)(({ theme }) => ({
  width: 730,
  maxWidth: '100%',
}))

const Skills: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Skills</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <CustomCard>
            <CardContent>
              <Typography variant="h6">言語</Typography>
              <Typography color="textSecondary">
                VB / PHP / C# / Python / Javascript / Dart
              </Typography>
            </CardContent>
          </CustomCard>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <CustomCard>
            <CardContent>
              <Typography variant="h6">フレームワーク</Typography>
              <Typography color="textSecondary">
                .Net / Flutter / Django
              </Typography>
            </CardContent>
          </CustomCard>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <CustomCard>
            <CardContent>
              <Typography variant="h6">データベース</Typography>
              <Typography color="textSecondary">SQL Server / MySQL</Typography>
            </CardContent>
          </CustomCard>
        </Box>
        {/* <Box display="flex" justifyContent="center" p={1}>
          <CustomCard>
            <CardContent>
              <Typography variant="h6">AWS</Typography>
              <Typography color="textSecondary">
              </Typography>
            </CardContent>
          </CustomCard>
        </Box> */}
      </Box>
    </>
  )
}

export default Skills
