import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import ArrowButtonIcon from '../../../../icons/ArrowButtonIcon';
import './TypesSelect.css';


const TypesSelect = () => {
  const { t } = useTranslation();
  const [isListOpened, setIsListOpened] = useState(false);
  const [buttonText, setButtonText] = useState(t('context.types.allTypes'));

  const formik = useFormik({
    initialValues: {
      types: 'allTypes',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === formik.values.types,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();
    setButtonText(e.target.textContent);
    formik.values.types = e.target.dataset.value;
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="typesFilter">
      <ul className={listClassNames}>
        <li className={listItemClassNames('allTypes')} data-value="allTypes" onClick={handleItemClick}>
          {t('context.types.allTypes')}
        </li>
        <li className={listItemClassNames('incoming')} data-value="incoming" onClick={handleItemClick}>
          {t('context.types.incoming')}
        </li>
        <li className={listItemClassNames('outcoming')} data-value="outcoming" onClick={handleItemClick}>
          {t('context.types.outcoming')}
        </li>
      </ul>
      <button className="selectButton headerBarText" onClick={handleButtonClick}>
        {buttonText}
        <span><ArrowButtonIcon /></span>
      </button>
      <input
        type="text"
        id="types"
        name="types"
        value={formik.values.types}
        onChange={formik.handleChange}
        className="inputHidden"
      />
    </div>
  );
};

export default TypesSelect;
