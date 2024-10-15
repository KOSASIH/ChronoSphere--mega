import { generateKeyPairSync } from 'crypto';

class RSA {
  async encrypt(data, publicKey) {
    const encryptedData = crypto.publicEncrypt(publicKey, data);
    return encryptedData;
  }

  async decrypt(encryptedData, privateKey) {
    const decryptedData = crypto.privateDecrypt(privateKey, encryptedData);
    return decryptedData;
  }

  async generateKeyPair() {
    const { publicKey, privateKey } = generateKeyPairSync('rsa', {
      modulusLength: 2048,
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem',
      },
      privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
      },
    });
    return { publicKey, privateKey };
  }
}

export default new RSA();
