import React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Avatar from '@mui/material/Avatar'
import Typography from '@mui/material/Typography'

import ImageFile from '../static/images/my_avatar.jpg'

// const useStyles = makeStyles((theme) => ({
//   large: { width: theme.sapacing(30), height: theme.sapacing(30) },
// }))

const CustomAvatar = styled(Avatar)(({ theme }) => ({
  width: theme.spacing(30),
  height: theme.spacing(30),
}))

const MyAvatar: React.FC = () => {
  //   const classes = useStyles()

  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <CustomAvatar alt="Taro Tanaka" src={ImageFile} />
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="h5">Kouta Wakamatsu</Typography>
      </Box>
      <Box display="flex" justifyContent="center" p={1}>
        <Typography variant="body1">
          In-house System Engineer（Backend / MobileApp）
        </Typography>
      </Box>
    </>
  )
}
export default MyAvatar
