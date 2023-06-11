import React from 'react';
import cn from 'classnames';

import './SidebarMenuItem.css';


const SidebarMenuItem = ({icon, itemTitle, isActive}) => {
  const sidebarItenClassName = cn('sidebarItem', {
    isActive: isActive,
  });

  return (
    <div className={sidebarItenClassName}>
      <div className="currentLine" />
      <div className="itemIcon">{icon}</div>
      <div className="sidebarItemText">{itemTitle}</div>
      {isActive && <div id="yellowDote" />}
    </div>
  );
};

export default SidebarMenuItem;