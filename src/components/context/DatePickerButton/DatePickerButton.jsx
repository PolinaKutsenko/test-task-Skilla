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
  const dateSelect = useSelector(({ selectsUI }) => selectsUI.dateSelect?.type ? selectsUI.dateSelect.type : selectsUI.dateSelect);
  const dispatch = useDispatch();

  const [isListOpened, setIsListOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      dayBefore: '',
      monthBefore: '',
      yearBefore: '',
      dayAfter: '',
      monthAfter: '',
      yearAfter: '',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === dateSelect || dataValue === dateSelect?.type,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();

    dispatch(changeDateSelect(e.target.textContent));

    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  const enterPressed = (e) => {
    const code = e.keyCode || e.which;
    if(code === 13) {
      dispatch(changeDateSelect({
        type: 'Указать даты',
        dateBefore: `20${formik.values.yearBefore}-${formik.values.monthBefore}-${formik.values.dayBefore}`,
        dateAfter: `20${formik.values.yearAfter}-${formik.values.monthAfter}-${formik.values.dayAfter}`,
      }));

      formik.values.dayBefore = '';
      formik.values.monthBefore = '';
      formik.values.yearBefore = '';
      formik.values.dayAfter = '';
      formik.values.monthAfter = '';
      formik.values.yearAfter = '';
    
      setIsListOpened(!isListOpened);
    } 
  }

  return (
    <div id="dataPickerContainer">
      <div id="dataPickerFlexContainer">
        <div id="leftButton"><ArrowButton /></div>
          <div id="dateFilter">
            <ul className={listClassNames}>
              <li className={listItemClassNames('3 дня')} data-value="threeDays" onClick={handleItemClick}>
                {t('context.calendar.threeDays')}
              </li>
              <li className={listItemClassNames('Неделя')} data-value="week" onClick={handleItemClick}>
                {t('context.calendar.week')}
              </li>
              <li className={listItemClassNames('Месяц')} data-value="month" onClick={handleItemClick}>
                {t('context.calendar.month')}
              </li>
              <li className={listItemClassNames('Год')} data-value="year" onClick={handleItemClick}>
                {t('context.calendar.year')}
              </li>
              <li
                id="specifyDate"
                className={listItemClassNames('Указать даты')}
                data-value="specifyDate"
                onKeyDown={enterPressed}
              >
                {t('context.calendar.specifyDate')}
                <div id="dateInputAndCalendarContainer">
                  <div id="dateInputs">
                    <input type="text" maxLength="2" id="dayBefore" name="dayBefore" value={formik.values.dayBefore} onChange={formik.handleChange} />
                    {'.'}
                    <input type="text" maxLength="2" id="monthBefore" name="monthBefore" value={formik.values.monthBefore} onChange={formik.handleChange} />
                    {'.'}
                    <input type="text" maxLength="2" id="yearBefore" name="yearBefore" value={formik.values.yearBefore} onChange={formik.handleChange} />
                    {'-'}
                    <input type="text" maxLength="2" id="dayAfter" name="dayAfter" value={formik.values.dayAfter} onChange={formik.handleChange} />
                    {'.'}
                    <input type="text" maxLength="2" id="monthAfter" name="monthAfter" value={formik.values.monthAfter} onChange={formik.handleChange} />
                    {'.'}
                    <input type="text" maxLength="2" id="yearAfter" name="yearAfter" value={formik.values.yearAfter} onChange={formik.handleChange} />
                  </div>
                  <span><CalendarIcon /></span>
                </div>
              </li>
            </ul>
            <button className="selectButton headerBarText" onClick={handleButtonClick}>
              <span><CalendarIcon /></span>
              {dateSelect}
            </button>
          </div>
        <div id="rightButton"><ArrowButton /></div>
      </div>
    </div>
  );
};

export default DatePickerButton;