import { useState } from "react";
import Header from "./Components/Header";
import Contacts from "./Components/Contacts";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <Contacts />
    </>
  );
}

export default App;
