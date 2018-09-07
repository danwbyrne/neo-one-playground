/* @hash 7276d4191b3840a9cc8493926e9d60ae */
// tslint:disable
/* eslint-disable */
import { Client, ReadClient, SmartContractDefinition } from '@neo-one/client';
import { smartDonationABI } from './abi';
import { SmartDonationReadSmartContract, SmartDonationSmartContract } from './types';
import { sourceMaps } from '../sourceMaps';

const definition: SmartContractDefinition = {
  networks: {
    local: {
      address: 'AG2iQCJ8HjeqAxzXh1kS6C8HyVjVQ1TEjd',
    },
  },
  abi: smartDonationABI,
  sourceMaps,
};

export const createSmartDonationSmartContract = (client: Client): SmartDonationSmartContract =>
  client.smartContract<SmartDonationSmartContract>(definition);

export const createSmartDonationReadSmartContract = (client: ReadClient): SmartDonationReadSmartContract =>
  client.smartContract<SmartDonationReadSmartContract>({
    address: definition.networks[client.dataProvider.network].address,
    abi: definition.abi,
    sourceMaps: definition.sourceMaps,
  });
