/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractFactory, Signer } from "ethers";
import { Provider } from "ethers/providers";
import { UnsignedTransaction } from "ethers/utils/transaction";

import { PCToken } from "./PCToken";

export class PCTokenFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(): Promise<PCToken> {
    return super.deploy() as Promise<PCToken>;
  }
  getDeployTransaction(): UnsignedTransaction {
    return super.getDeployTransaction();
  }
  attach(address: string): PCToken {
    return super.attach(address) as PCToken;
  }
  connect(signer: Signer): PCTokenFactory {
    return super.connect(signer) as PCTokenFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PCToken {
    return new Contract(address, _abi, signerOrProvider) as PCToken;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      }
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_whom",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "decreaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "increaseApproval",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "ptSlot",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_src",
        type: "address"
      },
      {
        internalType: "address",
        name: "_dst",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "nonpayable",
    type: "function"
  }
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50610a8c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100b45760003560e01c806370a082311161007157806370a082311461021057806395d89b4114610236578063a9059cbb1461023e578063d73dd6231461026a578063dd62ed3e14610296578063ec565ffe146102c4576100b4565b806306fdde03146100b9578063095ea7b31461013657806318160ddd1461017657806323b872dd14610190578063313ce567146101c657806366188463146101e4575b600080fd5b6100c16102cc565b6040805160208082528351818301528351919283929083019185019080838360005b838110156100fb5781810151838201526020016100e3565b50505050905090810190601f1680156101285780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101626004803603604081101561014c57600080fd5b506001600160a01b038135169060200135610364565b604080519115158252519081900360200190f35b61017e6103c9565b60408051918252519081900360200190f35b610162600480360360608110156101a657600080fd5b506001600160a01b038135811691602081013590911690604001356103dc565b6101ce610551565b6040805160ff9092168252519081900360200190f35b610162600480360360408110156101fa57600080fd5b506001600160a01b038135169060200135610556565b61017e6004803603602081101561022657600080fd5b50356001600160a01b031661064b565b6100c1610677565b6101626004803603604081101561025457600080fd5b506001600160a01b0381351690602001356106dd565b6101626004803603604081101561028057600080fd5b506001600160a01b0381351690602001356106f3565b61017e600480360360408110156102ac57600080fd5b506001600160a01b038135811691602001351661078d565b61017e6107c7565b60606102d66107f7565b805460408051602060026001851615610100026000190190941693909304601f8101849004840282018401909252818152929183018282801561035a5780601f1061032f5761010080835404028352916020019161035a565b820191906000526020600020905b81548152906001019060200180831161033d57829003601f168201915b5050505050905090565b60008161036f6107f7565b336000818152600492909201602090815260408084206001600160a01b03891680865290835293819020949094558351868152935192939192600080516020610a378339815191529281900390910190a350600192915050565b60006103d36107f7565b60020154905090565b6000806103e76107f7565b9050336001600160a01b038616148061042557506001600160a01b038516600090815260048201602090815260408083203384529091529020548311155b61046f576040805162461bcd60e51b815260206004820152601660248201527522a9292fa821aa27a5a2a72fa120a22fa1a0a62622a960511b604482015290519081900360640190fd5b61047a858585610827565b336001600160a01b038616148015906104ba57506001600160a01b0385166000908152600482016020908152604080832033845290915290205460001914155b15610546576001600160a01b038516600090815260048201602090815260408083203384529091529020546104f5908463ffffffff61095b16565b6001600160a01b03868116600090815260048401602090815260408083203380855290835292819020859055805194855251928816939192600080516020610a378339815191529281900390910190a35b506001949350505050565b601281565b6000806105616107f7565b33600090815260048201602090815260408083206001600160a01b0389168452909152902054909150808411156105bd5733600090815260048301602090815260408083206001600160a01b03891684529091528120556105f4565b6105cd818563ffffffff61095b16565b33600090815260048401602090815260408083206001600160a01b038a1684529091529020555b33600081815260048401602090815260408083206001600160a01b038a16808552908352928190205481519081529051929392600080516020610a37833981519152929181900390910190a3506001949350505050565b60006106556107f7565b6001600160a01b03929092166000908152600390920160205250604090205490565b60606106816107f7565b60019081018054604080516020600295841615610100026000190190931694909404601f81018390048302850183019091528084529083018282801561035a5780601f1061032f5761010080835404028352916020019161035a565b60006106ea338484610827565b50600192915050565b6000806106fe6107f7565b33600090815260048201602090815260408083206001600160a01b0389168452909152902054909150610737908463ffffffff6109bd16565b33600081815260048401602090815260408083206001600160a01b038a16808552908352928190208590558051948552519193600080516020610a37833981519152929081900390910190a35060019392505050565b60006107976107f7565b6001600160a01b039384166000908152600491909101602090815260408083209490951682529290925250205490565b60408051772821aa37b5b2b71739ba37b930b3b2973637b1b0ba34b7b760411b8152905190819003601801902081565b60408051772821aa37b5b2b71739ba37b930b3b2973637b1b0ba34b7b760411b8152905190819003601801902090565b60006108316107f7565b6001600160a01b038516600090815260038201602052604090205490915082111561089a576040805162461bcd60e51b815260206004820152601460248201527311549497d25394d551919250d251539517d0905360621b604482015290519081900360640190fd5b6001600160a01b03841660009081526003820160205260409020546108c5908363ffffffff61095b16565b6001600160a01b03808616600090815260038401602052604080822093909355908516815220546108fc908363ffffffff6109bd16565b6001600160a01b03808516600081815260038501602090815260409182902094909455805186815290519193928816927fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef92918290030190a350505050565b600080600061096a8585610a11565b9150915080156109b5576040805162461bcd60e51b81526020600482015260116024820152704552525f5355425f554e444552464c4f5760781b604482015290519081900360640190fd5b509392505050565b600082820183811015610a0a576040805162461bcd60e51b815260206004820152601060248201526f4552525f4144445f4f564552464c4f5760801b604482015290519081900360640190fd5b9392505050565b600080828410610a275750508082036000610a2f565b505081810360015b925092905056fe8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925a26469706673582212203baba0f7148684e8d4e61c4e43b1c056ade25e1970996858e4941c816bca451564736f6c63430006040033";
