/* @hash 98a7634ee1227d4c3e60c4682b820d93 */
// tslint:disable
/* eslint-disable */
import { Client, ReadClient, SmartContractDefinition } from '@neo-one/client';
import { gasVacABI } from './abi';
import { GASVacReadSmartContract, GASVacSmartContract } from './types';
import { sourceMaps } from '../sourceMaps';

const definition: SmartContractDefinition = {
  networks: {
    local: {
      address: 'AHJj9PAhEKjTLdsppWr7swkV7yiXNxQM1e',
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
