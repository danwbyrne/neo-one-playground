import { AddressString, Hash256 } from '@neo-one/client';
import BigNumber from 'bignumber.js';
import { withContracts } from '../generated/test';

jest.setTimeout(30000);

describe('SmartDonation', () => {
  test('We can contribute & MORE', async () => {
    await withContracts(async ({ developerClient, smartDonation, one, masterAccountID, networkName }) => {
      await developerClient.fastForwardOffset(60 * 60);

      const approveContribution = async (from: AddressString, to: AddressString, amount: BigNumber): Promise<void> => {
        const send = await one.approveSendTransfer(from, to, amount);
        const receipt = await send.confirmed({ timeoutMS: 2500 });
        if (receipt.result.state === 'FAULT') {
          throw new Error(receipt.result.message);
        }
      };

      const masterAddress = masterAccountID.address;
      const contractAddress = smartDonation.definition.networks[networkName].address;

      const mintResult = await one.mintTokens({
        sendTo: [
          {
            amount: new BigNumber(100),
            asset: Hash256.NEO,
          },
        ],
      });

      const mintReceipt = await mintResult.confirmed();
      if (mintReceipt.result.state === 'FAULT') {
        throw new Error(mintReceipt.result.message);
      }

      await approveContribution(masterAddress, contractAddress, new BigNumber('100'));
      const contribSend = await smartDonation.contribute(masterAddress, new BigNumber('100'));
      const contribReceipt = await contribSend.confirmed({ timeoutMS: 2500 });
      if (contribReceipt.result.state === 'FAULT') {
        throw new Error(contribReceipt.result.message);
      }

      const balance = await smartDonation.getContribAmount();
      const currentBalance = await smartDonation.getCurrentBalance();

      expect(currentBalance).toEqual(balance);
      expect(balance).toEqual(new BigNumber('100'));

      const collectSend = await smartDonation.collect();
      const collectReceipt = await collectSend.confirmed({ timeoutMS: 2500 });
      if (collectReceipt.result.state === 'FAULT') {
        throw new Error(collectReceipt.result.message);
      }

      const newBalance = await smartDonation.getContribAmount();
      const newCurrentBal = await smartDonation.getCurrentBalance();

      expect(newBalance).toEqual(new BigNumber('100'));
      expect(newCurrentBal).toEqual(new BigNumber('0'));
    });
  });
});
