import React, { useState, useEffect, useContext } from 'react';
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core';
import { useSpeechContext } from '@speechly/react-client';
import { EXINTrackerContext } from '../../context/context';
import useStyles from './styles';
import Form from './Form/Form';
import List from './List/List';
import InfoCard from '../InfoCard';

const EXINTracker = () => {
  const classes = useStyles();
  const { balance } = useContext(EXINTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Be aware of your expense!" subheader="Movlianov Suimonkul and Basitov Temirlan." />
      <CardContent>
        <Typography align="center" variant="h5"> Current balance: {balance} zł</Typography>
        <Typography variant="subtitle1" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard />
        </Typography>
        <Divider className={classes.divider} />
        <Form />
      </CardContent>
      <CardContent className={classes.cartContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default EXINTracker;
