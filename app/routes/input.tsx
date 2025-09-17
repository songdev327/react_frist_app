import { useState } from "react";

export function Input() {
  const [name, setName] = useState("");

  return (
    <>

    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>You typed: {name}</p>
    </div>
    
    </>
  );
}
