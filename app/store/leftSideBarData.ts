import {
  ai,
  analytics,
  application,
  compute,
  database,
  iot,
  network,
  other,
  security,
  storage,
  tools,
} from './aws';

export const leftSideBarData = {
  aws: {
    icon: 's',
    tabs: [
      compute,
      network,
      storage,
      database,
      security,
      tools,
      ai,
      analytics,
      application,
      iot,
      other,
    ],
  },
};
