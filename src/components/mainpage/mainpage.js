import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
import {BsChevronLeft} from 'react-icons/bs';
import {BsChevronRight} from 'react-icons/bs';
import {GiSoundWaves} from 'react-icons/gi';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import InboxIcon from '@material-ui/icons/MoveToInbox';
import "./mainpage.css";
const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function PersistentDrawerLeft() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
       <BsChevronRight
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide) }
          >
            
          </BsChevronRight>
      </AppBar>
    

      <Drawer
       
        variant="persistent"
        anchor="left"
        open={open}
       
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <BsChevronLeft /> : <BsChevronRight />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Open Trades'].map((text, index) => (
            <ListItem button key={text} style={{color:'#9AC802', fontSize:'12px'}}>
              <ListItemIcon style={{color:'#9AC802' , fontSize:'20px'}}>{index % 2 === 0 ? <GiSoundWaves /> : ''}</ListItemIcon>
              <ListItemText primary={text} style={{color:'#9AC802', fontSize:'12px'}} />
              <BsChevronRight />
            </ListItem>
          ))}
          <div className="makeflex-des">
              <div>Trade in porgress</div>
              <div>closest outcomes</div>
          </div>
          <div className="makeflex-de">
              <div>15</div>
              <div style={{marginLeft:'40px'}}>25 Min 30S</div>
          </div>
        </List>
        <Divider />
        <List>
          {['Trading History'].map((text, index) => (
            <ListItem button key={text} style={{color:'#9AC802', fontSize:'12px'}}>
              <ListItemIcon style={{color:'#9AC802' , fontSize:'20px'}}>{index % 2 === 0 ? <GiSoundWaves /> : ''}</ListItemIcon>
              <ListItemText primary={text} style={{color:'#9AC802', fontSize:'12px'}} />
              <BsChevronRight />
            </ListItem>
          ))}
          <div className="makeflex-des">
              <div>Last Day</div>
              <div><button className="week">Week</button></div>
              <div>Month</div>
              <div>All</div>
          </div>
          <div className="makeflex-d">
              <div>Total Trade</div>
              <div className="profit">Profit</div>
          </div>
          <div className="makeflex-de">
              <div>15</div>
              <div className="percentage">+21.5 %</div>
          </div>
        </List>
        <br></br>
        <br></br>
        <br></br>
        <Divider style={{color:'white'}}/>


        <List>
          {['Trading Wallet'].map((text, index) => (
            <ListItem button key={text} style={{color:'#9AC802', fontSize:'12px'}}>
              <ListItemIcon style={{color:'#9AC802' , fontSize:'20px'}}>{index % 2 === 0 ? <GiSoundWaves /> : ''}</ListItemIcon>
              <ListItemText primary={text} style={{color:'#9AC802', fontSize:'12px'}} />
              <BsChevronRight />
            </ListItem>
          ))}
<p className="trade">Trading</p>

<div className="amount">
    <div>$ 34,750.0</div>
    <div><button className="am-btn">Top Up</button></div>
</div>

<p className="trade">Holding</p>

<div className="amount">
    <div>$ 4,750.0</div>
    <div><button className="am-bt">Buy DUI</button></div>
</div>
          </List>
      </Drawer>










      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum
          facilisis leo vel. Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
          gravida rutrum quisque non tellus. Convallis convallis tellus id interdum velit laoreet id
          donec ultrices. Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
          adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra nibh cras.
          Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo quis
          imperdiet massa tincidunt. Cras tincidunt lobortis feugiat vivamus at augue. At augue eget
          arcu dictum varius duis at consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem
          donec massa sapien faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla
          facilisi etiam dignissim diam. Pulvinar elementum integer enim neque volutpat ac
          tincidunt. Ornare suspendisse sed nisi lacus sed viverra tellus. Purus sit amet volutpat
          consequat mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis risus sed
          vulputate odio. Morbi tincidunt ornare massa eget egestas purus viverra accumsan in. In
          hendrerit gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem et
          tortor. Habitant morbi tristique senectus et. Adipiscing elit duis tristique sollicitudin
          nibh sit. Ornare aenean euismod elementum nisi quis eleifend. Commodo viverra maecenas
          accumsan lacus vel facilisis. Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
      </main>
    </div>
  );
}