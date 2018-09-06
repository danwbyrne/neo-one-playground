/* @hash 211db8e8c28e0cd970e33aa028112826 */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const gasVacABI: ABI = {
  events: [],
  functions: [
    {
      claim: false,
      constant: false,
      name: 'vacuum',
      parameters: [
        {
          name: 'address',
          optional: false,
          type: 'Address',
        },
      ],
      receive: false,
      returnType: {
        optional: false,
        type: 'Void',
      },
      send: false,
    },
    {
      name: 'refundAssets',
      parameters: [
        {
          name: 'transactionHash',
          type: 'Hash256',
        },
      ],
      returnType: {
        type: 'Boolean',
      },
      send: true,
    },
    {
      name: 'deploy',
      parameters: [],
      returnType: {
        type: 'Boolean',
      },
    },
  ],
};
