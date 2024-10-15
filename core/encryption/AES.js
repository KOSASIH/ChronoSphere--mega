import { createCipheriv, createDecipheriv } from 'crypto';

class AES {
  async encrypt(data, key) {
    const cipher = createCipheriv('aes-256-cbc', key, uuidv4());
    const encryptedData = cipher.update(data, 'utf8', 'hex');
    return encryptedData;
  }

  async decrypt(encryptedData, key) {
    const decipher = createDecipheriv('aes-256-cbc', key, uuidv4());
    const decryptedData = decipher.update(encryptedData, 'hex', 'utf8');
    return decryptedData;
  }
}

export default new AES();
