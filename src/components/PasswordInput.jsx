import { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");

  // Event handler for typing
  function handleChange(e) {
    console.log("Entering password...");
    setPassword(e.target.value);
  }

  return (
    <div>
      <input
        type="password"
        value={password}
        onChange={handleChange}
        placeholder="Enter password"
      />
    </div>
  );
}

export default PasswordInput;