import { useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const EncryptComponent = ({ inputValue, setInputValue, encryptedText, setEncryptedText }) => {
  const handleSubmit = async () => {
    try {
        if(inputValue.trim() != ""){
            const response = await axios.post("/api/encrypt", { text: inputValue });
            setEncryptedText(response.data.encrypted);
        }else{
            alert("Please enter something to proceed")
        }
    } catch (error) {
      console.error("Error encrypting text", error);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(encryptedText);
    alert("Copied to clipboard!");
  };

  return (
    <div className="card shadow-lg p-4 mb-4" style={{ width: "750px", borderRadius: "10px" }}>
      <h5 className="card-title text-center">Encrypt Text</h5>
      <input
        type="text"
        className="form-control mb-3"
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn w-100 btn-success text-white" onClick={handleSubmit}>
        Encrypt
      </button>
      {encryptedText && (
        <div className="alert alert-success mt-3 text-break" role="alert">
          <strong>Encrypted:</strong> {encryptedText}
          <button className="btn btn-sm btn-secondary ms-2" onClick={handleCopy}>
            Copy
          </button>
        </div>
      )}
    </div>
  );
};


export default EncryptComponent