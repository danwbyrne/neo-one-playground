/* @hash 39bc11bc6cac108e7428386c960494d9 */
// tslint:disable
/* eslint-disable */
import {
  AddressString,
  Event,
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

export type SmartDonationEvent =
  | SmartDonationTransferEvent
  | SmartDonationApproveSendTransferEvent
  | SmartDonationRevokeSendTransferEvent;

export interface SmartDonationTransferEventParameters {
  readonly from: AddressString | undefined;
  readonly to: AddressString | undefined;
  readonly amount: BigNumber;
}
export interface SmartDonationTransferEvent extends Event<'transfer', SmartDonationTransferEventParameters> {}
export interface SmartDonationApproveSendTransferEventParameters {
  readonly from: AddressString;
  readonly to: AddressString;
  readonly amount: BigNumber;
}
export interface SmartDonationApproveSendTransferEvent
  extends Event<'approveSendTransfer', SmartDonationApproveSendTransferEventParameters> {}
export interface SmartDonationRevokeSendTransferEventParameters {
  readonly from: AddressString;
  readonly to: AddressString;
  readonly amount: BigNumber;
}
export interface SmartDonationRevokeSendTransferEvent
  extends Event<'revokeSendTransfer', SmartDonationRevokeSendTransferEventParameters> {}

export interface SmartDonationSmartContract extends SmartContract<SmartDonationReadSmartContract> {
  readonly approveReceiveTransfer: (
    from: AddressString,
    amount: BigNumber,
    asset: AddressString,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, SmartDonationEvent>, InvocationTransaction>>;
  readonly collect: (
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, SmartDonationEvent>, InvocationTransaction>>;
  readonly contribute: (
    from: AddressString,
    amount: BigNumber,
    message?: string,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, SmartDonationEvent>, InvocationTransaction>>;
  readonly deploy: (
    owner?: AddressString,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, SmartDonationEvent>, InvocationTransaction>>;
  readonly getContribAmount: () => Promise<BigNumber>;
  readonly getContribMessage: (address: AddressString) => Promise<string | undefined>;
  readonly getCurrentBalance: () => Promise<BigNumber>;
  readonly message: () => Promise<string>;
  readonly onRevokeSendTransfer: (
    from: AddressString,
    amount: BigNumber,
    asset: AddressString,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, SmartDonationEvent>, InvocationTransaction>>;
  readonly owner: () => Promise<AddressString>;
  readonly refundAssets: (
    transactionHash: Hash256String,
    options?: InvokeSendTransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<boolean, SmartDonationEvent>, InvocationTransaction>>;
  readonly updateContributionMessage: (
    address: AddressString,
    message: string,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, SmartDonationEvent>, InvocationTransaction>>;
  readonly updateContributorMessage: (
    address: AddressString,
    message: string,
    options?: TransactionOptions,
  ) => Promise<TransactionResult<InvokeReceipt<undefined, SmartDonationEvent>, InvocationTransaction>>;
}

export interface SmartDonationReadSmartContract extends ReadSmartContract<SmartDonationEvent> {
  readonly getContribAmount: () => Promise<BigNumber>;
  readonly getContribMessage: (address: AddressString) => Promise<string | undefined>;
  readonly getCurrentBalance: () => Promise<BigNumber>;
  readonly message: () => Promise<string>;
  readonly owner: () => Promise<AddressString>;
}
