import React, { Component } from 'react';
import Band from './Band';

const Bands = props => {
  const bands = props.bands.map(band => {
      return <Band key={band.id} band={band} delete={props.deleteBand} />
    }
  );
}