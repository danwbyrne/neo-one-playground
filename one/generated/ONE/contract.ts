/* @hash 855a79c0fabbc477f8b50911ca5517f0 */
// tslint:disable
/* eslint-disable */
import { Client, ReadClient, SmartContractDefinition } from '@neo-one/client';
import { oneABI } from './abi';
import { ONEReadSmartContract, ONESmartContract } from './types';
import { sourceMaps } from '../sourceMaps';

const definition: SmartContractDefinition = {
  networks: {
    local: {
      address: 'AZZ6U62JTJU26HCjp3bACCZRs2PMT3mdLK',
    },
  },
  abi: oneABI,
  sourceMaps,
};

export const createONESmartContract = (client: Client): ONESmartContract =>
  client.smartContract<ONESmartContract>(definition);

export const createONEReadSmartContract = (client: ReadClient): ONEReadSmartContract =>
  client.smartContract<ONEReadSmartContract>({
    address: definition.networks[client.dataProvider.network].address,
    abi: definition.abi,
    sourceMaps: definition.sourceMaps,
  });
