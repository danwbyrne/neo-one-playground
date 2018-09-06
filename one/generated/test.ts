/* @hash 5650153e156e2218308cdeb9a6abaf94 */
// tslint:disable
/* eslint-disable */
import { TestOptions, withContracts as withContractsBase, WithContractsOptions } from '@neo-one/smart-contract-test';
import * as path from 'path';
import { Contracts } from './types';

export const withContracts = async (
  test: (contracts: Contracts & TestOptions) => Promise<void>,
  options?: WithContractsOptions,
): Promise<void> =>
  withContractsBase<Contracts>(
    [
      { name: 'FeatureTest', filePath: path.resolve(__dirname, '../contracts/FeatureTest.ts') },
      { name: 'GASVac', filePath: path.resolve(__dirname, '../contracts/GASVac.ts') },
      { name: 'ICO', filePath: path.resolve(__dirname, '../contracts/ICO.ts') },
      { name: 'WrappedNEO', filePath: path.resolve(__dirname, '../contracts/WrappedNEO.ts') },
    ],
    test,
    options,
  );
