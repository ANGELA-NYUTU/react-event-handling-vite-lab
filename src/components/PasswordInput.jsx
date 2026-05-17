import { useState } from "react";

function PasswordInput() {
  const [password, setPassword] = useState("");

  function handleChange(e) {
    console.log("Entering password...");
    setPassword(e.target.value);
  }

  return (
    <input
      type="password"
      value={password}
      onChange={handleChange}
    />
  );
}

export default PasswordInput;