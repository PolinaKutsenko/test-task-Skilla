import React, { useEffect } from 'react';

import BalanceButton from '../BalanceButton/BalanceButton';
import DatePickerButton from '../DatePickerButton/DatePickerButton';
import FiltersAndSearch from '../filtersAndSearch/FiltersAndSearch/FiltersAndSearch';
import CallItem from '../CallItem/CallItem';
import './Context.css';


const Context = () => {
  /*const handleCloseSelectsClick = (e) => {
    console.log('#')
    console.log(e)
    if(!e.target.classList.includes("selectButton")) {
      
    }
  }*/

  return (
    <div id="contextContainer">
      <BalanceButton />
      <DatePickerButton />
      <FiltersAndSearch />

    </div>
  );
};

export default Context;