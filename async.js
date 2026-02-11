import cryptoJs from "crypto-js";

export const encriptedMessage = (key, message, callback) => {
  const encriptedMessage = cryptoJs.AES.encrypt(message, key).toString();
  callback(encriptedMessage);
};

export const encryptedMessagePromise = (key, message) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const encriptedMessage = cryptoJs.AES.encrypt(message, key).toString();
      if (encriptedMessage) {
        resolve("encriptedMessage");
      } else {
        reject(new Error("Failded to encrypt"));
      }
    }, 2000);
  });
};
