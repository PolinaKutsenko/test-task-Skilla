import React, { useState, useEffect, useRef, useCallback } from 'react';
import { createContext } from 'react';


export const CallsApiContext = createContext({});

const CallsApiProvider = ({ children }) => {
  const token = useRef('testtoken');

  const getAuthHeader = () => ({ Authorization: `Bearer ${token}` });

  const getSearchParamsForCalls = useCallback((startDate, endDate, inOut) => {
    const searchParams = new URLSearchParams();
    searchParams.append('date_start', startDate);
    searchParams.append('date_end', endDate);
    searchParams.append('in_out', inOut);

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
