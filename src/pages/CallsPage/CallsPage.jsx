import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCalls } from '../../slices/callsSlice';
import { selectors } from '../../slices/callsSlice';
import { actions } from '../../slices/callsSlice';
import { fetchRecord } from '../../slices/recordsSlice';
import { useCallsApi } from '../../hooks/useCallsApi';
import routes from '../../const/routes';
import Sidebar from '../../components/sidebar/Sidebar/Sidebar';
import Header from '../../components/header/Header/Header';
import Context from '../../components/context/Context/Context';
import './CallsPage.css'


const CallsPage = () => {
  const dispatch = useDispatch();
  const calls = useSelector(selectors.selectAll);
  const typesSelect = useSelector(({ selectsUI }) => selectsUI.typesSelect);
  const dateSelect = useSelector(({ selectsUI }) => selectsUI.dateSelect);

  const {
    getAuthHeader,
    getSearchParamsForCalls,
    getSearchParamsForRecord
  } = useCallsApi();

  useEffect(() => {
    const authHeader = getAuthHeader();
    dispatch(actions.removeCalls());
    const route = `${routes.getListPath()}?${getSearchParamsForCalls(dateSelect, typesSelect)}`;
    dispatch(fetchCalls({ route, authHeader }));
  }, [typesSelect, dateSelect])

  useEffect(() => {
    const authHeader = getAuthHeader();

    calls.forEach((call) => {
      if (call.record) {
        const route = `${routes.getRecordPath()}?${getSearchParamsForRecord(call.record, call.partnership_id)}`;
        dispatch(fetchRecord({ route, authHeader, partnership_id: call.partnership_id, record_id: call.record }));
      }
    });
  }, [calls])

  return (
    <div id="callsPageContainer">
        <Sidebar />
        <div className="headerAndContextContainer">
          <Header />
          <Context />
        </div>        
    </div>
  );
};

export default CallsPage;
