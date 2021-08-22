


import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import avatar from '../../../assets/avatar.png'

import useSignUp from './UseSignUp'
// import {Link} from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit">
        Ta-Series
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(0),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignUp() {
  const classes = useStyles();

  const [fName,lName ,  phone , country ,email , password ,setFName, setLName ,setPhone, setCountry ,  setEmail,setPassword,  doSignupUser] = useSignUp()


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
    
        <img style={{width: 100 , height: 100}}  src={avatar} alt="Image"  />
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <div className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={ (e) =>setFName(e.target.value)}
                value={fName}
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
              />
              {/* <p>First Name: {fName}</p> */}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                onChange={ (e) => setLName(e.target.value)}
                value={lName}
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lname"
              />
              {/* <p>Last Name: {lName}</p> */}
            </Grid>
            <Grid item item xs={12} sm={6}>
              <TextField
                onChange={ (e) =>setPhone(e.target.value)}
                value={phone}
                variant="outlined"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                autoComplete="country"
              />
              {/* <p>Country: {phone}</p> */}
            </Grid>
            <Grid item  xs={12} sm={6}>
              <TextField
            //   onChange={ (e) => setPassword(e.target.value)}
                onChange= {(e)=>setCountry(e.target.value) }     
                value={country}
                variant="outlined"
                required
                fullWidth
                name="phone"
                label="phone"
                type="phone"
                id="phone"
                autoComplete="current-phone"
              />

              {/* <p>Phone: {country}</p> */}
              
            </Grid>
            <Grid item item xs={12} >
              <TextField
                onChange={ (e) =>setEmail(e.target.value)}
                value={email}
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <p>Email: {email}</p>
            </Grid>
            <Grid item  xs={12}>
              <TextField
            //   onChange={ (e) => setPassword(e.target.value)}
                onChange= {(e)=>setPassword(e.target.value) }     
                value={password}
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />

              {/* <p>Password: {password}</p> */}
              
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            onClick={doSignupUser}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link >
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
      <Box mt={3}>
        <Copyright />
      </Box>
    </Container>
  );
}