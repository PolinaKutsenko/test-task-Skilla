import React, { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import AddOrderButton from '../AddOrderButton/AddOrderButton';
import PaymentButton from '../PaymentButton/PaymentButton';
import SidebarMenuItem from '../SidebarMenuItem/SidebarMenuItem';
import SkillaLogoIcon from '../../../icons/SkillaLogoIcon';
import TotalIcon from '../../../icons/TotalsIcon';
import OrdersIcon from '../../../icons/OrdersIcon';
import MessagesIcon from '../../../icons/MessagesIcon';
import CallsIcon from '../../../icons/CallsIcon';
import CounterpartiesIcon from '../../../icons/CounterpartiesIcon';
import DocumentsIcon from '../../../icons/DocumentsIcon';
import PerformersIcon from '../../../icons/PerformersIcon';
import ReportsIcon from '../../../icons/ReportsIcon';
import KnowledgeBaseIcon from '../../../icons/KnowledgeBaseIcon';
import SettingsIcon from '../../../icons/SettingsIcon';
import './Sidebar.css'


const Sidebar = () => {
  const { t } = useTranslation();

  const sidebarList = useMemo(() => (
    <div id="sidebarListContainer">
      <SidebarMenuItem
        icon={<TotalIcon />}
        itemTitle={t('sidebar.totals')}
        isActive={false}
      />
      <SidebarMenuItem
        icon={<OrdersIcon />}
        itemTitle={t('sidebar.orders')}
        isActive={false}
      />
      <SidebarMenuItem
        icon={<MessagesIcon />}
        itemTitle={t('sidebar.messages')}
        isActive={false}
      />
      <SidebarMenuItem
        icon={<CallsIcon />}
        itemTitle={t('sidebar.calls')}
        isActive={true}
      />
      <SidebarMenuItem
        icon={<CounterpartiesIcon />}
        itemTitle={t('sidebar.counterparties')}
        isActive={false}
      />
      <SidebarMenuItem icon={<DocumentsIcon />}
        itemTitle={t('sidebar.documents')}
        isActive={false}
      />
      <SidebarMenuItem
        icon={<PerformersIcon />}
        itemTitle={t('sidebar.performers')}
        isActive={false}
      />
      <SidebarMenuItem
        icon={<ReportsIcon />}
        itemTitle={t('sidebar.reports')}
        isActive={false}
      />
      <SidebarMenuItem
        icon={<KnowledgeBaseIcon />}
        itemTitle={t('sidebar.knowledgeBase')}
        isActive={false}
      />
      <SidebarMenuItem
        icon={<SettingsIcon />}
        itemTitle={t('sidebar.settings')}
        isActive={false}
      />
    </div>
  ), [t]);

  return (
    <div id="sidebar">
      <div id="sidebarContainer">
        <div id="sidebarLogo">
          <SkillaLogoIcon />
        </div>
        {sidebarList}
        <AddOrderButton />
        <PaymentButton />
      </div>
    </div>
  );
};

export default Sidebar;