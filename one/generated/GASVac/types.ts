/* @hash 26b3fc3134f6e3df019276dacab94eec */
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

export type GASVacEvent = never;

export interface GASVacSmartContract extends SmartContract<GASVacReadSmartContract> {
  readonly deploy: (
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, GASVacEvent>, InvocationTransaction>>;
  readonly refundAssets: (
    transactionHash: Hash256String,
    options?: InvokeSendTransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, GASVacEvent>, InvocationTransaction>>;
  readonly vacuum: (
    address: AddressString,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, GASVacEvent>, InvocationTransaction>>;
}

export interface GASVacReadSmartContract extends ReadSmartContract<GASVacEvent> {}
