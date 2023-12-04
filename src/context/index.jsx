import React, { useContext, createContext } from "react";
import { ConnectWallet } from "@thirdweb-dev/react";
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
    "0x261E50f8f521bdb5176c12e642864041948FBA9a"
  );
  /*const { mutateAsync: createCampaign } = useContractWrite(
    contract,
    "createCampaign"
  );*/
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

  return (
    <StateContext.Provider
      value={{
        connect,
        contract,
        address,
        addUser,
        getUser,
        firstStep,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
