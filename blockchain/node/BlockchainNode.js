const Web3 = require('web3');

class BlockchainNode {
    constructor() {
        this.web3 = new Web3('http://localhost:8545'); // Connect to local Ethereum node
    }

    async getAccounts() {
        return await this.web3.eth.getAccounts();
    }

    async getBalance(address) {
        return await this.web3.eth.getBalance(address);
    }

    async deployContract(abi, bytecode) {
        const accounts = await this.getAccounts();
        const contract = new this.web3.eth.Contract(abi);

        const deployedContract = await contract
            .deploy({ data: bytecode })
            .send({ from: accounts[0], gas: 1500000, gasPrice: '30000000000' });

        console.log('Contract deployed at address:', deployedContract.options.address);
        return deployedContract;
    }
}

module.exports = new BlockchainNode();
