
import './Post.css';
import { useDispatch } from 'react-redux';
import { doLogout } from '../../redux/actions/AuthAction'
import { UsePost } from './UsePost';

import { Link } from 'react-router-dom';
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import PhotoCamera from '@material-ui/icons/PhotoCamera';



import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


import { makeStyles, withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import NativeSelect from '@material-ui/core/NativeSelect';
import InputBase from '@material-ui/core/InputBase';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';





const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(2),
        },
    },
    root1: {
        '& > *': {
            margin: theme.spacing(1),
            width: '30ch',
        },
    },
    root_button: {
        '& > *': {
            margin: theme.spacing(1),
        },
        root_submitbutton: {
            margin: theme.spacing(4),
        }
    },
    button: {
        margin: theme.spacing(1),
    },
    input_Btn: {
        display: 'none',
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(4),
    },


}));

// Button Css 


function Post() {

    const dispatch = useDispatch();

    const doUserLogout = () => {
        dispatch(doLogout())
    }

    const classes = useStyles();

    const [errMessage, flag, category, name, description, price, location, deltype, load, ctaLoading, setCategory, setName, setDescription, setPrice, setLocation, setDeltype, onFileChange, ctaHandler] = UsePost();

    return (
        <div>

            <div>
                <AppBar>
                    <Toolbar position="static" style={{ backgroundColor: "#eee", justifyContent: 'space-between' }}>
                        <div>

                            <Link to="/" >
                                <IconButton disableRipple edge="start">
                                    <ArrowBackIcon fontSize='large' style={{ color: 'black' }} />
                                </IconButton>
                            </Link>

                        </div>
                        <Button
                            onClick={doUserLogout}
                            variant="contained"
                            color="secondary"
                            className={classes.button}
                            startIcon={<ExitToAppIcon />}
                        >
                            Logout
                        </Button>

                    </Toolbar>
                </AppBar>



                <React.Fragment>
                    <CssBaseline />
                    <Container maxWidth="fixed" style={{ marginTop: '70px' }} >
                        <Typography id='add-type'>ADD DISHES</Typography>
                        <h2 style={{color: 'red' , textAlign: 'center'}}>{errMessage}</h2>

                        <div className="Body_Post" >

                            <div className="post-head">
                                <Typography id="category">
                                    CHOOSE A CATEGORY
                                </Typography>
                            </div>


                            <div className="post-select" >

                                <FormControl className={classes.margin}>
                                    <InputLabel htmlFor="demo-customized-select-native">Category</InputLabel>
                                    <NativeSelect

                                        id="demo-customized-select-native"
                                        input={<BootstrapInput />}
                                        style={{ width: 300 }}
                                        onChange={(e) => setCategory(e.target.value)}
                                        // value={category}

                                    >
                                        <option aria-label="None" value="" style={{ fontSize: '14px', fontFamily: 'cursive' }} />
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }} > Pizza &nbsp;&nbsp;&nbsp;</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }} >Burger</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }} > Sandwich </option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Biryani</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Chicken</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Mutton</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Beef</option>
                                        <option style={{ fontSize: '16px', fontFamily: 'cursive' }}>Palao</option>

                                    </NativeSelect>
                                    {/* <p>Selected Category: {category} </p> */}
                                </FormControl>

                            </div>


                            <div className="post-info">
                                <Typography id="post-detail">
                                    INCLUDE SOME DETAILS
                                </Typography>

                                <div className={classes.root1} noValidate autoComplete="off">

                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Add Name</Typography>
                                    <TextField
                                        onChange={(e) => setName(e.target.value)}
                                        value={name}
                                        margin='dense' style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined"
                                    />
                                    {/* <Typography component="p" style={{ paddingLeft: '30px', fontSize: 12 }}> Mention the key features of your item (e.g. brand, model, age, type)</Typography> */}
                                    {/* <p>Title: {name}</p> */}
                                    <br />
                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Description</Typography>
                                    <TextField
                                        onChange={(e) => setDescription(e.target.value)}
                                        value={description}
                                        style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined"
                                    />
                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 12 }}>    Include condition, features and reason for selling</Typography>
                                    {/* <p>Description: {description}</p> */}
                                    <br />
                                    {/* <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Condition</Typography> */}

                                    {/* <div className={classes.root_button} style={{ paddingLeft: '30px', fontSize: 14 }}>
                                        <Button variant="outlined" color="secondary">New</Button>
                                        &nbsp;&nbsp;
                                        <Button variant="outlined" color="secondary">Used</Button>
                                    </div> */}

                                </div>

                            </div>


                            <div className="post-info">
                                <Typography id="post-detail">
                                    SET A PRICE
                                </Typography>

                                <div className={classes.root1} noValidate autoComplete="off">

                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> Price</Typography>
                                    <TextField
                                        onChange={(e) => setPrice(e.target.value)}
                                        value={price}
                                        style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined" />

                                    <br />
                                    {/* <p>Price: {price}</p> */}


                                </div>

                            </div>

                            <div className="post-info">
                                <Typography id="post-detail">
                                    UPLOAD A PICTURES
                                </Typography>

                                <div style={{ textAlign: 'center' }} >

                                    <input type="file"
                                        onChange={onFileChange}
                                        size='100'
                                        id="avatar" name="avatar"
                                        accept="image/png, image/jpeg , image/svg"
                                    />


                                </div>



                            </div>


                            <div className="post-info">
                                <Typography id="post-detail">
                                    CONFIRM YOUR Location
                                </Typography>
                                <br />
                                <div className={classes.root1} noValidate autoComplete="off">

                                    <Typography component="p" style={{ paddingLeft: '30px', fontSize: 14 }}> State / City</Typography>
                                    <TextField
                                        onChange={(e) => setLocation(e.target.value)}
                                        value={location}
                                        style={{ width: "100%", paddingLeft: '30px', paddingRight: '30px' }} id="outlined-basic" variant="outlined" />

                                    <br />
                                    {/* <p>Location: {location}</p> */}

                                </div>

                            </div>

                            <div className="Body_Post" >

                                <div className="post-head">
                                    <Typography id="category">
                                        CHOOSE Delivery Type
                                    </Typography>
                                </div>


                                <div className="post-select" >

                                    <FormControl className={classes.margin}>
                                        <InputLabel htmlFor="demo-customized-select-native">Delivery Type</InputLabel>
                                        <NativeSelect

                                            id="demo-customized-select-native"
                                            input={<BootstrapInput />}
                                            style={{ width: 300 }}
                                            onChange={(e) => setDeltype(e.target.value)}
                                            value={deltype}

                                        >
                                            <option aria-label="None" value="" style={{ fontSize: '14px', fontFamily: 'cursive' }} />
                                            <option style={{ fontSize: '16px', fontFamily: 'cursive' }} > Free &nbsp;&nbsp;&nbsp;</option>
                                            <option style={{ fontSize: '16px', fontFamily: 'cursive' }} >Paid</option>

                                        </NativeSelect>
                                        {/* <p>Selected Delivery Type: {deltype} </p> */}
                                    </FormControl>
                                </div>
                            </div>


                                <div >


                                    <Button
                                        onClick={ctaHandler}
                                        variant="contained" style={{ backgroundColor: '#21421E', color: 'white' }} disableRipple className={classes.margin}>
                                        <strong>{ctaLoading ? "Load..." : "Post Now"}</strong>
                                    </Button>
                                </div>

                            </div>
                    </Container>
                </React.Fragment>



            </div>

            </div>
            )
}

            export default Post;












