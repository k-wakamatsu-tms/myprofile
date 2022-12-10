import React from 'react'
import Appbar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { styled } from '@mui/material/styles'

const CustomAnchorLink = styled(AnchorLink)(({ theme }) => ({
  textDecoration: 'none',
  color: 'inherit',
}))
const Navbar: React.FC = () => {
  return (
    <>
      <Appbar
        color="default"
        position="static"
        style={{ alignItems: 'center' }}
      >
        <Toolbar>
          {/* // href属性に飛ばしたい位置を指定 */}
          <CustomAnchorLink href="#about">
            <Button>About</Button>
          </CustomAnchorLink>
          <CustomAnchorLink href="#skills">
            <Button color="inherit">SKILLS</Button>
          </CustomAnchorLink>
          <CustomAnchorLink href="#works">
            <Button color="inherit">Works</Button>
          </CustomAnchorLink>
          <CustomAnchorLink href="#contact">
            <Button color="inherit">CONTACT</Button>
          </CustomAnchorLink>
        </Toolbar>
      </Appbar>
    </>
  )
}

export default Navbar
