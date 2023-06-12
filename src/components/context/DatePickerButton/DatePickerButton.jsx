import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useFormik } from 'formik';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { changeDateSelect } from '../../../slices/selectsUISlice';
import CalendarIcon from '../../../icons/CalendarIcon';
import ArrowButton from '../../header/ArrowButton/ArrowButton';
import './DatePickerButton.css';


const DatePickerButton = () => {
  const { t } = useTranslation();
  const dateSelect = useSelector(({ selectsUI }) => selectsUI.dateSelect);
  const dispatch = useDispatch();

  const [isListOpened, setIsListOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      date: '3 дня',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === formik.values.date,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();

    dispatch(changeDateSelect(e.target.textContent));

    formik.values.date = e.target.dataset.value;
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="dataPickerContainer">
      <div id="dataPickerFlexContainer">
        <div id="leftButton"><ArrowButton /></div>
          <div id="dateFilter">
            <ul className={listClassNames}>
              <li className={listItemClassNames('threeDays')} data-value="threeDays" onClick={handleItemClick}>
                {t('context.calendar.threeDays')}
              </li>
              <li className={listItemClassNames('week')} data-value="week" onClick={handleItemClick}>
                {t('context.calendar.week')}
              </li>
              <li className={listItemClassNames('month')} data-value="month" onClick={handleItemClick}>
                {t('context.calendar.month')}
              </li>
              <li className={listItemClassNames('year')} data-value="year" onClick={handleItemClick}>
                {t('context.calendar.year')}
              </li>
            </ul>
            <button className="selectButton headerBarText" onClick={handleButtonClick}>
              <span><CalendarIcon /></span>
              {dateSelect}
            </button>
            <input
              type="text"
              id="date"
              name="date"
              value={formik.values.date}
              onChange={formik.handleChange}
              className="inputHidden"
            />
      </div>
        <div id="rightButton"><ArrowButton /></div>
      </div>
    </div>
  );
};

export default DatePickerButton;