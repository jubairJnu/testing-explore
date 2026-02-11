import { describe, expect, it } from "vitest";
import { encriptedMessage, encryptedMessagePromise } from "./async";
import cryptoJs from "crypto-js";

describe("async()", () => {
  it("should return encrypt message", async () => {
    const key = "12324";
    const message = "hello";
    const encrptedData = await new Promise((resolve, reject) => {
      encriptedMessage(key, message, (message) => {
        resolve(message);
      });
    });
    expect(encrptedData).toBeDefined();
  });

  //

  it("should return encrypt message promise", async () => {
    const key = "12324";
    const message = "hello";
    const encrptedData = await encryptedMessagePromise(key, message);
    expect(encrptedData).toBeDefined();

    const decrptedMessage = cryptoJs.AES.decrypt(encrptedData, key).toString(
      cryptoJs.enc.Utf8,
    );
    expect(decrptedMessage).toBe(message);
  });
});
