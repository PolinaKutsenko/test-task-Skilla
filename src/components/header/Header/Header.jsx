import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

import SearchButton from '../SearchButton/SearchButton';
import headerManImage from '../../../icons/headerManImage.png';
import CallsAnalytic from '../CallsAnalytic/CallsAnalytic';
import ArrowButton from '../ArrowButton/ArrowButton';
import './Header.css'


const Header = () => {
  const { t } = useTranslation();

  const options = {
    month: 'short',
    day: 'numeric',
    weekday: 'long',
    timezone: 'UTC',
  };
  const dateString = new Date().toLocaleString("ru", options);
  const parsedDateString = dateString.charAt(0).toUpperCase() + dateString.slice(1, -1);

  return (
    <div id="headerContainer">
      <div className="date headerDateText">{parsedDateString}</div>
      <CallsAnalytic />
      <div id="headerSearch">
        <SearchButton />
      </div>
      <div className="headerNameText">{t('header.name')}</div>
      <div id="headerNameArrowButton"><ArrowButton /></div>
      <div id="headerImage">
        <img src={headerManImage} />
        <ArrowButton />
      </div>
    </div>
  );
};

export default Header;