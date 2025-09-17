import { useState } from "react";

export function Welcome() {
  const [name, setName] = useState('Song');

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      Hello World {name}!
    
    </main>
  );
}

