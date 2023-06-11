import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import SearchButton from '../../../header/SearchButton/SearchButton';
import CloseIcon from '../../../../icons/CloseIcon';
import TypesSelect from '../TypesSelect/TypesSelect';
import EmployeesSelect from '../EmployeesSelect/EmployeesSelect';
import CallsSelect from '../CallsSelect/CallsSelect';
import SourcesSelect from '../SourcesSelect/SourcesSelect';
import RatingsSelect from '../RatingsSelect/RatingsSelect';
import MistakesSelect from '../MistakesSelect/MistakesSelect';
import './FiltersAndSearch.css';


const FiltersAndSearch = () => {
  const { t } = useTranslation();

  return (
    <div id="filtersAndSearchContainer">
      <div id="searchContainer">
        <div className="filtersAndSearchText">
          <span><SearchButton /></span>
          <p>{t('context.сallSearch')}</p>
        </div>
      </div>
      <div id="filtersContainer">
        <div id="filtersFlexContainer">
          {true && <div id="filtersClose" className="headerBarText">
              {t('context.closeFilters')}
              <CloseIcon />
            </div>}
          <TypesSelect />
          <EmployeesSelect />
          <CallsSelect />
          <SourcesSelect />
          <RatingsSelect />
          <MistakesSelect />
        </div>
      </div>
    </div>
  );
};

export default FiltersAndSearch;
