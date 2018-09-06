/* @hash c87c7883e4253df01c5538af01d3db76 */
// tslint:disable
/* eslint-disable */
import { FeatureTestSmartContract } from './FeatureTest/types';
import { GASVacSmartContract } from './GASVac/types';
import { ICOSmartContract } from './ICO/types';
import { WrappedNEOSmartContract } from './WrappedNEO/types';

export interface Contracts {
  readonly featureTest: FeatureTestSmartContract;
  readonly gasVac: GASVacSmartContract;
  readonly ico: ICOSmartContract;
  readonly wrappedNeo: WrappedNEOSmartContract;
}
