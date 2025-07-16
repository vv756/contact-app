import { useState } from "react";
import Contacts from "./Components/Contacts.jsx";
import Header from "./Components/Header.jsx";

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
