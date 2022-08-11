import abiJSON from "./Web3RSVP.json";
import { ethers } from "ethers";

function connectContract() {
    const contractAddress = "0x53e45b9c9080099a6e6ecddb6ce5a4a543ee1f1e";
    const contractABI = abiJSON.abi;
    let rsvpContract;
    try {
        const { etherum } = window;

        if (etherum) {
            // checking for eth object in the window
            const provider = new ethers.providers.Web3Provider(etherum);
            const signer = provider.getSigner();
            // connection to the contract
            rsvpContract = new ethers.Contract(contractAddress, contractABI, signer);
        } else {
            console.log("Ethereum object doesn't exist!");
        }
    } catch (error) {
        console.log("ERROR", error);
    }
    return rsvpContract;
}


export default connectContract;