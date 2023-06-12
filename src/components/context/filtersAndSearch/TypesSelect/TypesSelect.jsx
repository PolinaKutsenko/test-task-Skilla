import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import routes from '../../../../const/routes';
import { useCallsApi } from '../../../../hooks/useCallsApi';
import { fetchCalls } from '../../../../slices/callsSlice';
import { changeSelectorsDefaultState, changeTypesSelect } from '../../../../slices/selectsUISlice';
import ArrowButtonIcon from '../../../../icons/ArrowButtonIcon';
import './TypesSelect.css';


const TypesSelect = () => {
  const { t } = useTranslation();
  const typesSelect = useSelector(({ selectsUI }) => selectsUI.typesSelect);
  const dispatch = useDispatch();
  const {
    getAuthHeader,
    getSearchParamsForCalls,
  } = useCallsApi();

  const [isListOpened, setIsListOpened] = useState(false);

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === typesSelect,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();

    dispatch(changeTypesSelect(e.target.textContent));
    dispatch(changeSelectorsDefaultState());
    
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="typesFilter">
      <ul className={listClassNames}>
        <li className={listItemClassNames('Все типы')} data-value="allTypes" onClick={handleItemClick}>
          {t('context.types.allTypes')}
        </li>
        <li className={listItemClassNames('Входящие')} data-value="incoming" onClick={handleItemClick}>
          {t('context.types.incoming')}
        </li>
        <li className={listItemClassNames('Исходящие')} data-value="outcoming" onClick={handleItemClick}>
          {t('context.types.outcoming')}
        </li>
      </ul>
      <button className="selectButton headerBarText" onClick={handleButtonClick}>
        {typesSelect}
        <span><ArrowButtonIcon /></span>
      </button>
    </div>
  );
};

export default TypesSelect;
