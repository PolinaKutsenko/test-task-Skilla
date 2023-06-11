import React from 'react';
import { useTranslation } from 'react-i18next';

import PaymentIcon from '../../../icons/PaymentIcon';
import './PaymentButton.css'


const PaymentButton = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <button id="paymentButton">
        <p className="sidebarButtonsText">{t('sidebar.payment')}</p>
        <div id="paymentIcon">
          <PaymentIcon />
        </div>
      </button>
    </>
  );
};

export default PaymentButton;
