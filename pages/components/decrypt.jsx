import axios from "axios";

const DecryptComponent = ({ decryptInput, setDecryptInput, decryptedText, setDecryptedText }) => {
    const handleDecrypt = async () => {
      try {
        if(decryptInput.trim() != ""){
            const response = await axios.post("/api/decrypt", { text: decryptInput });
            setDecryptedText(response.data.decrypted);
        }else{
            alert("Please enter something to proceed")
        }
      } catch (error) {
        console.error("Error decrypting text", error);
      }
    };
  
    return (
      <div className="card shadow-lg p-4" style={{ width: "750px", borderRadius: "10px" }}>
        <h5 className="card-title text-center">Decrypt Text</h5>
        <input
          type="text"
          className="form-control mb-3"
          placeholder="Enter encrypted text"
          value={decryptInput}
          onChange={(e) => setDecryptInput(e.target.value)}
        />
        <button className="btn btn-success w-100" onClick={handleDecrypt}>
          Decrypt
        </button>
        {decryptedText && (
          <div className="alert alert-info mt-3 text-break" role="alert">
            <strong>Decrypted:</strong> {decryptedText}
          </div>
        )}
      </div>
    );
  };


  export default DecryptComponent