import React, { useMemo } from 'react';
import cn from 'classnames';

import RecordItem from '../RecordItem/RecordItem';
import CheckboxButton from '../CheckboxButton/CheckboxButton';
import CallItemWebIcon from '../../../../icons/CallItemWebIcon';
import CallTypeOutGoingIcon from '../../../../icons/CallTypeOutGoingIcon';
import CallItemPhoneIcon from '../../../../icons/CallItemPhoneIcon';
import formatTimeToString from '../../../../formatters/formatTimeToString';
import './CallItem.css';


const CallItem = ({ call }) => {

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
    if (call.errors) {

    }
  }, []);

  const callTypeClassNames = cn("callType", {
    'incomingType': call.in_out === 1,
    'redCallType': call.status === 'Не дозвонился',
    'greenCallType': call.in_out === 0 && call.status === 'Дозвонился',
    'blueCallType': call.in_out === 1 && call.status === 'Дозвонился',
  });

  return (
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
      <div className="telephoneNumber">

      </div>
      <div className="callItemSource callItemSourceText"><div>{call.source}</div></div>
      {call.status === 'Дозвонился' && <div className="callItemRating"></div>}
      <div className="callItemDuration headerNameText">{duration}</div>
      {duration && <div className="callItemRecord"><RecordItem duration={duration} /></div>}
    </div>
  );
};

export default CallItem;