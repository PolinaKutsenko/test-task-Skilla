import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { selectors } from '../../../slices/callsSlice';
import BalanceButton from '../BalanceButton/BalanceButton';
import DatePickerButton from '../DatePickerButton/DatePickerButton';
import FiltersAndSearch from '../filtersAndSearch/FiltersAndSearch/FiltersAndSearch';
import CallItem from '../CallItem/CallItem';
import './Context.css';


const Context = () => {
  const { t } = useTranslation();
  const calls = useSelector(selectors.selectAll);
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
      <div id="callsContainer">
        <div id="callsFlexContainer">
          <div id="callsListHeader">
            <div id="callsListHeaderContainer" className="callsHeaderText">
              <div id="callsHeaderType">{t('context.callsHeader.type')}</div>
              <div id="callsHeaderTime">{t('context.callsHeader.time')}</div>
              <div id="callsHeaderEmployees">{t('context.callsHeader.employees')}</div>
              <div id="callsHeaderCall">{t('context.callsHeader.call')}</div>
              <div id="callsHeaderSource">{t('context.callsHeader.source')}</div>
              <div id="callsHeaderRating">{t('context.callsHeader.rating')}</div>
              <div id="callsHeaderDuration">{t('context.callsHeader.duration')}</div>
            </div>
          </div>
          <div id="callsList">
            {calls.map((callItem) => <CallItem key={callItem.id} call={callItem} />)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Context;