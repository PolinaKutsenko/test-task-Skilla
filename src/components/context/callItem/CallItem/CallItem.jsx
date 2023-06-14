import React, { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';

import RecordItem from '../RecordItem/RecordItem';
import CheckboxButton from '../CheckboxButton/CheckboxButton';
import CallItemWebIcon from '../../../../icons/CallItemWebIcon';
import CallTypeOutGoingIcon from '../../../../icons/CallTypeOutGoingIcon';
import CallItemPhoneIcon from '../../../../icons/CallItemPhoneIcon';
import formatTimeToString from '../../../../formatters/formatTimeToString';
import parserTelephoneNumber from '../../../../formatters/parserTelephoneNumber';
import './CallItem.css';


const CallItem = ({ call }) => {
  const { t } = useTranslation();
  const date = useMemo(() => {
    const newDate = new Date(call.date);
    return formatTimeToString(newDate);
  }, [call]);

  const duration = useMemo(() => {
    const durationInSecond = call.time;
    if (!durationInSecond) {
      return null;
    }
    const minutes = Math.floor(durationInSecond / 60);
    const seconds = Math.floor(durationInSecond % 60);
    const parsedSecond = seconds >=10 ? seconds : `0${seconds}`
    return `${minutes}:${parsedSecond}`;
  }, [call]);

  const rating = useMemo(() => {
    if (call.errors.includes('Скрипт не использован')) {
      return (
        <div className="noScript noScriptText">{t('context.ratings.scriptNotUsed')}</div>
      );
    }
  }, [call]);

  const telephoneNumber = useMemo(() => {
    return (
      <>
      <div>{parserTelephoneNumber(call.partner_data?.phone)}</div>
      <div className="partnerName">{call.partner_data?.name.replace(/[\\]+/g, '')}</div>
      </>
    );
  }, [call]);

  const callTypeClassNames = cn("callType", {
    'incomingType': call.in_out === 1,
    'redCallType': call.status === 'Не дозвонился' && !call.errors.includes('Скрипт не использован'),
    'greenCallType': call.in_out === 0 && call.status === 'Дозвонился',
    'blueCallType': call.in_out === 1 && call.status === 'Дозвонился',
  });

  return (
    <div className="callItemContainer">
      <div className="callItem">
        <div className="callItemBorder" />
        <div className="callItemCheckbox"><CheckboxButton /></div>
        <div className={callTypeClassNames}><CallTypeOutGoingIcon /></div>
        <div className="callItemTime headerNameText">{date}</div>
        <div className="personAvatar">
          <img src={call.person_avatar} alt="avatar" />
        </div>
        {!!call.from_site && <div className="callItemWeb"><CallItemWebIcon /></div>}
        <div className="callItemPhone"><CallItemPhoneIcon /></div>
        <div className="telephoneNumber telephoneNumberText">
          {telephoneNumber}
        </div>
        <div className="callItemSource callItemSourceText"><div>{call.source}</div></div>
        {call.status === 'Дозвонился' && <div className="callItemRating">{rating}</div>}
        <div className="callItemDuration headerNameText">{duration}</div>
        {duration && <div className="callItemRecord"><RecordItem recordId={call.record} duration={duration} /></div>}
      </div>
    </div>
  );
};

export default CallItem;