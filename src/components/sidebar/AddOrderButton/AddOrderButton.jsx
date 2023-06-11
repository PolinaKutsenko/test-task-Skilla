import React from 'react';
import { useTranslation } from 'react-i18next';

import AddOrderIcon from '../../../icons/AddOrderIcon';

import './AddOrderButton.css'


const AddOrderButton = () => {
  const { t } = useTranslation();

  return (
    <>
      <button id="addOrderButton">
        <p className="sidebarButtonsText">{t('sidebar.addOrder')}</p>
        <div id="addOrderIcon">
          <AddOrderIcon />
        </div>
      </button>
    </>
  );
};

export default AddOrderButton;