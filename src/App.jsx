import { useState } from "react";
import Header from "./Components/Header.jsx";
import Contacts from "./Components/Contacts.jsx";

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
