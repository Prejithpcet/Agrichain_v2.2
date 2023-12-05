import React, { useContext, createContext } from "react";
//import { ConnectWallet } from "@thirdweb-dev/react";
import {
  useAddress,
  useContract,
  useMetamask,
  useConnect,
  useDisconnect,
} from "@thirdweb-dev/react";
import { ethers } from "ethers";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract(
    "0x3782ED30DCBC40D4DDCfA109D17f10C4D6fAf455"
  );
  const address = useAddress();
  const connect = useMetamask();
  const disconnect = useDisconnect();

  const addUser = async (formData) => {
    try {
      const data = await contract.call("userSignup", [
        formData.name, // title
        formData.location, // description
        formData.role, // target
      ]);

      console.log("contract call success", data);
    } catch (error) {
      console.log("contract call failure", error);
    }
  };

  const getUser = async (address) => {
    const user = await contract.call("getUserData", [address]);
    return user;
  };

  const verifyUserFn = async (address) => {
    await contract.call("verifyUser", [address]);
  };

  const getUserArray = async () => {
    const usersList = await contract.call("getAllUserDetails");
    return usersList;
  };

  const firstStep = async (formData) => {
    try {
      const firstStepData = await contract.call("createAFirstStep", [
        formData.product_name, // title
        formData.product_location, // description
        formData.product_description, // target
      ]);
    } catch (error) {
      console.log("Error in creating the first step", error);
    }
  };

  const getStepDetailsFn = async (add) => {
    try {
      const stepData = await contract.call("getStepDetails", [add]);
      return stepData;
    } catch (error) {
      console.error("Error fetching step details:", error);
    }
  };

  return (
    <StateContext.Provider
      value={{
        connect,
        contract,
        address,
        addUser,
        getUser,
        firstStep,
        getUserArray,
        verifyUserFn,
        getStepDetailsFn,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
