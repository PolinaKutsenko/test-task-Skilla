import { useTranslation } from 'react-i18next';

import './CallsAnalytic.css';


const CallsAnalytic = () => {
  const { t } = useTranslation();

  return (
    <div id="callsAnalytic">
      <div id="newCalls">
        <div id="callsBar"><div /></div>
        <div className="headerBarText">
          {t('header.newCalls')}<p>{t('header.count20Of30')}</p>
        </div>
      </div>
      <div id="callsQuality">
        <div id="callsQualityBar"><div /></div>
        <div className="headerBarText">
          {t('header.callsQuality')}<p>{t('header.percent40')}</p>
        </div>
      </div>
      <div id="conversionToAnOrder">
        <div id="conversionBar"><div /></div>
        <div className="headerBarText">
          {t('header.conversionToOrder')}<p>{t('header.conversion67')}</p>
        </div>
      </div>
    </div>
  );
};

export default CallsAnalytic;