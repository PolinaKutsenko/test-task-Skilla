import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import AddOrderIcon from '../../../icons/AddOrderIcon';
import './BalanceButton.css';


const BalanceButton = () => {
  const { t } = useTranslation();

  return (
    <div id="balanceButton">
      <div className="headerBarText">
        {t('context.balance')}
        <p>{t('context.balanceValue')}</p>
      </div>
      <div id="balanceAddIcon">
        <AddOrderIcon />
      </div>
    </div>
  );
};

export default BalanceButton;