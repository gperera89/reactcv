import * as React from 'react';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Toolbar from '@mui/material/Toolbar';
import PersonIcon from '@mui/icons-material/Person';
import SchoolIcon from '@mui/icons-material/School';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import PsychologyIcon from '@mui/icons-material/Psychology';
import WorkIcon from '@mui/icons-material/Work';
import Link from '@mui/material/Link';
const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
       <Link href='/' underline="hover" color="inherit"> 
        <ListItem button key='intro'>
            <ListItemIcon><PersonIcon /></ListItemIcon>
            <ListItemText primary="Introduction" />
        </ListItem>
        </Link>
    <Divider />
        <Link href='/experience' underline="hover" color="inherit"> 
        <ListItem button key='teaching'>
        <ListItemIcon><WorkIcon /></ListItemIcon>
            <ListItemText primary="Teaching Experience" />
          </ListItem>
        </Link>
        <Link href='/education' underline="hover" color="inherit">
          <ListItem button key='education'>
        <ListItemIcon><SchoolIcon /></ListItemIcon>
            <ListItemText primary="Education" />
          </ListItem>
        </Link>
        <Link href='/PD' underline="hover" color="inherit">
          <ListItem button key='develop'>
        <ListItemIcon><LightbulbIcon /></ListItemIcon>
            <ListItemText primary="Professional Development" />
          </ListItem>
        </Link>
        <Link href='/interest' underline="hover" color="inherit">
      <Divider />
        <ListItem button key='interests'>
        <ListItemIcon><PsychologyIcon /></ListItemIcon>
            <ListItemText primary="Interests" />
          </ListItem>
        </Link>
      </List>
    </div>
  );

  export default drawer