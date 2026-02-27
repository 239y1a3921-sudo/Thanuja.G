import React, { useState } from "react";
import StatusMessage from "./StatusMessage";

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>TypeScript Conditional Rendering Demo</h1>

      <StatusMessage isLoggedIn={isLoggedIn} />

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
};

export default App;
