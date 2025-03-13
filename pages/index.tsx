import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import EncryptComponent from "./components/encrypt"
import DecryptComponent from "./components/decrypt"

export default function Home() {

  const [inputValue, setInputValue] = useState("");
  const [encryptedText, setEncryptedText] = useState("");
  const [decryptedText, setDecryptedText] = useState("");
  const [decryptInput, setDecryptInput] = useState("");


  return (

    <div className="d-flex flex-column align-items-center">
      <nav className="navbar navbar-dark  mb-4 px-5 w-100" style={{ background: "#cfb4eb" }}>
        <span className="navbar-brand mb-0 h1 mx-auto text-danger" style={{ paddingLeft: "20px" }}>
          <a href=""><img src="https://www.honeywell.com/content/dam/honeywellbt/en/images/logos/HON%20logo_200x37%202.png" alt="" /></a>
        </span>
      </nav>

      <div className="py-3">
        <EncryptComponent
          inputValue={inputValue}
          setInputValue={setInputValue}
          encryptedText={encryptedText}
          setEncryptedText={setEncryptedText}
        />

        <DecryptComponent
          decryptInput={decryptInput}
          setDecryptInput={setDecryptInput}
          decryptedText={decryptedText}
          setDecryptedText={setDecryptedText}
        />
      </div>

    </div>
  );
}