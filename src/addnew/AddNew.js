

import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleIcon from '@material-ui/icons/AddCircle';

import {Link}  from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

export default function AddButton() {
  const classes = useStyles();

  return (
    <div>
      <Link to = '/post' style={{textDecoration: 'none'}}>
      <Button
       style={{margin: '0 auto', display: "flex" , padding: 10}}
        variant="contained"
        color="primary"
        size="large"
        className={classes.button}
        startIcon={<AddCircleIcon />}
      >
        Add New Dish
      </Button>
      </Link>
    </div>
  );
}
