/* @hash a5517012c1bffe76fdde5112f282325b */
// tslint:disable
/* eslint-disable */
import { ABI } from '@neo-one/client';

export const gasVacABI: ABI = {
  events: [],
  functions: [
    {
      constant: true,
      name: 'mutableGlobalMessage',
      parameters: [],
      returnType: {
        optional: false,
        type: 'String',
      },
    },
    {
      name: 'setMutableGlobalMessage',
      parameters: [
        {
          name: 'mutableGlobalMessage',
          optional: false,
          type: 'String',
        },
      ],
      returnType: {
        type: 'Void',
      },
    },
    {
      constant: true,
      name: 'owner',
      parameters: [],
      returnType: {
        optional: false,
        type: 'Address',
      },
    },
    {
      constant: true,
      name: 'message',
      parameters: [],
      returnType: {
        optional: false,
        type: 'String',
      },
    },
    {
      claim: false,
      constant: true,
      name: 'getContribMessage',
      parameters: [
        {
          name: 'address',
          optional: false,
          type: 'Address',
        },
      ],
      receive: false,
      returnType: {
        optional: true,
        type: 'String',
      },
      send: false,
    },
    {
      claim: false,
      constant: true,
      name: 'getContribAmount',
      parameters: [
        {
          name: 'address',
          optional: false,
          type: 'Address',
        },
      ],
      receive: false,
      returnType: {
        decimals: 8,
        optional: true,
        type: 'Integer',
      },
      send: false,
    },
    {
      claim: false,
      constant: false,
      name: 'contribute',
      parameters: [
        {
          name: 'address',
          optional: false,
          type: 'Address',
        },
        {
          name: 'message',
          optional: true,
          type: 'String',
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
      claim: false,
      constant: false,
      name: 'updateContributorMessage',
      parameters: [
        {
          name: 'address',
          optional: false,
          type: 'Address',
        },
        {
          name: 'message',
          optional: false,
          type: 'String',
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
      claim: false,
      constant: false,
      name: 'updateContributionMessage',
      parameters: [
        {
          name: 'address',
          optional: false,
          type: 'Address',
        },
        {
          name: 'message',
          optional: false,
          type: 'String',
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
      parameters: [
        {
          default: {
            type: 'sender',
          },
          name: 'owner',
          optional: true,
          type: 'Address',
        },
      ],
      returnType: {
        type: 'Boolean',
      },
    },
  ],
};
