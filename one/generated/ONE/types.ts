/* @hash 932533e9d73dfdc3b573fbceaa312903 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Event,
  Hash256String,
  InvocationTransaction,
  InvokeReceipt,
  InvokeReceiveTransactionOptions,
  InvokeSendTransactionOptions,
  ReadSmartContract,
  SmartContract,
  TransactionOptions,
  TransactionResult,
} from '@neo-one/client';
import BigNumber from 'bignumber.js';

export type ONEEvent = ONETransferEvent | ONEApproveSendTransferEvent | ONERevokeSendTransferEvent;

export interface ONETransferEventParameters {
  readonly from: AddressString | undefined;
  readonly to: AddressString | undefined;
  readonly amount: BigNumber;
}
export interface ONETransferEvent extends Event<'transfer', ONETransferEventParameters> {}
export interface ONEApproveSendTransferEventParameters {
  readonly from: AddressString;
  readonly to: AddressString;
  readonly amount: BigNumber;
}
export interface ONEApproveSendTransferEvent
  extends Event<'approveSendTransfer', ONEApproveSendTransferEventParameters> {}
export interface ONERevokeSendTransferEventParameters {
  readonly from: AddressString;
  readonly to: AddressString;
  readonly amount: BigNumber;
}
export interface ONERevokeSendTransferEvent extends Event<'revokeSendTransfer', ONERevokeSendTransferEventParameters> {}

export interface ONESmartContract extends SmartContract<ONEReadSmartContract> {
  readonly amountPerNEO: () => Promise<BigNumber>;
  readonly approveReceiveTransfer: (
    from: AddressString,
    amount: BigNumber,
    asset: AddressString,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, ONEEvent>, InvocationTransaction>>;
  readonly approveSendTransfer: (
    from: AddressString,
    to: AddressString,
    amount: BigNumber,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, ONEEvent>, InvocationTransaction>>;
  readonly approvedTransfer: (from: AddressString, to: AddressString) => Promise<BigNumber>;
  readonly balanceOf: (address: AddressString) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly deploy: (
    owner?: AddressString,
    startTimeSeconds?: BigNumber,
    icoDurationSeconds?: BigNumber,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, ONEEvent>, InvocationTransaction>>;
  readonly icoDurationSeconds: () => Promise<BigNumber>;
  readonly mintTokens: (
    options?: InvokeReceiveTransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, ONEEvent>, InvocationTransaction>>;
  readonly name: () => Promise<string>;
  readonly onRevokeSendTransfer: (
    from: AddressString,
    amount: BigNumber,
    asset: AddressString,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, ONEEvent>, InvocationTransaction>>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: (
    transactionHash: Hash256String,
    options?: InvokeSendTransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, ONEEvent>, InvocationTransaction>>;
  readonly remaining: () => Promise<BigNumber>;
  readonly revokeSendTransfer: (
    from: AddressString,
    to: AddressString,
    amount: BigNumber,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, ONEEvent>, InvocationTransaction>>;
  readonly startTimeSeconds: () => Promise<BigNumber>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
  readonly transfer: (
    from: AddressString,
    to: AddressString,
    amount: BigNumber,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, ONEEvent>, InvocationTransaction>>;
}

export interface ONEReadSmartContract extends ReadSmartContract<ONEEvent> {
  readonly amountPerNEO: () => Promise<BigNumber>;
  readonly approvedTransfer: (from: AddressString, to: AddressString) => Promise<BigNumber>;
  readonly balanceOf: (address: AddressString) => Promise<BigNumber>;
  readonly decimals: () => Promise<BigNumber>;
  readonly icoDurationSeconds: () => Promise<BigNumber>;
  readonly name: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
  readonly remaining: () => Promise<BigNumber>;
  readonly startTimeSeconds: () => Promise<BigNumber>;
  readonly symbol: () => Promise<string>;
  readonly totalSupply: () => Promise<BigNumber>;
}
