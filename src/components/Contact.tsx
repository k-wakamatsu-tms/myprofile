import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { makeStyles, styled } from '@mui/material/styles'
import Link from '@mui/material/Link'
import MailIcon from '@mui/icons-material/Mail'
import TwitterIcon from '@mui/icons-material/Twitter'
import GitHubIcon from '@mui/icons-material/GitHub'
import Avatar from '@mui/material/Avatar'
import { green, blue, purple } from '@mui/material/colors'

const CustomBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  '& > *': {
    margin: theme.spacing(1),
  },
}))
const CustomAvatarGreen = styled(Avatar)(({ theme }) => ({
  color: '#fff',
  backgroundColor: green[500],
}))
const CustomAvatarBlue = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
}))
const CustomAvatarPurple = styled(Avatar)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: purple[500],
}))

const Contact: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Contact</Typography>
        </Box>
        <CustomBox display="flex" justifyContent="center" p={1}>
          <Link href="mailto:k-wakamatsu@total-marriage.com" color="inherit">
            <CustomAvatarGreen>
              {/* 何のアイコンを使うかは各自お好みで（今回はメール、Twitter、GithHub） */}
              <MailIcon />
            </CustomAvatarGreen>
          </Link>
          {/* <Link href="#" color="inherit">
            <CustomAvatarBlue>
              <TwitterIcon />
            </CustomAvatarBlue>
          </Link> */}
          <Link href="https://github.com/k-wakamatsu-tms" color="inherit">
            <CustomAvatarPurple>
              <GitHubIcon />
            </CustomAvatarPurple>
          </Link>
        </CustomBox>
      </Box>
    </>
  )
}

export default Contact
