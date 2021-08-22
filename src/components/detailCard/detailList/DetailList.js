


import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import Icon from '@material-ui/core/Icon';
import Button from '@material-ui/core/Button';


// import {Link} from 'react-router-dom'

import useStyles from './style';

function DetailList({ hotels, index, addtoFav }) {
    const classes = useStyles();

    return (

        <Card className={classes.root} >

            <CardMedia className={classes.media} image={hotels.image} title="Product Media" />
            <CardContent>


                <Typography gutterBottom variant="h5" component="h1">
                    {hotels.name}
                </Typography>
                <div className={classes.cardContent}>
                    <Typography gutterBottom variant="h6" component="h2">
                    {hotels.deltype}
                    </Typography>

                    <Typography gutterBottom variant="h6" component="h2">
                    {hotels.price}
                    </Typography>
                </div>
                <Typography dangerouslySetInnerHTML={{ __html: hotels.description }} variant="body2" color="textSecondary" component="p" />
            </CardContent>
            <CardActions disableSpacing className={classes.cardActions}>
                {/* <IconButton aria-label="Favourite Item" >
                    <FavoriteBorderIcon onClick={addtoFav} />
                </IconButton> */}
                
                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    // endIcon= {<FavoriteBorderIcon />}
                >
                    Hurrah!
                </Button>

            </CardActions>
        </Card>



    );
};

export default DetailList;

