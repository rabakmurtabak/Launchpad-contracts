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

export interface IFeeAggregatorInterface extends ethers.utils.Interface {
  functions: {
    "addFeeToken(address)": FunctionFragment;
    "addTokenFee(address,uint256)": FunctionFragment;
    "isFeeToken(address)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "addFeeToken", values: [string]): string;
  encodeFunctionData(
    functionFragment: "addTokenFee",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "isFeeToken", values: [string]): string;

  decodeFunctionResult(
    functionFragment: "addFeeToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addTokenFee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "isFeeToken", data: BytesLike): Result;

  events: {};
}

export interface IFeeAggregator extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IFeeAggregatorInterface;

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
    addFeeToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addTokenFee(
      token: string,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    isFeeToken(token: string, overrides?: CallOverrides): Promise<[boolean]>;
  };

  addFeeToken(
    token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addTokenFee(
    token: string,
    fee: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  isFeeToken(token: string, overrides?: CallOverrides): Promise<boolean>;

  callStatic: {
    addFeeToken(token: string, overrides?: CallOverrides): Promise<void>;

    addTokenFee(
      token: string,
      fee: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    isFeeToken(token: string, overrides?: CallOverrides): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    addFeeToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addTokenFee(
      token: string,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    isFeeToken(token: string, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    addFeeToken(
      token: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addTokenFee(
      token: string,
      fee: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    isFeeToken(
      token: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
