/* @hash aebdda9f4860d4bef8d3b7077bb8dda0 */
// tslint:disable
/* eslint-disable */
import { Client, ReadClient, SmartContractDefinition } from '@neo-one/client';
import { gasVacABI } from './abi';
import { GASVacReadSmartContract, GASVacSmartContract } from './types';
import { sourceMaps } from '../sourceMaps';

const definition: SmartContractDefinition = {
  networks: {
    local: {
      address: 'AcATuW4bBBpk9BhLcKNZfGjhXfCSv4frqm',
    },
  },
  abi: gasVacABI,
  sourceMaps,
};

export const createGASVacSmartContract = (client: Client): GASVacSmartContract =>
  client.smartContract<GASVacSmartContract>(definition);

export const createGASVacReadSmartContract = (client: ReadClient): GASVacReadSmartContract =>
  client.smartContract<GASVacReadSmartContract>({
    address: definition.networks[client.dataProvider.network].address,
    abi: definition.abi,
    sourceMaps: definition.sourceMaps,
  });
