import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import ArrowButtonIcon from '../../../../icons/ArrowButtonIcon';
import './SourcesSelect.css';


const SourcesSelect = () => {
  const { t } = useTranslation();
  const [isListOpened, setIsListOpened] = useState(false);
  const [buttonText, setButtonText] = useState(t('context.sources.allSources'));

  const formik = useFormik({
    initialValues: {
      sources: 'allSources',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === formik.values.sources,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();
    setButtonText(e.target.textContent);
    formik.values.sources = e.target.dataset.value;
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="sourcesFilter">
      <ul className={listClassNames}>
        <li className={listItemClassNames('allSources')} data-value="allSources" onClick={handleItemClick}>
          {t('context.sources.allSources')}
        </li>
      </ul>
      <button className="selectButton headerBarText" onClick={handleButtonClick}>
        {buttonText}
        <span><ArrowButtonIcon /></span>
      </button>
      <input
        type="text"
        id="sources"
        name="sources"
        value={formik.values.sources}
        onChange={formik.handleChange}
        className="inputHidden"
      />
    </div>
  );
};

export default SourcesSelect;
