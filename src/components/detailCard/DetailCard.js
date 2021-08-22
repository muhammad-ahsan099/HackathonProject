


import React from 'react';
import Loader from '../Loader/loader';
import Grid from '@material-ui/core/Grid';

import DetailList from './detailList/DetailList';
import useStyles from './styles';

import { UseDetailCard } from './UseDetailCard';

const Hotel_Card = () => {
  const classes = useStyles();

  const [hotels, loading ]  = UseDetailCard();

  return (
        
    <main className={classes.content} style={{minHeight: '700px'}}>
    <h2  style={{fontFamily: 'cursive' , marginTop: 20 ,  fontSize: 24 ,paddingBottom: 40 , color:'#2E3B60'}} >Fresh Recommendations</h2>
      <div className={classes.toolbar} />
      <Grid container justify="center" spacing={4}>
      

    {/* {

    hotels.filter(  (item , index) => 
    {
      return item.docID === item.docID;
    }).map((item , index) => {
      
      return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
          <DetailList index={index} product={item} />
        </Grid>
      )
  } )


  }  */}
    
{

            hotels.map(  (item , index)=>
                {
                 
                  return(
              <Grid  item xs={12} sm={6} md={4} lg={3} >
                  <DetailList  index={index} hotels={item}  />
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























