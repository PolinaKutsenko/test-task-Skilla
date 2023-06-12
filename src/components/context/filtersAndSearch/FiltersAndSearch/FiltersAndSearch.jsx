import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { changeSelectorsToDefault } from '../../../../slices/selectsUISlice';
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
  const isAllSelectorsDefault = useSelector(({ selectsUI }) => selectsUI.isAllSelectorsDefault);
  const dispatch = useDispatch();

  const closeFiltersHandler = () => {
    dispatch(changeSelectorsToDefault());
  }

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
          {!isAllSelectorsDefault && <div
              id="filtersClose"
              className="headerBarText"
              onClick={closeFiltersHandler}
            >
              {t('context.closeFilters')}
              <button><CloseIcon /></button>
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
