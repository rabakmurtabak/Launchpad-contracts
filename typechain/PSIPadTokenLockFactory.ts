/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "./common";

export interface PSIPadTokenLockFactoryInterface
  extends ethers.utils.Interface {
  functions: {
    "amountToUnlock(uint256)": FunctionFragment;
    "changeOwner(uint256,address)": FunctionFragment;
    "fee_aggregator()": FunctionFragment;
    "getTokenLocks(address)": FunctionFragment;
    "getTokensLockedCount()": FunctionFragment;
    "getUserLocks(address)": FunctionFragment;
    "initialize(address,address,uint256)": FunctionFragment;
    "lock(address,uint256,uint256,uint256)": FunctionFragment;
    "owner()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setFeeAggregator(address)": FunctionFragment;
    "setStableCoin(address)": FunctionFragment;
    "setStableCoinFee(uint256)": FunctionFragment;
    "stable_coin()": FunctionFragment;
    "stable_coin_fee()": FunctionFragment;
    "tokenToLocks(address,uint256)": FunctionFragment;
    "tokensLocked(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "unlock(uint256,uint256)": FunctionFragment;
    "unlockAvailable(uint256)": FunctionFragment;
    "unlockedAmount(uint256)": FunctionFragment;
    "userTokensLocked(address,uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "amountToUnlock",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "changeOwner",
    values: [BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "fee_aggregator",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTokenLocks",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getTokensLockedCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getUserLocks",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [string, string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "lock",
    values: [string, BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setFeeAggregator",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStableCoin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setStableCoinFee",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "stable_coin",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "stable_coin_fee",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokenToLocks",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "tokensLocked",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockAvailable",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "unlockedAmount",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "userTokensLocked",
    values: [string, BigNumberish]
  ): string;

  decodeFunctionResult(
    functionFragment: "amountToUnlock",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "changeOwner",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "fee_aggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokenLocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTokensLockedCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getUserLocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "lock", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setFeeAggregator",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStableCoin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setStableCoinFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stable_coin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "stable_coin_fee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokenToLocks",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensLocked",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "unlockAvailable",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "unlockedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "userTokensLocked",
    data: BytesLike
  ): Result;

  events: {
    "OwnerChanged(uint256,address,address)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "TokenLocked(uint256,address,address,uint256)": EventFragment;
    "TokenUnlocked(uint256,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "OwnerChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenLocked"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "TokenUnlocked"): EventFragment;
}

export type OwnerChangedEvent = TypedEvent<
  [BigNumber, string, string],
  { lockId: BigNumber; oldOwner: string; newOwner: string }
>;

export type OwnerChangedEventFilter = TypedEventFilter<OwnerChangedEvent>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string],
  { previousOwner: string; newOwner: string }
>;

export type OwnershipTransferredEventFilter =
  TypedEventFilter<OwnershipTransferredEvent>;

export type TokenLockedEvent = TypedEvent<
  [BigNumber, string, string, BigNumber],
  { lockId: BigNumber; token: string; owner: string; amount: BigNumber }
>;

export type TokenLockedEventFilter = TypedEventFilter<TokenLockedEvent>;

export type TokenUnlockedEvent = TypedEvent<
  [BigNumber, string, BigNumber],
  { lockId: BigNumber; token: string; amount: BigNumber }
>;

export type TokenUnlockedEventFilter = TypedEventFilter<TokenUnlockedEvent>;

export interface PSIPadTokenLockFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PSIPadTokenLockFactoryInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    amountToUnlock(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    changeOwner(
      lockId: BigNumberish,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    fee_aggregator(overrides?: CallOverrides): Promise<[string]>;

    getTokenLocks(
      token: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    getTokensLockedCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    getUserLocks(
      user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]]>;

    initialize(
      _fee_aggregator: string,
      _stable_coin: string,
      _stable_coin_fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    lock(
      token: string,
      amount: BigNumberish,
      start_time: BigNumberish,
      duration: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setFeeAggregator(
      _fee_aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStableCoin(
      _stable_coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setStableCoinFee(
      _stable_coin_fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    stable_coin(overrides?: CallOverrides): Promise<[string]>;

    stable_coin_fee(overrides?: CallOverrides): Promise<[BigNumber]>;

    tokenToLocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    tokensLocked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        owner: string;
        token: string;
        amount: BigNumber;
        start_time: BigNumber;
        duration: BigNumber;
        amountUnlocked: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlock(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockAvailable(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    unlockedAmount(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    userTokensLocked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  amountToUnlock(
    lockId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  changeOwner(
    lockId: BigNumberish,
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  fee_aggregator(overrides?: CallOverrides): Promise<string>;

  getTokenLocks(token: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  getTokensLockedCount(overrides?: CallOverrides): Promise<BigNumber>;

  getUserLocks(user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  initialize(
    _fee_aggregator: string,
    _stable_coin: string,
    _stable_coin_fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  lock(
    token: string,
    amount: BigNumberish,
    start_time: BigNumberish,
    duration: BigNumberish,
    overrides?: PayableOverrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setFeeAggregator(
    _fee_aggregator: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStableCoin(
    _stable_coin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setStableCoinFee(
    _stable_coin_fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  stable_coin(overrides?: CallOverrides): Promise<string>;

  stable_coin_fee(overrides?: CallOverrides): Promise<BigNumber>;

  tokenToLocks(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  tokensLocked(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
      owner: string;
      token: string;
      amount: BigNumber;
      start_time: BigNumber;
      duration: BigNumber;
      amountUnlocked: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlock(
    lockId: BigNumberish,
    amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockAvailable(
    lockId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  unlockedAmount(
    lockId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  userTokensLocked(
    arg0: string,
    arg1: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    amountToUnlock(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeOwner(
      lockId: BigNumberish,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    fee_aggregator(overrides?: CallOverrides): Promise<string>;

    getTokenLocks(
      token: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    getTokensLockedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getUserLocks(user: string, overrides?: CallOverrides): Promise<BigNumber[]>;

    initialize(
      _fee_aggregator: string,
      _stable_coin: string,
      _stable_coin_fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    lock(
      token: string,
      amount: BigNumberish,
      start_time: BigNumberish,
      duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    setFeeAggregator(
      _fee_aggregator: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStableCoin(
      _stable_coin: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setStableCoinFee(
      _stable_coin_fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    stable_coin(overrides?: CallOverrides): Promise<string>;

    stable_coin_fee(overrides?: CallOverrides): Promise<BigNumber>;

    tokenToLocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensLocked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [string, string, BigNumber, BigNumber, BigNumber, BigNumber] & {
        owner: string;
        token: string;
        amount: BigNumber;
        start_time: BigNumber;
        duration: BigNumber;
        amountUnlocked: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    unlock(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockAvailable(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    unlockedAmount(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userTokensLocked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {
    "OwnerChanged(uint256,address,address)"(
      lockId?: BigNumberish | null,
      oldOwner?: string | null,
      newOwner?: string | null
    ): OwnerChangedEventFilter;
    OwnerChanged(
      lockId?: BigNumberish | null,
      oldOwner?: string | null,
      newOwner?: string | null
    ): OwnerChangedEventFilter;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;
    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): OwnershipTransferredEventFilter;

    "TokenLocked(uint256,address,address,uint256)"(
      lockId?: BigNumberish | null,
      token?: string | null,
      owner?: string | null,
      amount?: null
    ): TokenLockedEventFilter;
    TokenLocked(
      lockId?: BigNumberish | null,
      token?: string | null,
      owner?: string | null,
      amount?: null
    ): TokenLockedEventFilter;

    "TokenUnlocked(uint256,address,uint256)"(
      lockId?: BigNumberish | null,
      token?: string | null,
      amount?: null
    ): TokenUnlockedEventFilter;
    TokenUnlocked(
      lockId?: BigNumberish | null,
      token?: string | null,
      amount?: null
    ): TokenUnlockedEventFilter;
  };

  estimateGas: {
    amountToUnlock(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    changeOwner(
      lockId: BigNumberish,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    fee_aggregator(overrides?: CallOverrides): Promise<BigNumber>;

    getTokenLocks(token: string, overrides?: CallOverrides): Promise<BigNumber>;

    getTokensLockedCount(overrides?: CallOverrides): Promise<BigNumber>;

    getUserLocks(user: string, overrides?: CallOverrides): Promise<BigNumber>;

    initialize(
      _fee_aggregator: string,
      _stable_coin: string,
      _stable_coin_fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    lock(
      token: string,
      amount: BigNumberish,
      start_time: BigNumberish,
      duration: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setFeeAggregator(
      _fee_aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStableCoin(
      _stable_coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setStableCoinFee(
      _stable_coin_fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    stable_coin(overrides?: CallOverrides): Promise<BigNumber>;

    stable_coin_fee(overrides?: CallOverrides): Promise<BigNumber>;

    tokenToLocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    tokensLocked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlock(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockAvailable(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    unlockedAmount(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    userTokensLocked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    amountToUnlock(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    changeOwner(
      lockId: BigNumberish,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    fee_aggregator(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTokenLocks(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getTokensLockedCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getUserLocks(
      user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _fee_aggregator: string,
      _stable_coin: string,
      _stable_coin_fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    lock(
      token: string,
      amount: BigNumberish,
      start_time: BigNumberish,
      duration: BigNumberish,
      overrides?: PayableOverrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setFeeAggregator(
      _fee_aggregator: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStableCoin(
      _stable_coin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setStableCoinFee(
      _stable_coin_fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    stable_coin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    stable_coin_fee(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokenToLocks(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    tokensLocked(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlock(
      lockId: BigNumberish,
      amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockAvailable(
      lockId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    unlockedAmount(
      lockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    userTokensLocked(
      arg0: string,
      arg1: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
