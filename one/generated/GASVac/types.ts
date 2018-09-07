/* @hash 42ec01c64584ddd1ef8e39ae3ab0acba */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Hash256String,
  InvocationTransaction,
  InvokeReceipt,
  InvokeSendTransactionOptions,
  ReadSmartContract,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export type GASVacEvent = never;

export interface GASVacSmartContract extends SmartContract<GASVacReadSmartContract> {
  readonly contribute: (
    address: AddressString,
    message?: string,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, GASVacEvent>, InvocationTransaction>>;
  readonly deploy: (
    owner?: AddressString,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, GASVacEvent>, InvocationTransaction>>;
  readonly getContribAmount: (address: AddressString) => Promise<BigNumber | undefined>;
  readonly getContribMessage: (address: AddressString) => Promise<string | undefined>;
  readonly message: () => Promise<string>;
  readonly mutableGlobalMessage: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: (
    transactionHash: Hash256String,
    options?: InvokeSendTransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, GASVacEvent>, InvocationTransaction>>;
  readonly setMutableGlobalMessage: (
    mutableGlobalMessage: string,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, GASVacEvent>, InvocationTransaction>>;
  readonly updateContributionMessage: (
    address: AddressString,
    message: string,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, GASVacEvent>, InvocationTransaction>>;
  readonly updateContributorMessage: (
    address: AddressString,
    message: string,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, GASVacEvent>, InvocationTransaction>>;
}

export interface GASVacReadSmartContract extends ReadSmartContract<GASVacEvent> {
  readonly getContribAmount: (address: AddressString) => Promise<BigNumber | undefined>;
  readonly getContribMessage: (address: AddressString) => Promise<string | undefined>;
  readonly message: () => Promise<string>;
  readonly mutableGlobalMessage: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
}
