import {
  ai as aiAWS,
  analytics as analyticsAWS,
  application as applicationAWS,
  compute as computeAWS,
  database as databaseAWS,
  iot as iotAWS,
  network as networkAWS,
  versionArray as versionAWSArray,
  other as otherAWS,
  security as securityAWS,
  storage as storageAWS,
  tools as toolsAWS,
} from './aws'

import {
  ai as aiGCP,
  analytics as analyticsGCP,
  application as applicationGCP,
  compute as computeGCP,
  versionArray as versionGCPArray,
  database as databaseGCP,
  iot as iotGCP,
  network as networkGCP,
  other as otherGCP,
  security as securityGCP,
  storage as storageGCP,
  tools as toolsGCP,
} from './gcp'

export const leftSideBarData: any = {
  aws: {
    icon: 's',
    versions: versionAWSArray,
    tabs: [
      computeAWS,
      networkAWS,
      storageAWS,
      databaseAWS,
      securityAWS,
      toolsAWS,
      aiAWS,
      analyticsAWS,
      applicationAWS,
      iotAWS,
      otherAWS,
    ],
  },
  gcp: {
    icon: 's',
    versions: versionGCPArray,
    tabs: [
      computeGCP,
      networkGCP,
      storageGCP,
      databaseGCP,
      securityGCP,
      toolsGCP,
      aiGCP,
      analyticsGCP,
      applicationGCP,
      iotGCP,
      otherGCP,
    ],
  },
}

export const shortcutsData1 = [
  {
    type: 'Action',
    subType: [
      {
        shortcutType: 'CTRL + A',
        shortcutDescription: 'select all the nodes.',
      },
      {
        shortcutType: 'CTRL + C',
        shortcutDescription: 'copy selected nodes into clipboard.',
      },
      {
        shortcutType: 'CTRL + V',
        shortcutDescription: 'paste from clipboard.',
      },
      {
        shortcutType: 'CTRL + X',
        shortcutDescription: 'cut the selected nodes.',
      },
      {
        shortcutType: 'CTRL + L',
        shortcutDescription: 'lock/unlock the selected nodes.',
      },
      {
        shortcutType: 'CTRL + D',
        shortcutDescription: 'clone the selected nodes.',
      },
      {
        shortcutType: 'CTRL + z',
        shortcutDescription: 'undo.',
      },
      {
        shortcutType: 'CTRL + SHIFT + Z',
        shortcutDescription: 'redo (CTRL + Y).',
      },
      {
        shortcutType: 'DEL',
        shortcutDescription: 'delete select the nodes.',
      },
    ],
  },
]

export const shortcutsData2 = [
  {
    type: 'Design Area',
    subType: [
      {
        shortcutType: 'CMD/CTRL + K',
        shortcutDescription: 'open Commands Center..',
      },
      {
        shortcutType: '?',
        shortcutDescription: 'show this help (SHIFT + ?).',
      },
      {
        shortcutType: 'Plus sign (+)',
        shortcutDescription: 'zoom in.',
      },
      {
        shortcutType: 'Minus sign (-)',
        shortcutDescription: 'zoom out.',
      },
      {
        shortcutType: 'Scroll/CTRL + scroll',
        shortcutDescription: 'zoom in/out.',
      },
      {
        shortcutType: 'SHIFT + scroll',
        shortcutDescription: 'horizontal scroll',
      },
      {
        shortcutType: 'SPACE + drag',
        shortcutDescription: 'pan.',
      },
      {
        shortcutType: 'Arrow up',
        shortcutDescription: 'move the selected nodes up.',
      },
      {
        shortcutType: 'Arrow down',
        shortcutDescription: 'move the select the nodes down.',
      },
    ],
  },
]
