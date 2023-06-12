import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { changeSelectorsDefaultState, changeCallsSelect } from '../../../../slices/selectsUISlice';
import ArrowButtonIcon from '../../../../icons/ArrowButtonIcon';
import './CallsSelect.css';


const CallsSelect = () => {
  const { t } = useTranslation();
  const callsSelect = useSelector(({ selectsUI }) => selectsUI.callsSelect);
  const dispatch = useDispatch();

  const [isListOpened, setIsListOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      calls: 'allCalls',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === formik.values.calls,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();

    dispatch(changeCallsSelect(e.target.textContent));
    dispatch(changeSelectorsDefaultState());
    
    formik.values.calls = e.target.dataset.value;
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="callsFilter">
      <ul className={listClassNames}>
        <li className={listItemClassNames('allCalls')} data-value="allCalls" onClick={handleItemClick}>
          {t('context.calls.allCalls')}
        </li>
        <li className={listItemClassNames('allCustomers')} data-value="allCustomers" onClick={handleItemClick}>
          {t('context.calls.allCustomers')}
        </li>
        <li className={listItemClassNames('newCustomers')} data-value="newCustomers" onClick={handleItemClick}>
          {t('context.calls.newCustomers')}
        </li>
        <li className={listItemClassNames('allPerformers')} data-value="allPerformers" onClick={handleItemClick}>
          {t('context.calls.allPerformers')}
        </li>
        <li className={listItemClassNames('app')} data-value="app" onClick={handleItemClick}>
          {t('context.calls.app')}
        </li>
        <li className={listItemClassNames('otherCalls')} data-value="otherCalls" onClick={handleItemClick}>
          {t('context.calls.otherCalls')}
        </li>
      </ul>
      <button className="selectButton headerBarText" onClick={handleButtonClick}>
        {callsSelect}
        <span><ArrowButtonIcon /></span>
      </button>
      <input
        type="text"
        id="calls"
        name="calls"
        value={formik.values.calls}
        onChange={formik.handleChange}
        className="inputHidden"
      />
    </div>
  );
};

export default CallsSelect;
