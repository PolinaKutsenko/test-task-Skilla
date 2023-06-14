import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createContext } from 'react';
import { useSelector } from 'react-redux';

import formatDateToStringByDash from '../formatters/formatDateToStringByDash';


export const CallsApiContext = createContext({});

const CallsApiProvider = ({ children }) => {
  const token = useRef('testtoken');

  const getInOut = useCallback((typesSelect) => {
    let result;

    switch (typesSelect) {
      case 'Входящие':
        result = 1;
        break;
      case 'Исходящие':
        result = 0;
        break;
      default:
        result = '';
        break;
    }
    return result;
  }, []);

  const getStartDate = useCallback((dateSelect) => {
    if (dateSelect !== 'Указать даты') {
      let date;

      switch (dateSelect) {
        case '3 дня':
          date = new Date();
          date.setDate(date.getDate() - 3);
          break;
        case 'Неделя':
          date = new Date();
          date.setDate(date.getDate() - 7);
          break;
        case 'Месяц':
          date = new Date();
          date.setMonth(date.getMonth() - 1);
          break;
        case 'Год':
          date = new Date();
          date.setFullYear(date.getFullYear() - 1);
          break;
        default:
          date = new Date(dateSelect.dateBefore);
          break;
      }
      return formatDateToStringByDash(date);
    }
  }, []);

  const getEndDate = useCallback((dateSelect) => {
    if (dateSelect?.type !== 'Указать даты') {
      const date = new Date();
      return formatDateToStringByDash(date);
    } else {
      const date = new Date(dateSelect.dateAfter);

      return formatDateToStringByDash(date);
    }
  }, []);

  const getAuthHeader = useCallback(() => ({ Authorization: `Bearer ${token.current}` }), [token]);

  const getSearchParamsForCalls = useCallback((dateSelect, typesSelect) => {
    const searchParams = new URLSearchParams();
    if (typesSelect !== 'Все типы') {
      searchParams.append('in_out', getInOut(typesSelect));
    }
    searchParams.append('date_start', getStartDate(dateSelect));
    searchParams.append('date_end', getEndDate(dateSelect));
    searchParams.append('limit', 10000);

    console.log('!!!!', searchParams.toString())
    return searchParams.toString();
  }, []);
  
  const getSearchParamsForRecord = useCallback((record, partnershipId) => {
    const searchParams = new URLSearchParams();
    searchParams.append('record', record);
    searchParams.append('partnership_id', partnershipId);

    return searchParams.toString();
  }, []);


  return (
    <CallsApiContext.Provider value={{ getAuthHeader, getSearchParamsForCalls, getSearchParamsForRecord }}>
      {children}
    </CallsApiContext.Provider>
  );
};

export default CallsApiProvider;
