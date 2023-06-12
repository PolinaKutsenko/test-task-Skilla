import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { changeSelectorsDefaultState, changeEmployeesSelect } from '../../../../slices/selectsUISlice';
import avatar from '../../../../icons/avatar.png';
import ArrowButtonIcon from '../../../../icons/ArrowButtonIcon';
import './EmployeesSelect.css';


const EmployeesSelect = () => {
  const { t } = useTranslation();
  const employeesSelect = useSelector(({ selectsUI }) => selectsUI.employeesSelect);
  const dispatch = useDispatch();

  const [isListOpened, setIsListOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      employees: 'allEmployees',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === formik.values.employees,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();

    dispatch(changeEmployeesSelect(e.target.textContent));
    dispatch(changeSelectorsDefaultState());

    formik.values.employees = e.target.dataset.value;
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="employeesFilter">
      <ul className={listClassNames}>
        <li className={listItemClassNames('allEmployees')} data-value="allEmployees" onClick={handleItemClick}>
          {t('context.employees.allEmployees')}
        </li>
        <li className={listItemClassNames('Konstantin')} data-value="Konstantin" onClick={handleItemClick}>
          <img src={avatar} />
          {t('context.employees.Konstantin')}
        </li>
        <li className={listItemClassNames('Polina')} data-value="Polina" onClick={handleItemClick}>
          <img src={avatar} />
          {t('context.employees.Polina')}
        </li>
      </ul>
      <button className="selectButton headerBarText" onClick={handleButtonClick}>
        {employeesSelect}
        <span><ArrowButtonIcon /></span>
      </button>
      <input
        type="text"
        id="employees"
        name="employees"
        value={formik.values.employees}
        onChange={formik.handleChange}
        className="inputHidden"
      />
    </div>
  );
};

export default EmployeesSelect;
