import React, { useState } from 'react';
import { useFormik } from 'formik';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import { useSelector, useDispatch } from 'react-redux';

import { changeSelectorsDefaultState, changeMistakesSelect } from '../../../../slices/selectsUISlice';
import ArrowButtonIcon from '../../../../icons/ArrowButtonIcon';
import './MistakesSelect.css';


const MistakesSelect = () => {
  const { t } = useTranslation();
  const mistakesSelect = useSelector(({ selectsUI }) => selectsUI.mistakesSelect);
  const dispatch = useDispatch();

  const [isListOpened, setIsListOpened] = useState(false);

  const formik = useFormik({
    initialValues: {
      mistakes: 'allMistakes',
    },
  });

  const listClassNames = cn('selectList', 'selectText', {
    'selectList-visible': isListOpened,
  });

  const listItemClassNames = (dataValue) => (cn('selectListItem', {
    'selectListItem-selected': dataValue === formik.values.mistakes,
  }));

  const handleItemClick = (e) => {
    e.stopPropagation();

    dispatch(changeMistakesSelect(e.target.textContent));
    dispatch(changeSelectorsDefaultState());

    formik.values.mistakes = e.target.dataset.value;
    setIsListOpened(!isListOpened);
  }

  const handleButtonClick = () => {
    setIsListOpened(!isListOpened);
  }

  return (
    <div id="mistakesFilter">
      <ul className={listClassNames}>
        <li className={listItemClassNames('allMistakes')} data-value="allMistakes" onClick={handleItemClick}>
          {t('context.mistakes.allMistakes')}
        </li>
        <li className={listItemClassNames('greeting')} data-value="greeting" onClick={handleItemClick}>
          {t('context.mistakes.greeting')}
        </li>
        <li className={listItemClassNames('name')} data-value="name" onClick={handleItemClick}>
          {t('context.mistakes.name')}
        </li>
        <li className={listItemClassNames('price')} data-value="price" onClick={handleItemClick}>
          {t('context.mistakes.price')}
        </li>
        <li className={listItemClassNames('sale')} data-value="sale" onClick={handleItemClick}>
          {t('context.mistakes.sale')}
        </li>
        <li className={listItemClassNames('preOrder')} data-value="preOrder" onClick={handleItemClick}>
          {t('context.mistakes.preOrder')}
        </li>
        <li className={listItemClassNames('grace')} data-value="grace" onClick={handleItemClick}>
          {t('context.mistakes.grace')}
        </li>
        <li className={listItemClassNames('stopWords')} data-value="stopWords" onClick={handleItemClick}>
          {t('context.mistakes.stopWords')}
        </li>
      </ul>
      <button className="selectButton headerBarText" onClick={handleButtonClick}>
        {mistakesSelect}
        <span><ArrowButtonIcon /></span>
      </button>
      <input
        type="text"
        id="mistakes"
        name="mistakes"
        value={formik.values.mistakes}
        onChange={formik.handleChange}
        className="inputHidden"
      />
    </div>
  );
};

export default MistakesSelect;
