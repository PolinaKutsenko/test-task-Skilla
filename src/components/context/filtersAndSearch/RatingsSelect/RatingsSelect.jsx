import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { changeSelectorsDefaultState, changeRatingsSelect } from '../../../../slices/selectsUISlice';
import ArrowButtonIcon from '../../../../icons/ArrowButtonIcon';
import './RatingsSelect.css';


const RatingsSelect = () => {
  const { t } = useTranslation();
  const ratingsSelect = useSelector(({ selectsUI }) => selectsUI.ratingsSelect);
  const dispatch = useDispatch();

  const [isListOpened, setIsListOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      ratings: 'allRatings',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === formik.values.ratings,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();
    
    dispatch(changeRatingsSelect(e.target.textContent));
    dispatch(changeSelectorsDefaultState());
    
    formik.values.ratings = e.target.dataset.value;
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="ratingsFilter">
      <ul className={listClassNames}>
        <li className={listItemClassNames('allRatings')} data-value="allRatings" onClick={handleItemClick}>
          {t('context.ratings.allRatings')}
        </li>
        <li className={listItemClassNames('recognize')} data-value="recognize" onClick={handleItemClick}>
          {t('context.ratings.recognize')}
        </li>
        <li className={listItemClassNames('scriptNotUsed')} data-value="scriptNotUsed" onClick={handleItemClick}>
          {t('context.ratings.scriptNotUsed')}
        </li>
        <li className={listItemClassNames('bad')} data-value="bad" onClick={handleItemClick}>
          {t('context.ratings.bad')}
        </li>
        <li className={listItemClassNames('good')} data-value="good" onClick={handleItemClick}>
          {t('context.ratings.good')}
        </li>
        <li className={listItemClassNames('excellent')} data-value="excellent" onClick={handleItemClick}>
          {t('context.ratings.excellent')}
        </li>
      </ul>
      <button className="selectButton headerBarText" onClick={handleButtonClick}>
        {ratingsSelect}
        <span><ArrowButtonIcon /></span>
      </button>
      <input
        type="text"
        id="ratings"
        name="ratings"
        value={formik.values.ratings}
        onChange={formik.handleChange}
        className="inputHidden"
      />
    </div>
  );
};

export default RatingsSelect;
