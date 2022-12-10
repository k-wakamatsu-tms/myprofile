import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem, { ListItemProps } from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import React from 'react'
import FolderIcon from '@mui/icons-material/Folder'
import ListItemText from '@mui/material/ListItemText'

const CustomList = styled(List)(({ theme }) => ({
  width: 770,
  maxWidth: '100%',
}))

function ListItemLink(props: ListItemProps<'a', { button?: true }>) {
  return <ListItem button component="a" {...props} />
}

const Works: React.FC = () => {
  return (
    <>
      <Box p={2}>
        <Box display="flex" justifyContent="center" p={1}>
          <Typography variant="h5">Works</Typography>
        </Box>
        <Box display="flex" justifyContent="center" p={1}>
          <CustomList>
            <ListItem>
              {/* // GitHubリポジトリなどのURLを貼る */}
              <ListItemLink href="#">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                {/* // 「primary」に作品名、「secondary」に説明文を書く */}
                <ListItemText primary="Work1" secondary="Work1です。" />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work2" secondary="Work2です。" />
              </ListItemLink>
            </ListItem>
            <ListItem>
              <ListItemLink href="#">
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary="Work3" secondary="Work3です。" />
              </ListItemLink>
            </ListItem>
          </CustomList>
        </Box>
      </Box>
    </>
  )
}

export default Works
