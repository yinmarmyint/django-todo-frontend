import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import React from 'react';
import Plan from '../../pages/plan/Plan';
import BillingHistory from '../../pages/plan/BillingHistory';

const TabBar = () => (
  <Tabs>
    <TabList>
      <Tab style={{ width: '50%' }}>PLAN</Tab>
      <Tab style={{ width: '50%' }}>BILLING HISTORY</Tab>
    </TabList>

    <TabPanel>
      <Plan />
    </TabPanel>
    <TabPanel>
      <BillingHistory />
    </TabPanel>
  </Tabs>
);

export default TabBar;
