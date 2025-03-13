import CryptoJS from "crypto-js";

export default function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  const { text } = req.body;
  const secretKey = "kovagapu"; // Secret key
  const staticSalt = "kovagapu"; // Use the same fixed salt

  if (!text) {
    return res.status(400).json({ error: "Missing encrypted text" });
  }

  try {
    // Convert the salt to a WordArray
    const saltWordArray = CryptoJS.enc.Utf8.parse(staticSalt);

    // Derive key from the static salt
    const key = CryptoJS.PBKDF2(secretKey, saltWordArray, {
      keySize: 256 / 32,
      iterations: 1000,
    });

    // Decrypt text
    const bytes = CryptoJS.AES.decrypt(text, key.toString());
    const decrypted = bytes.toString(CryptoJS.enc.Utf8);

    if (!decrypted) {
      return res.status(400).json({ error: "Invalid encrypted text" });
    }

    res.json({ decrypted });
  } catch (error) {
    res.status(500).json({ error: `Error decrypting text ${error}` });
  }
}
