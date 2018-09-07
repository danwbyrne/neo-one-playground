/* @hash bcb4f6f28c1dcd399ada508a3e8a73ec */
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
      { name: 'ONE', filePath: path.resolve(__dirname, '../contracts/ONE.ts') },
      { name: 'WrappedNEO', filePath: path.resolve(__dirname, '../contracts/WrappedNEO.ts') },
      { name: 'SmartDonation', filePath: path.resolve(__dirname, '../contracts/SmartDonation.ts') },
    ],
    test,
    options,
  );
