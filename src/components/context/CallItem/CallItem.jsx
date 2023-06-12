import React, { useMemo } from 'react';
import cn from 'classnames';

import CallItemWebIcon from '../../../icons/CallItemWebIcon';
import CallTypeOutGoingIcon from '../../../icons/CallTypeOutGoingIcon';
import formatTimeToString from '../../../formatters/formatTimeToString';
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
    if (call.errors)
  });

  const callTypeClassNames = cn("callType", {
    'incomingType': call.in_out === 1,
    'redCallType': call.status === 'Не дозвонился',
    'greenCallType': call.in_out === 0 && call.status === 'Дозвонился',
    'blueCallType': call.in_out === 1 && call.status === 'Дозвонился',
  });

  return (
    <div className="callItem">
      <div className="callItemBorder" />
      <div className={callTypeClassNames}><CallTypeOutGoingIcon /></div>
      <div className="callItemTime headerNameText">{date}</div>
      <div className="personAvatar">
        <img src={call.person_avatar} alt="avatar" />
      </div>
      {!!call.from_site && <div className="callItemWeb"><CallItemWebIcon /></div>}
      <div className="telephoneNumber">

      </div>
      <div className="callItemSource callItemSourceText"><div>{call.source}</div></div>
      {call.call.status === 'Дозвонился' && <div className="callItemRating"></div>}
      <div className="callItemDuration headerNameText">{duration}</div>
    </div>
  );
};

export default CallItem;