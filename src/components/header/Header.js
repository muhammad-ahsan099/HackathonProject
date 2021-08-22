import React from 'react';
import { alpha, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';

import MoreIcon from '@material-ui/icons/MoreVert';

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter'
import YoutubeIcon from '@material-ui/icons/YouTube'
import HomeIcon from '@material-ui/icons/Home';
import { Link } from 'react-router-dom';



const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
      color: 'black'
    },
    root_btn: {
        '& > *': {
          margin: theme.spacing(1),
        },
      }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
}));

export default function Header() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="secondary">
            <InstagramIcon  style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }}  />
          </Badge>
        </IconButton>
        <p>Instagram</p>
      </MenuItem>
      <MenuItem>
        <IconButton aria-label="show 11 new notifications" color="inherit">
          <Badge badgeContent={11} color="secondary">
            <FacebookIcon  style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }}   />
          </Badge>
        </IconButton>
        <p>Facebook</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <TwitterIcon style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
        </IconButton>
        <p>Twitter</p>
      </MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" style={{backgroundColor: '#fff'}}>
        <Toolbar>
        <Link to='/'>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <HomeIcon style={{color: 'black'}} />
          </IconButton>
          </Link>
          <Typography className={classes.title} variant="h6" noWrap>
            Ta-Series
          </Typography>
          
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="secondary">
                <FacebookIcon style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
              </Badge>
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <Badge badgeContent={17} color="secondary">
                <InstagramIcon style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <TwitterIcon style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
            </IconButton>
            <IconButton
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              color="inherit"
            >
              <YoutubeIcon style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
            </IconButton>
            <div >
            <Link to='/signin' style={{textDecoration: 'none'}} >
            <Button variant="contained"  style={{marginLeft:18  }} >Login</Button>
            </Link>
            </div>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreIcon   style={{color: 'black'}} />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}







// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import FacebookIcon from '@material-ui/icons/Facebook';
// import InstagramIcon from '@material-ui/icons/Instagram';
// import TwitterIcon from '@material-ui/icons/Twitter'
// import MessageIcon from '@material-ui/icons/Message';
// import logo from '../../assets/images/logo.png';



// function Header() {



//     return (
//         <div>
//             <div>
//                 <AppBar >
//                     <Toolbar position="static" style={{ backgroundColor: "#fff" }}>

//                         <div style={{  display: 'flex',  justifyContent: 'center'}}>
//                             <div  style={{display: 'flex'}} >
//                             <img style={{ backgroundColor: "#fff", width: 40, height: 40 }} src={logo} alt="Logo Image" />
//                             <Typography style={{color: 'black'}} variant="h6" noWrap>
//                                 Ta-Series
//                             </Typography>
//                             </div>

//                             <div >
//                                 <FacebookIcon   style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
//                                 <InstagramIcon   style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
//                                 <TwitterIcon   style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
//                                 <MessageIcon   style={{ backgroundColor: 'white' ,  color: 'black' , borderRadius: '50%' }} />
//                             </div>

//                         </div>
//                     </Toolbar>
//                 </AppBar>
//             </div>




//         </div>
//     )
// }

// export default Header;










