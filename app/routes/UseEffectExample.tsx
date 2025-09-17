import { useState , useEffect } from "react";   

export function UseEffectExample() {
  const [name, setName] = useState("");

  useEffect(() => {

    console.log("name changed:", name);

  }, [name]);
  

  return (
    <div>
      <h1>Name: {name}</h1>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
    </div>
  );
}
