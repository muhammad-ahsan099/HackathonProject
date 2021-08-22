

import React from 'react';
import Loader from '../Loader/loader';
import Grid from '@material-ui/core/Grid';
import AddButton from '../../addnew/AddNew';
import HotelList from './hotelList/HotelList';
import useStyles from './styles';

import { UseHotelCard } from './UseHotelCard';

const Hotel_Card = () => {
  const classes = useStyles();

  const [hotels, loading ]  = UseHotelCard();

  return (

        
    <main className={classes.content} style={{minHeight: '700px'}}>

     <AddButton   />   
    <h2  style={{fontFamily: 'cursive' , marginTop: 20 ,  fontSize: 24 ,paddingBottom: 40 , color:'#2E3B60'}} >Fresh Recommendations</h2>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
      {


            hotels.map(  (item , index)=>
                {
                 
                  return(
              <Grid  item xs={12} sm={6} md={4} lg={3} >
                  <HotelList  index={index} hotels={item}  />
              </Grid>
                  )
                    
          })
      }          


        {loading && <Loader />}



      </Grid>
    </main>
    
  );
};

export default Hotel_Card;























