import CryptoJS from "crypto-js";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { text } = req.body;
  const secretKey = "kovagapu"; // Secret key
  const staticSalt = "kovagapu"; // Use a fixed salt

  // Convert the salt to a WordArray
  const saltWordArray = CryptoJS.enc.Utf8.parse(staticSalt);

  // Derive key from static salt and secret
  const key = CryptoJS.PBKDF2(secretKey, saltWordArray, {
    keySize: 256 / 32,
    iterations: 1000,
  });

  // Encrypt text
  const encrypted = CryptoJS.AES.encrypt(text, key.toString()).toString();

  res.json({ encrypted });
}
