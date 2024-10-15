const Web3 = require('web3');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');

class Wallet {
    constructor() {
        this.web3 = new Web3();
        this.wallets = {};
    }

    createWallet() {
        const account = this.web3.eth.accounts.create();
        const walletId = uuidv4();
        this.wallets[walletId] = {
            address: account.address,
            privateKey: account.privateKey,
        };
        this.saveWallet(walletId);
        return walletId;
    }

    saveWallet(walletId) {
        fs.writeFileSync(`wallet_${walletId}.json`, JSON.stringify(this.wallets[walletId]));
    }

    loadWallet(walletId) {
        const walletData = fs.readFileSync(`wallet_${walletId}.json`);
        this.wallets[walletId] = JSON.parse(walletData);
    }

    getWalletAddress(walletId) {
        return this.wallets[walletId].address;
    }

    getWalletPrivateKey(walletId) {
        return this.wallets[walletId].privateKey;
    }
}

module.exports = new Wallet();
