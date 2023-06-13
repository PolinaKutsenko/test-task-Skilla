import React, { useMemo, useState } from 'react';
import cn from 'classnames';

import CheckboxButtonIcon from '../../../../icons/CheckboxButtonIcon';
import CheckboxActiveIcon from '../../../../icons/CheckboxActiveIcon';
import './CheckboxButton.css';


const CheckboxButton = () => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => setIsPressed(!isPressed);
  
  return (
    <div className="checkboxButton" onClick={handlePress}>
     <CheckboxButtonIcon />
     {isPressed && <CheckboxActiveIcon />}
    </div>
  );
};

export default CheckboxButton;