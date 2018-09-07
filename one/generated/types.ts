/* @hash df6697ea7f4f97337536652ce9c981a1 */
// tslint:disable
/* eslint-disable */
import { FeatureTestSmartContract } from './FeatureTest/types';
import { ONESmartContract } from './ONE/types';
import { SmartDonationSmartContract } from './SmartDonation/types';
import { WrappedNEOSmartContract } from './WrappedNEO/types';

export interface Contracts {
  readonly featureTest: FeatureTestSmartContract;
  readonly one: ONESmartContract;
  readonly smartDonation: SmartDonationSmartContract;
  readonly wrappedNeo: WrappedNEOSmartContract;
}
