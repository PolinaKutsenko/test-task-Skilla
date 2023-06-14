import React, { useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { selectors } from '../../../slices/callsSlice';
import parserCalls from '../../../formatters/parserCalls';
import CheckboxButton from '../callItem/CheckboxButton/CheckboxButton';
import BalanceButton from '../BalanceButton/BalanceButton';
import DatePickerButton from '../DatePickerButton/DatePickerButton';
import FiltersAndSearch from '../filtersAndSearch/FiltersAndSearch/FiltersAndSearch';
import CallItem from '../callItem/CallItem/CallItem';
import './Context.css';


const Context = () => {
  const { t } = useTranslation();
  const calls = useSelector(selectors.selectAll);

  const parsedCallsList = useMemo(() => {
    return parserCalls(calls);
  }, [calls]);

  const todayCalls = useMemo(() => {
    if (!parsedCallsList.today.length) {
      return null;
    }
    return (
      <>
        {parsedCallsList.today.map((callItem) => <CallItem key={callItem.id} call={callItem} />)}
      </>
    );
  }, [parsedCallsList]);

  const yesterdayCalls = useMemo(() => {
    if (!parsedCallsList.yesterday.length) {
      return null;
    }
    return (
      <>
        <div className="dateOfParsedCalls">
          <p className="recordItemText">{t('context.parsingCalls.yesterday')}</p>
          <p className="parsingCallsCountText">{parsedCallsList.yesterday.length}</p>
        </div>
        {parsedCallsList.yesterday.map((callItem) => <CallItem key={callItem.id} call={callItem} />)}
      </>
    );
  }, [parsedCallsList]);

  const currentMonthCalls = useMemo(() => {
    if (!parsedCallsList.currentMonth.length) {
      return null;
    }
    return (
      <>
        <div className="dateOfParsedCalls">
          <p className="recordItemText">{t('context.parsingCalls.currentMonth')}</p>
          <p className="parsingCallsCountText">{parsedCallsList.currentMonth.length}</p>
        </div>
        {parsedCallsList.currentMonth.map((callItem) => <CallItem key={callItem.id} call={callItem} />)}
      </>
    );
  }, [parsedCallsList]);

  const lastMonthCalls = useMemo(() => {
    if (!parsedCallsList.lastMonth.length) {
      return null;
    }
    return (
      <>
        <div className="dateOfParsedCalls">
          <p className="recordItemText">{t('context.parsingCalls.lastMonth')}</p>
          <p className="parsingCallsCountText">{parsedCallsList.lastMonth.length}</p>
        </div>
        {parsedCallsList.lastMonth.map((callItem) => <CallItem key={callItem.id} call={callItem} />)}
      </>
    );
  }, [parsedCallsList]);

  const currentYearCalls = useMemo(() => {
    if (!parsedCallsList.currentYear.length) {
      return null;
    }
    return (
      <>
        <div className="dateOfParsedCalls">
          <p className="recordItemText">{t('context.parsingCalls.currentYear')}</p>
          <p className="parsingCallsCountText">{parsedCallsList.currentYear.length}</p>
        </div>
        {parsedCallsList.currentYear.map((callItem) => <CallItem key={callItem.id} call={callItem} />)}
      </>
    );
  }, [parsedCallsList]);

  const beforeLastYearCalls = useMemo(() => {
    if (!parsedCallsList.beforeLastYear.length) {
      return null;
    }
    return (
      <>
        <div className="dateOfParsedCalls">
          <p className="recordItemText">{t('context.parsingCalls.beforeLastYear')}</p>
          <p className="parsingCallsCountText">{parsedCallsList.beforeLastYear.length}</p>
        </div>
        {parsedCallsList.beforeLastYear.map((callItem) => <CallItem key={callItem.id} call={callItem} />)}
      </>
    );
  }, [parsedCallsList]);

  return (
    <div id="contextContainer">
      <div className="balanceAndDatePickerContainer">
        <BalanceButton />
        <DatePickerButton />
      </div>
      <div className="filtersAndSearchContainer">
        <FiltersAndSearch />
      </div>
      <div id="callsContainer">
        <div id="callsListHeader" className="callsHeaderText">
          <div id="callsHeaderCheckbox"><CheckboxButton /></div>
          <div id="callsHeaderType">{t('context.callsHeader.type')}</div>
          <div id="callsHeaderTime">{t('context.callsHeader.time')}</div>
          <div id="callsHeaderEmployees">{t('context.callsHeader.employees')}</div>
          <div id="callsHeaderCall">{t('context.callsHeader.call')}</div>
          <div id="callsHeaderSource">{t('context.callsHeader.source')}</div>
          <div id="callsHeaderRating">{t('context.callsHeader.rating')}</div>
          <div id="callsHeaderDuration">{t('context.callsHeader.duration')}</div>
        </div>
        <div id="callsList">
          {todayCalls}
          {yesterdayCalls}
          {currentMonthCalls}
          {lastMonthCalls}
          {currentYearCalls}
          {beforeLastYearCalls}
        </div>
      </div>
    </div>
  );
};

export default Context;