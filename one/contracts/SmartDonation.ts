import { Address, constant, Deploy, Fixed, LinkedSmartContract, MapStorage, SmartContract } from '@neo-one/smart-contract';
import { ONE } from './ONE';

const One = LinkedSmartContract.for<ONE>();

export class SmartDonation extends SmartContract {
  public readonly properties = {
    codeVersion: '1.0',
    author: 'danwbyrne',
    email: 'daniel.byrne@neotracker.io',
    description: 'GAS Vacuum',
  };

  private mutableGlobalMessage = '';
  private mutableCurrentBalance = 0;
  private mutableBalance = 0;
  private readonly contribStore = MapStorage.for<Address, Fixed<8>>();
  private readonly messageStore = MapStorage.for<Address, string>();


  public constructor(
    public readonly owner: Address = Deploy.senderAddress,
  ) {
    super();
    if (!Address.isCaller(owner)) {
      throw new Error('Sender was not the owner.');
    }
  }

  @constant
  public get message(): string {
    return this.mutableGlobalMessage;
  }

  @constant
  public getContribMessage(address: Address): string | undefined {
    return this.messageStore.get(address);
  }

  @constant
  public getContribAmount(): Fixed<8> {
    return this.mutableBalance;
  }

  @constant
  public getCurrentBalance(): Fixed<8> {
    return this.mutableCurrentBalance;
  }

  public approveReceiveTransfer(_from: Address, _amount: Fixed<0>, _asset: Address) {
    return false;
  }

  public onRevokeSendTransfer(_from: Address, _amount: Fixed<0>, _asset: Address) {
    return false;
  }

  public contribute(from: Address, amount: Fixed<8>, message?: string): boolean {
    if (One.transfer(from, this.address, amount)) {
      this.incrementBalances(amount);
      const balance = this.contribStore.get(from);
      this.contribStore.set(from, balance === undefined ? amount : balance + amount);
      this.messageStore.set(from, message === undefined ? '' : message);

      return true;
    }

    return false;
  }

  public collect(): boolean {
    if (this.checkCaller(this.owner)) {
      const confirmation = One.transfer(this.address, this.owner, this.getCurrentBalance());
      if (confirmation) {
        this.mutableCurrentBalance = 0;
      }

      return confirmation;
    }

    return false;
  }

  public updateContributorMessage(address: Address, message: string): void {
    this.checkContributor(address);
    // this.checkMessage(message);

    this.messageStore.set(address, message);
  }

  public updateContributionMessage(address: Address, message: string): void {
    this.checkOwner(address);
    // this.checkMessage(message);

    this.mutableGlobalMessage = message;
  }

  private checkContributor(address: Address): boolean {
    if (this.contribStore.get(address) === undefined) {
      return false;
    }

    return true;
  }

  private checkOwner(address: Address): boolean {
    if (address !== this.owner) {
      return false;
    }

    return true;
  }

  private checkCaller(address: Address) {
    if (!Address.isCaller(address)) {
      return false;
    }

    return true;
  }

  private incrementBalances(amount: Fixed<8>): void {
    this.mutableBalance += amount;
    this.mutableCurrentBalance += amount;
  }
  // you could screen the message if you wanted
  // private checkMessage(message: string, charLimit: number): void {
  //   if (message.length > charLimit) {
  //     throw new Error(`That message is WAY too long. (MAX: ${charLimit})`);
  //   }
  // }
}
