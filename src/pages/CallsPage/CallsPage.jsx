import React, { useEffect } from 'react';

import Sidebar from '../../components/sidebar/Sidebar/Sidebar';
import Header from '../../components/header/Header/Header';
import Context from '../../components/context/Context/Context';
import './CallsPage.css'


const CallsPage = () => {

  return (
    <div id="callsPageContainer">
        <Sidebar />
        <Header />
        <Context />
    </div>
  );
};

export default CallsPage;
